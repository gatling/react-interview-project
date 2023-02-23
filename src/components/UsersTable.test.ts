import {type User} from "./UsersTable";

describe("sample", () => {
    it("sample", () => {
        const user: User = {
            name: "Name",
            id: 1,
            username: "username"
        };
        expect(user).toBe(user);
    })
});
