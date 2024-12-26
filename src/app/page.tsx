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
        className=""
        background="primary"
        size="xsmall"
        shadow
      >
        Masuk
      </Button>
    </>
  );
}
