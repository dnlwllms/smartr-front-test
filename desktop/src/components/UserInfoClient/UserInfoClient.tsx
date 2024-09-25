"use client";

import { useQuery } from "react-query";

import { getUser } from "@/common/network/r114/user";
import { getUserAlarm } from "@/common/network/r114/user-alarm";
import { getUserStatus } from "@/common/network/r114/user-status";

import UserInfo from "@/common/components/UserInfo";
import {
  SMARTR_ORIGIN_URL,
  LANDING_URL_CONTRACT_RENEWAL,
  LANDING_URL_EDIT_USERINFO,
  LANDING_URL_HOMEPAGE_MANAGEMENT,
  LANDING_URL_ALARM,
  LANDING_URL_RECHARGE,
  LANDING_URL_COUPON,
  LANDING_URL_GOODS,
} from "@/src/constants";

export default function UserinfoClient() {
  const { data: users, isLoading: usersIsLoading } = useQuery("user", () =>
    getUser(),
  );

  const { data: userStatus, isLoading: userStatusIsLoading } = useQuery(
    "user-status",
    () => getUserStatus(),
  );

  const { data: userAlarm } = useQuery("user-alarm", () => getUserAlarm());

  return (
    <div>
      <UserInfo
        data={{
          user: users?.body,
          userAlarm: userAlarm?.body,
          userStatus: userStatus?.body,
        }}
        urls={{
          contractRenewalUrl: `${SMARTR_ORIGIN_URL}${LANDING_URL_CONTRACT_RENEWAL}`,
          editUserInfoUrl: `${SMARTR_ORIGIN_URL}${LANDING_URL_EDIT_USERINFO}`,
          homepageManagementUrl: `${SMARTR_ORIGIN_URL}${LANDING_URL_HOMEPAGE_MANAGEMENT}`,
          alarmUrl: `${SMARTR_ORIGIN_URL}${LANDING_URL_ALARM}`,
          rechargeUrl: `${SMARTR_ORIGIN_URL}${LANDING_URL_RECHARGE}`,
          couponUrl: `${SMARTR_ORIGIN_URL}${LANDING_URL_COUPON}`,
          goodsUrl: `${SMARTR_ORIGIN_URL}${LANDING_URL_GOODS}`,
        }}
        usersIsLoading={usersIsLoading}
        userStatusIsLoading={userStatusIsLoading}
      />
    </div>
  );
}
