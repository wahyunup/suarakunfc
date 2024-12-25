import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
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
    </>
  );
}
