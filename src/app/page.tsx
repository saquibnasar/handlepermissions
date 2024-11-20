import { hasPermission, User } from "./hasPermision";

const user: User = { id: "1", roles: ["user"] };

export default function Home() {
  return (
    <>
      {hasPermission(user, "view:comments")
        ? "has permistion"
        : "it does have permistion"}
    </>
  );
}
