import { BackgroundPages } from "../../components/Background/BackgroundPages/backgroundPages";
import { SuccessHeader } from "../../components/Header/headerSuccess/headerScuccess";
import { SectionUserPage } from "./style";

export function UserPage() {
  return (
    <SectionUserPage>
      <SuccessHeader />
      <h1>Userpage</h1>
    </SectionUserPage>
  );
}