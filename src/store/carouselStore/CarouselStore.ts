import { CarouselType } from "./../../api/requestType";
import { Operation } from "../operation";
import { makeAutoObservable, runInAction } from "mobx";
import requests from "../../api/api";

class CarouselStore {
  allCarouselOperation = new Operation<CarouselType[]>([] as CarouselType[]);

  constructor() {
    makeAutoObservable(this);
  }

  allCarousel: CarouselType[] = [];
  isLoading: boolean = false;

  getAllCarousel = async () => {
    runInAction(() => {
      this.isLoading = true;
    });
    await this.allCarouselOperation.run(() =>
      requests.carousel.getAllCarousel()
    );
    if (this.allCarouselOperation.isSuccess) {
      console.log(
        "All Carousel",
        JSON.stringify(this.allCarouselOperation.data, null, 2)
      );
      runInAction(() => {
        this.allCarousel = this.allCarouselOperation.data;
        this.isLoading = false;
      });
    }
  };
}

export default CarouselStore;
