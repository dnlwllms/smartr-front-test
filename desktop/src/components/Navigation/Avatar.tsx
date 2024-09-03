"use client";

import { Fragment } from "react";

import { Dialog } from "@hdc-ui/react/clients";
import { IconButton } from "@hdc-ui/react/components";

import MemberInfo from "@/common/components/MemberInfo";

import {
  LANDING_URL_CONTRACT_RENEWAL,
  LANDING_URL_EDIT_USERINFO,
  LANDING_URL_HOMEPAGE_MANAGEMENT,
  SMARTR_ORIGIN_URL,
} from "@/src/constants";

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
                  topMargin: (triggerRect?.height || 0) + 8,
                }}
                handleClose={handleClose}
              >
                <div
                  className={`animate-fadeInDown translate-y z-10 min-w-[375px] rounded-3xl border-solid border-gray-200 bg-white p-6 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)]`}
                >
                  <MemberInfo
                    membershipLevel="정회원"
                    name="알실장"
                    contractPeriod={[
                      new Date("2024-08-10"),
                      new Date("2024-12-31"),
                    ]}
                    deposit={952284}
                    couponCount={839}
                    subscriptionProductName="네이버프리120"
                    contractRenewalLink={`${SMARTR_ORIGIN_URL}${LANDING_URL_CONTRACT_RENEWAL}`}
                    editUserinfoLink={`${SMARTR_ORIGIN_URL}${LANDING_URL_EDIT_USERINFO}`}
                    homepageManagementLink={`${SMARTR_ORIGIN_URL}${LANDING_URL_HOMEPAGE_MANAGEMENT}`}
                  />
                </div>
              </Dialog.Body.Popup>
            </Dialog.Body>
          </Fragment>
        );
      }}
    </Dialog>
  );
}
