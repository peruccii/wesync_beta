import { useLogin } from "./model/use_login_model";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export const LoginView = (props: ReturnType<typeof useLogin>) => {
  const { errors, handleSubmit, onSubmit, register } = props;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-white text-black"
          size="getstarted"
          id="button-get-started"
        >
          Get started now
        </Button>
      </DialogTrigger>
      <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-xl">Sign Up</DialogTitle>
        <DialogDescription>
          Enter your information to create an account
        </DialogDescription>
      </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              {...register("name")}
              type="text"
              required
            />
            {errors && errors.email?.message}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email")}
              type="email"
              placeholder="m@example.com"
              required
            />
            {errors && errors.email?.message}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input {...register("password")} type="password" />
            {errors && errors.password?.message}
          </div>
          <Button type="submit" className="w-full">
            Create an account
          </Button>
          <Button variant="outline" className="w-full">
            Sign up with GitHub
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="#" className="underline">
            Sign in
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};
