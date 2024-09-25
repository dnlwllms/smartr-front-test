import Image from "next/image";
import logoSvg from "../../../public/logo.svg";
import LoginForm from "@/common/components/LoginForm";

//TODO. 임시로 만든 것 입니다. 디자인 나오면 수정하겠습니다.
//TODO. 로그인 상태 유지, 아이디 찾기, 비밀번호 찾기 구현

export default function Page() {
  return (
    <div className="flex h-[calc(100vh-80px)] flex-col items-center justify-center">
      <Image
        width={92}
        height={36}
        src={logoSvg}
        alt="Logo"
        priority
        className="mb-6"
      />
      <div className="w-full max-w-[480px] rounded-2xl border px-12 py-[72px]">
        <h3 className="mb-12 text-heading03b text-gray-900">
          등록된 아이디로
          <br />
          간편하게 로그인하세요
        </h3>
        <LoginForm />
      </div>
    </div>
  );
}
