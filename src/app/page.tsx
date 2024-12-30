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
        className="w-full"
        background="primary"
        // size="large"
        shadow
      >
        Masuk
      </Button>
    </>
  );
}
