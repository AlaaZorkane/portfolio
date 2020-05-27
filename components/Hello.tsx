import React, { FC } from "react";

type Props = {
  who: string;
};

const Hello: FC<Props> = ({ who }) => (
  <div className="m-auto">
    <h1 className="text-3xl">Hello {who}!</h1>
    <h4 className="text-center text-sm italic">yes, it works 🎉</h4>
  </div>
);

export default Hello;
