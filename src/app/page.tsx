import { Button, Input } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Button className={"p-4"} background="secondary" size="medium">
        Masuk
      </Button>
      <Input
        name="password"
        type="password"
        placeholder="Password"
      />
      <Input
        name="text"
        type="text"
        placeholder="text"
        className="mt-4"
      />
    </>
  );
}
