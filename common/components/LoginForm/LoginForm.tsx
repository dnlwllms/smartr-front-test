"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";
import { apiHost } from "@/common/constants/network";

import { Button, Input, TextButton, Checkbox } from "@hdc-ui/react/components";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { push } = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch(apiHost + "/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    });

    push(`/api/auth/${res.headers.get("Authorization")}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul className="mb-12 flex flex-col gap-y-8">
          <li className="flex flex-col gap-y-1">
            <label htmlFor="username" className="text-body02n text-gray-500">
              아이디
            </label>
            <Input
              id="username"
              name="username"
              value={username}
              size="lg"
              placeholder="아이디를 입력해주세요."
              onChange={({ target: { value } }) => setUsername(value)}
            />
          </li>
          <li className="flex flex-col gap-y-1">
            <label htmlFor="password" className="text-body02n text-gray-500">
              비밀번호
            </label>
            <Input
              type="password"
              name="password"
              value={password}
              size="lg"
              placeholder="비밀번호를 입력해주세요."
              onChange={({ target: { value } }) => setPassword(value)}
            />
          </li>
        </ul>
        <Button type="submit" size="lg" color="black" className="w-full">
          로그인
        </Button>
      </form>
      <div className="mb-[57px] mt-2 flex justify-between">
        <Checkbox label="로그인 상태 유지" />
        <ul className="flex gap-x-[17px]">
          <li className="after:content[``] relative after:absolute after:-right-2.5 after:top-2/4 after:h-2 after:w-[1px] after:-translate-y-2/4 after:bg-gray-200">
            <TextButton type="button" color="gray">
              아이디 찾기
            </TextButton>
          </li>
          <li>
            <TextButton type="button" color="gray">
              비밀번호 찾기
            </TextButton>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center gap-y-4">
        <p className="text-center text-body02m text-black">
          아직 스마트R 회원이 아니신가요?
        </p>
        <Button type="button" size="lg" color="white" className="w-full">
          회원가입
        </Button>
      </div>
    </div>
  );
}
