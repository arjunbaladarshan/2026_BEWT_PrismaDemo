Step 01: create a page.tsx in app/users/create folder

Step 02: design a insert form in page.tsx

Step 03: create a server action named saveData
async function saveData() {
"use server";
console.log("Insert data into database");
}
Step 04: receive formData in server action
async function saveData(formData: FormData)

Step 05: convert formData to regular object
const myObj = {
username: formData.get("username")?.toString() || "",
email: formData.get("email")?.toString() || "",
password_hash: formData.get("password_hash")?.toString() || "",
display_name: formData.get("display_name")?.toString() || "",
profile_picture: formData.get("profile_picture")?.toString() || "",
};
Step 06: use prima’s create method to insert into database
await prisma.users.create({
data: myObj,
});

Step 07: revalidate and redirect to users page
revalidatePath("/users");
redirect("/users");
