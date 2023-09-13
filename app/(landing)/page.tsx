import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      LandingPage
      <div>
        <Button>
          <Link href="/sign-in">Login</Link>
        </Button>
        <Button>
          <Link href="/sign-up">Register</Link>
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
