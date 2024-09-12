import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <Card className="w-full max-w-md bg-muted/50 shadow-xl border-none rounded-md p-6">
        <CardHeader>
          <CardTitle className="text-center relative">
            <span className="text-[#353132] font-bold text-3xl tracking-tighter leading-none pr-2">
              Kết nối với Google Drive thành công!
            </span>
          </CardTitle>
          <CardDescription>
            Ứng dụng Kodi đã kết nối thành công với tài khoản Google Drive. Quay lại ứng dụng Kodi để xem kết quả.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8"></CardContent>
        <CardFooter>
          <Link href={"/"} className={buttonVariants({ variant: "link" })}>
            Trở lại trang chủ
          </Link>
        </CardFooter>
      </Card>
    </main>

    // <main className="flex min-h-screen flex-col items-center gap-10 p-24">
    //   <Card className="bg-muted/50 shadow-xl border-none rounded-md p-6">
    //     <CardHeader>
    //       <CardTitle className="text-center relative">
    //         <span className="text-[#353132] font-bold text-3xl tracking-tighter leading-none pr-2">
    //           Success
    //         </span>
    //       </CardTitle>
    //     </CardHeader>
    //     <CardContent className="grid gap-8"></CardContent>
    //     <CardFooter>
    //       <Link href={"/"} className={buttonVariants({ variant: "link" })}>
    //         Go to Home
    //       </Link>
    //     </CardFooter>
    //   </Card>
    // </main>
  );
}
