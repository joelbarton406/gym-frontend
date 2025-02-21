import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SignupForm from "./forms/signup";
import LoginForm from "./forms/login";

export default function SignupLogin() {
  return (
    <>
      <Tabs defaultValue="login" className="w-[375px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">login</TabsTrigger>
          <TabsTrigger value="signup">signup</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>login</CardTitle>
              <CardDescription>login details</CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>signup</CardTitle>
              <CardDescription>signup details</CardDescription>
            </CardHeader>
            <CardContent>
              <SignupForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
