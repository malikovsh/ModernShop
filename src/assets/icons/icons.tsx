import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Circle, Path, SvgProps } from "react-native-svg"
import { COLORS } from '../../constants/Color';

export const TelephoneIcon = () => {
    return (
        <Svg
            width={21}
            height={21}
            viewBox="0 0 21 21"
            fill="none"
        >
            <Path
                clipRule="evenodd"
                d="M10.032 10.972c3.989 3.988 4.894-.625 7.434 1.913 2.448 2.448 3.856 2.938.753 6.04-.388.312-2.857 4.07-11.534-4.605C-1.993 5.644 1.762 3.172 2.074 2.784c3.11-3.11 3.592-1.695 6.04.753 2.54 2.54-2.071 3.447 1.918 7.435z"
                stroke="#E4B717"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
};

export const LockIcon = () => {
    return (
        <Svg
            width={16}
            height={20}
            viewBox="0 0 16 20"
            fill="none"
        >
            <Path
                d="M8 15.238c-.53 0-1.04-.2-1.414-.558A1.86 1.86 0 016 13.333c0-1.057.89-1.904 2-1.904.53 0 1.04.2 1.414.557.375.358.586.842.586 1.347s-.21.99-.586 1.347A2.052 2.052 0 018 15.238zm6 2.857V8.571H2v9.524h12zm0-11.428c.53 0 1.04.2 1.414.558.375.357.586.841.586 1.346v9.524c0 .505-.21.99-.586 1.347A2.052 2.052 0 0114 20H2c-.53 0-1.04-.2-1.414-.558A1.86 1.86 0 010 18.095V8.571c0-1.057.89-1.904 2-1.904h1V4.762a4.65 4.65 0 011.464-3.367A5.13 5.13 0 018 0c.657 0 1.307.123 1.913.362.607.24 1.158.59 1.623 1.033.464.442.832.967 1.083 1.545.252.577.381 1.197.381 1.822v1.905h1zM8 1.905c-.796 0-1.559.3-2.121.837A2.79 2.79 0 005 4.762v1.905h6V4.762a2.79 2.79 0 00-.879-2.02A3.078 3.078 0 008 1.905z"
                fill="#E4B717"
            />
        </Svg>
    );
};

export const HomeIcon = (props: SvgProps & { isFocused?: boolean }) => {
    return (
        <Svg
            width={27}
            height={27}
            viewBox="0 0 27 27"
            fill="none"
        >
            <Path
                d="M24.36 10.326a.75.75 0 10-1.5 0h1.5zm-20.237 0a.75.75 0 10-1.5 0h1.5zm12.857 15.25l-.172-.73.172.73zm-6.977 0l.173-.73-.173.73zm7.414-21.78l-.532.528.532-.528zm8.034 9.155a.75.75 0 101.065-1.057l-1.065 1.057zM9.566 3.796l.532.528-.532-.528zM.468 11.894a.75.75 0 101.064 1.057L.468 11.894zm9.857 10.37l-.737-.138.737.138zm.027-.143l.737.138-.737-.138zm6.28 0l-.738.138.738-.138zm.026.143l.738-.138-.738.138zm-.402 3.097l-.677-.322.677.322zm-.84.019a.75.75 0 001.355.644l-1.354-.644zm-4.689-.019l-.677.323.677-.323zm-.515.663a.75.75 0 001.354-.644l-1.354.644zm2.393-6.366l-.2-.723.2.723zm1.774 0l.2-.723-.2.723zm8.48-9.332v6.826h1.5v-6.826h-1.5zM4.124 17.152v-6.826h-1.5v6.826h1.5zm12.685 7.695c-2.181.515-4.451.515-6.632 0l-.345 1.46a15.92 15.92 0 007.321 0l-.344-1.46zm-6.632 0c-3.542-.837-6.053-4.021-6.053-7.695h-1.5c0 4.362 2.982 8.156 7.208 9.155l.345-1.46zm6.976 1.46c4.226-.998 7.208-4.793 7.208-9.155h-1.5c0 3.674-2.51 6.858-6.052 7.695l.344 1.46zm-.267-21.983l8.566 8.627 1.065-1.057-8.566-8.627-1.065 1.057zM9.034 3.267L.468 11.894l1.064 1.057 8.566-8.627-1.064-1.057zm8.916 0c-.91-.917-1.646-1.659-2.301-2.163-.673-.517-1.35-.854-2.157-.854v1.5c.343 0 .703.129 1.243.544.557.428 1.21 1.083 2.15 2.03l1.065-1.057zm-7.852 1.057c.94-.947 1.593-1.602 2.15-2.03.54-.415.9-.544 1.244-.544V.25c-.807 0-1.485.337-2.157.854-.656.504-1.391 1.246-2.301 2.163l1.064 1.057zm.964 18.078l.027-.143-1.474-.276-.027.143 1.474.276zm4.833-.143l.026.143 1.475-.276-.027-.143-1.474.276zm-.316 2.78l-.162.34 1.354.645.162-.34-1.354-.645zm-5.53.645l.163.34 1.354-.644-.162-.34-1.354.644zm5.872-3.282a4.295 4.295 0 01-.342 2.637l1.354.645a5.794 5.794 0 00.463-3.558l-1.475.276zm-6.333-.276a5.795 5.795 0 00.462 3.558l1.354-.645a4.294 4.294 0 01-.342-2.637l-1.474-.276zm3.217-1.745c.45-.125.924-.125 1.373 0l.401-1.446a4.065 4.065 0 00-2.175 0l.401 1.446zm4.564 1.602a3.906 3.906 0 00-2.79-3.048l-.401 1.446a2.406 2.406 0 011.716 1.878l1.475-.276zm-6.28.276a2.406 2.406 0 011.716-1.878l-.4-1.446a3.906 3.906 0 00-2.79 3.048l1.474.276z"
                fill={props.isFocused ? COLORS.btnColor : "#D3D3D3"}
            />
        </Svg>
    );
};

export const BasketIcon = (props: SvgProps & { isFocused?: boolean }) => {
    return (
        <Svg
            width={28}
            height={27}
            viewBox="0 0 28 27"
            fill="none"
        >
            <Path
                d="M1.5 1l2.885.5L5.72 17.413a2.496 2.496 0 002.496 2.293H23.35a2.497 2.497 0 002.476-2.144l1.316-9.097a1.86 1.86 0 00-1.574-2.107c-.089-.013-20.72-.02-20.72-.02M17.278 11.466h3.847"
                stroke={props.isFocused ? COLORS.btnColor : "#D3D3D3"}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.609 24.516a.755.755 0 110 1.51.755.755 0 010-1.51zM23.257 24.516a.756.756 0 110 1.512.756.756 0 010-1.512z"
                fill={props.isFocused ? COLORS.btnColor : "#D3D3D3"}
                stroke={props.isFocused ? COLORS.btnColor : "#D3D3D3"}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export const HeartIcon = (props: SvgProps & { isFocused?: boolean }) => {
    return (
        <Svg
            width={28}
            height={26}
            viewBox="0 0 28 26"
            fill="none"
        >
            <Path
                clipRule="evenodd"
                d="M1.54 12.594C.097 8.093 1.782 2.948 6.507 1.426a8.07 8.07 0 017.296 1.225c1.955-1.511 4.8-2.022 7.283-1.225 4.725 1.522 6.42 6.667 4.98 11.168-2.244 7.135-12.263 12.63-12.263 12.63s-9.946-5.412-12.265-12.63z"
                stroke={props.isFocused ? COLORS.btnColor : "#D3D3D3"}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M19.179 6.012a3.737 3.737 0 012.576 3.255"
                stroke={props.isFocused ? COLORS.btnColor : "#D3D3D3"}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export const ChatIcon = (props: SvgProps & { isFocused?: boolean }) => {
    return (
        <Svg
            width={29}
            height={26}
            viewBox="0 0 29 26"
            fill="none"
        >
            <Path
                d="M4.049 5.697l7.917 5.493a4.628 4.628 0 005.253 0l7.917-5.493M2.108 17.204a16.906 16.906 0 010-8.383c.921-3.604 3.863-6.39 7.595-7.193l.622-.133a20.3 20.3 0 018.535 0l.621.133c3.732.803 6.674 3.59 7.595 7.193.704 2.752.704 5.63 0 8.383-.92 3.603-3.863 6.389-7.595 7.192l-.621.134a20.3 20.3 0 01-8.535 0l-.622-.134c-3.732-.803-6.674-3.589-7.595-7.192z"
                stroke={props.isFocused ? COLORS.btnColor : "#D3D3D3"}
                strokeWidth={1.5}
                strokeLinecap="round"
            />
        </Svg>
    );
};

export const ProfileIcon = (props: SvgProps & { isFocused?: boolean }) => {
    return (
        <Svg
            width={22}
            height={28}
            viewBox="0 0 22 28"
            fill="none"
        >
            <Path
                clipRule="evenodd"
                d="M11.018 18.298c-5.338 0-9.897.807-9.897 4.04 0 3.232 4.53 4.068 9.897 4.068 5.339 0 9.896-.808 9.896-4.04 0-3.23-4.529-4.068-9.896-4.068z"
                stroke={props.isFocused ? COLORS.btnColor : "#D3D3D3"}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                clipRule="evenodd"
                d="M11.018 13.687a6.344 6.344 0 10-6.344-6.344 6.323 6.323 0 006.3 6.344h.044z"
                stroke={props.isFocused ? COLORS.btnColor : "#D3D3D3"}
                strokeWidth={1.42857}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export const SearchIcon = () => {
    return (
        <Svg
            width={21}
            height={21}
            viewBox="0 0 21 21"
            fill="none"
        >
            <Path
                d="M16.572 15.11L21 19.538 19.537 21l-4.426-4.428a9.263 9.263 0 01-5.807 2.036C4.168 18.608 0 14.44 0 9.304S4.168 0 9.304 0s9.304 4.168 9.304 9.304a9.263 9.263 0 01-2.036 5.807zm-2.073-.766a7.213 7.213 0 002.041-5.04 7.235 7.235 0 00-7.236-7.236 7.235 7.235 0 00-7.236 7.236 7.235 7.235 0 007.236 7.236 7.213 7.213 0 005.04-2.041l.155-.155z"
                fill="#D3D3D3"
            />
        </Svg>
    );
};

export const FilterIcon = () => {
    return (
        <Svg
            width={23}
            height={21}
            viewBox="0 0 23 21"
            fill="none"
        >
            <Path
                d="M9.089 16.452H1.038M12.68 4.067h8.05"
                stroke="#E4B717"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                clipRule="evenodd"
                d="M7.04 3.998C7.04 2.342 5.686 1 4.02 1 2.352 1 1 2.342 1 3.998c0 1.656 1.352 2.998 3.02 2.998 1.667 0 3.02-1.342 3.02-2.998zM21.444 16.402a3.008 3.008 0 00-3.018-2.998c-1.669 0-3.02 1.342-3.02 2.998 0 1.656 1.351 2.998 3.02 2.998a3.008 3.008 0 003.018-2.998z"
                stroke="#E4B717"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export const FavoriteIcon = (props: SvgProps & { isFocus?: boolean }) => {
    return (
        <Svg
            width={34}
            height={34}
            viewBox="0 0 34 34"
            fill="none"
        >
            <Circle cx={17} cy={17} r={16.5} stroke="#179AE4" fill={
                props.isFocus ? '#179AE4' : "white"
            } />
            <Path
                clipRule="evenodd"
                d="M9.782 17.078c-.848-2.65.143-5.677 2.924-6.573a4.75 4.75 0 014.294.722c1.15-.89 2.824-1.19 4.285-.722 2.781.896 3.78 3.924 2.931 6.573C22.896 21.276 17 24.51 17 24.51s-5.853-3.185-7.218-7.432z"
                stroke="#179AE4"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={props.isFocus ? "white" : "none"}
            />
            <Path
                d="M20.163 13.205a2.199 2.199 0 011.515 1.915"
                stroke={props.isFocus ? "white" : '#179AE4'}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export const FavoriteChangeIcon = () => {
    return (
        <Svg
            width={34}
            height={34}
            viewBox="0 0 34 34"
            fill="none"
        >
            <Circle cx={17} cy={17} r={16.5} fill="#179AE4" stroke="#179AE4" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.782 17.078c-.848-2.65.143-5.677 2.924-6.573a4.75 4.75 0 014.294.722c1.15-.89 2.824-1.19 4.285-.722 2.781.896 3.78 3.924 2.932 6.573C22.897 21.276 17 24.51 17 24.51s-5.853-3.185-7.218-7.432z"
                fill="#fff"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.163 13.205a2.199 2.199 0 011.516 1.915z"
                fill="#fff"
            />
            <Path
                d="M20.163 13.205a2.199 2.199 0 011.516 1.915"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export const DeleteIcon = () => {
    return (
        <Svg
            width={13}
            height={16}
            viewBox="0 0 13 16"
            fill="none"
        >
            <Path
                d="M2.438 16c-.447 0-.83-.174-1.149-.523a1.792 1.792 0 01-.476-1.255V2.667a.753.753 0 01-.58-.256A.9.9 0 010 1.778c0-.252.078-.463.234-.634A.75.75 0 01.813.889h3.25c0-.252.078-.463.234-.634A.75.75 0 014.875 0h3.25c.23 0 .423.085.58.256a.9.9 0 01.232.633h3.25c.23 0 .424.085.58.256a.9.9 0 01.233.633.904.904 0 01-.234.634.75.75 0 01-.579.255v11.555c0 .49-.159.908-.477 1.256-.319.349-.701.523-1.148.522H2.438zm0-13.333v11.555h8.124V2.667H2.438zm1.624 8.889c0 .251.079.463.234.633a.75.75 0 00.579.255c.23 0 .423-.085.58-.256a.9.9 0 00.232-.632V5.333a.904.904 0 00-.234-.633.75.75 0 00-.578-.256.753.753 0 00-.58.256.9.9 0 00-.232.633v6.223zm3.25 0c0 .251.079.463.234.633a.75.75 0 00.579.255c.23 0 .423-.085.58-.256a.9.9 0 00.232-.632V5.333a.904.904 0 00-.233-.633.75.75 0 00-.579-.256.753.753 0 00-.58.256.9.9 0 00-.232.633v6.223z"
                fill="#8A8A8A"
            />
        </Svg>
    );
};

export const ExistIcon = () => {
    return (
        <Svg
            width={23}
            height={23}
            viewBox="0 0 23 23"
            fill="none"
        >
            <Path
                d="M11.5 15.438l3.938-3.938m0 0L11.5 7.562m3.938 3.938H1m6.563-6.236V5.2c0-1.47 0-2.206.286-2.767a2.623 2.623 0 011.146-1.147C9.557 1 10.293 1 11.763 1H17.8c1.47 0 2.204 0 2.766.286.494.252.896.653 1.148 1.147C22 2.994 22 3.729 22 5.196v12.609c0 1.467 0 2.2-.286 2.762a2.627 2.627 0 01-1.148 1.147c-.561.286-1.295.286-2.762.286h-6.046c-1.467 0-2.202 0-2.763-.286a2.626 2.626 0 01-1.146-1.148c-.287-.561-.287-1.296-.287-2.766v-.066"
                stroke="#8A8A8A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export const EditIcon = () => {
    return (
        <Svg
            width={35}
            height={29}
            viewBox="0 0 35 29"
            fill="none"
        >
            <Path
                d="M5.444 19.201L2.196 27.25l8.662-1.007 20.41-17.241c.448-.378.808-.83 1.059-1.332a3.78 3.78 0 00.404-1.589 3.75 3.75 0 00-.314-1.604 4.144 4.144 0 00-.984-1.377 4.757 4.757 0 00-1.503-.938 5.263 5.263 0 00-3.607-.08 4.833 4.833 0 00-1.554.871L5.444 19.201z"
                stroke="#fff"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export const ProfileIcon2 = () => {
    return (
        <Svg
            width={16}
            height={21}
            viewBox="0 0 16 21"
            fill="none"
        >
            <Path
                d="M1 18.007c0-2.548 1.697-4.717 4.004-5.119l.208-.036a16.246 16.246 0 015.576 0l.208.036C13.303 13.29 15 15.46 15 18.007c0 1.1-.819 1.993-1.828 1.993H2.828C1.818 20 1 19.108 1 18.007zM12.083 5.156c0 2.296-1.828 4.157-4.083 4.157S3.917 7.452 3.917 5.155C3.917 2.861 5.745 1 8 1s4.083 1.86 4.083 4.156z"
                stroke="#8A8A8A"
                strokeWidth={2}
            />
        </Svg>
    );
};

export const OrderIcon = () => {
    return (
        <Svg
            width={20}
            height={23}
            viewBox="0 0 20 23"
            fill="none"
        >
            <Path
                d="M15.823 1H3.471A2.47 2.47 0 001 3.47v16.06A2.47 2.47 0 003.47 22h12.354a2.47 2.47 0 002.47-2.47V3.47A2.47 2.47 0 0015.824 1z"
                stroke="#8A8A8A"
                strokeWidth={2}
            />
            <Path
                d="M5.94 7.177h7.412M5.94 12.118h7.412M5.94 17.059h4.941"
                stroke="#8A8A8A"
                strokeWidth={2}
                strokeLinecap="round"
            />
        </Svg>
    );
};

export const ConfirmIcon = (props: SvgProps & { isFocus?: boolean }) => {
    return (
        <Svg
            width={133}
            height={133}
            viewBox="0 0 133 133"
            fill="none"
        >
            <Path
                d="M66.5 0a66.5 66.5 0 100 133 66.5 66.5 0 000-133zM57 93.052l-23.75-23.75 7.553-7.552L57 77.948 92.198 42.75l7.58 7.533L57 93.053z"
                fill="#E4B717"
            />
        </Svg>
    );
};