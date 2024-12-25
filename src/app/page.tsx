import { Button, Input } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Input name="text" type="text" placeholder="text" />
      <Input
        name="password"
        type="password"
        placeholder="Password"
      />
      <Button
        className="p-4 mt-3 w-full"
        background="primary"
        size="medium"
        shadow
      >
        Masuk
      </Button>
    </>
  );
}
