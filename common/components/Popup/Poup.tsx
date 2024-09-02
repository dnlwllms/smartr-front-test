"use client";

import Image from "next/image";

import addDays from "date-fns/addDays";

import { TextButton } from "@hdc-ui/react/components";

import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";

const popups = ["등기부등본 자동 첨부" as const];

type PopupType = (typeof popups)[number];

type PopupReducerState = {
  popup: Array<PopupType>;
};

type PopupReducerAction = {
  type: "open" | "close";
  payload?: PopupType;
};

export const PopupContext = createContext<
  [PopupReducerState, Dispatch<PopupReducerAction>]
>([
  {
    popup: [],
  },
  () => {},
]);

const reducer = (state: PopupReducerState, action: PopupReducerAction) => {
  switch (action.type) {
    case "open": {
      if (action.payload) {
        const isHide = document.cookie.includes(
          `HIDE_POPUP_${popups.indexOf(action.payload)}=Y`,
        );
        if (!isHide && !state.popup.includes(action.payload)) {
          state.popup.push(action.payload);
        }
        return { ...state };
      }

      return state;
    }
    case "close": {
      state.popup.pop();

      return { ...state };
    }
  }
};

export function PopupProvider({ children }: { children: ReactNode }) {
  const popupReducer = useReducer(reducer, {
    popup: [],
  } as PopupReducerState);

  return (
    <PopupContext.Provider value={popupReducer}>
      {children}
    </PopupContext.Provider>
  );
}

export type PopupProps = {
  landingPopup?: PopupType;
};

export default function Popup(props: PopupProps) {
  const [state, dispatch] = useContext(PopupContext);

  useEffect(() => {
    if (props.landingPopup) {
      dispatch({ type: "open", payload: props.landingPopup });
    }
  }, [dispatch, props.landingPopup]);

  const hasPopup = state.popup.length !== 0;

  useEffect(() => {
    if (hasPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [hasPopup]);

  if (!hasPopup) {
    return null;
  }

  const lastIndex = state.popup.length - 1;

  const renderPopup = (type: PopupType) => {
    switch (type) {
      case "등기부등본 자동 첨부": {
        return (
          <div>
            <Image
              width={400}
              height={556}
              src="https://image.r114.co.kr/images/manager/leader/web/2024/main/main_popup_240809.png"
              alt="등기부등본 자동 첨부 스마트 등록 무료!"
              priority
            />
            <HidePopupButtons type={type} />
          </div>
        );
      }

      default: {
        return null;
      }
    }
  };

  return (
    <div
      className="fixed left-0 top-0 z-[10000001] flex h-[100dvh] w-[100dvw] overflow-auto bg-dimmedEffectBlack70D"
      onClick={() => dispatch({ type: "close" })}
    >
      <div className="m-auto inline-block" onClick={(e) => e.stopPropagation()}>
        {renderPopup(state.popup[lastIndex])}
      </div>
    </div>
  );
}

function HidePopupButtons({ type }: { type: PopupType }) {
  const [_, dispatch] = useContext(PopupContext);

  const handleHideClick = (period: number) => {
    document.cookie = `HIDE_POPUP_${popups.indexOf(type)}=Y;expires=${addDays(new Date(), period)}`;
    dispatch({ type: "close", payload: type });
  };

  const closeIcon = (
    <svg>
      <use href="/icons/outlined/character.svg#Outlined/Character/close" />
    </svg>
  );

  return (
    <div className="flex justify-between">
      <TextButton
        color="gray"
        icon={{
          position: "leading",
          node: closeIcon,
        }}
        onClick={() => handleHideClick(1)}
      >
        오늘 하루 열지 않기
      </TextButton>
      <TextButton
        color="gray"
        icon={{
          position: "leading",
          node: closeIcon,
        }}
        onClick={() => handleHideClick(7)}
      >
        일주일동안 보지 않기
      </TextButton>
    </div>
  );
}
