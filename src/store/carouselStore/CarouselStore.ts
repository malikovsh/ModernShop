import { Operation } from "../operation";
import { makeAutoObservable, runInAction } from "mobx";
import requests from "../../api/api";
import { CarouselType } from "../../api/requestType";

class CarouselStore {
  allCarouselOperation = new Operation<CarouselType[]>([] as CarouselType[]);

  constructor() {
    makeAutoObservable(this);
    this.getAllCarousel();
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
      runInAction(() => {
        this.allCarousel = this.allCarouselOperation.data;
        this.isLoading = false;
      });
    }
  };
}

export default CarouselStore;
