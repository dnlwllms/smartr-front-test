"use client";

import { Fragment } from "react";

import { Dialog } from "@hdc-ui/react/clients";
import { IconButton } from "@hdc-ui/react/components";

import Inquiry from "@/common/components/Inquiry";

import { REMOTE_CONTROL_URL } from "@/src/constants";

import NoticeClient from "../NoticeClient";
import UserinfoClient from "../UserInfoClient";

export default function Avatar() {
  return (
    <Dialog>
      {({ handleClose, triggerRect }) => {
        return (
          <Fragment>
            <Dialog.Trigger>
              <IconButton href="/icons/outlined/peoples.svg#Outlined/Peoples/user" />
            </Dialog.Trigger>
            <Dialog.Body>
              <Dialog.Body.Popup
                triggerRect={triggerRect}
                positionOption={{
                  topMargin: triggerRect?.height,
                  leftMargin: -32,
                }}
                handleClose={handleClose}
              >
                <div
                  className={`translate-y z-10 min-w-[375px] animate-fadeInDown rounded-3xl border-solid border-gray-200 bg-white py-6 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)]`}
                >
                  <div className="flex max-h-[calc(100vh-100px)] flex-col gap-y-10 overflow-auto px-6">
                    <UserinfoClient />
                    <NoticeClient />
                    <Inquiry remoteControlUrl={REMOTE_CONTROL_URL} />
                  </div>
                </div>
              </Dialog.Body.Popup>
            </Dialog.Body>
          </Fragment>
        );
      }}
    </Dialog>
  );
}
