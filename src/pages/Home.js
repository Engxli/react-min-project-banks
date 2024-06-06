import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deposit, me, withdraw } from "../api/me";

const Home = () => {
  const [selectedTransaction, setSelectedTransaction] = useState("deposit");
  const [amount, setAmount] = useState(0);

  const { data, refetch } = useQuery({
    queryKey: ["myProfile"],
    queryFn: () => me(),
  });

  const { mutate: mutateDeposit } = useMutation({
    mutationKey: ["deposit"],
    mutationFn: () => deposit(amount),
    onSuccess: () => {
      refetch();
    },
  });
  const { mutate: mutateWithdraw } = useMutation({
    mutationKey: ["withdraw"],
    mutationFn: () => withdraw(amount),
    onSuccess: () => {
      refetch();
    },
  });

  const selectTransaction = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const handleOnChange = (e) => {
    setAmount(e.target.value);
  };

  const handleOnSubmit = () => {
    if (selectedTransaction == "deposit") {
      mutateDeposit();
    } else {
      mutateWithdraw();
    }
  };
  return (
    <div className="h-full   flex justify-center flex-col items-center">
      <div className="w-[90%] md:w-[50%]  h-[40%] flex justify-center items-center ">
        <div className=" shadow-md w-[100%] md:w-[60%] h-[90%] rounded-lg flex justify-center items-center flex-col">
          <p>Balance</p>
          <h1 className="text-[80px] font-bold text-green-500">
            {data?.balance} <span className="text-sm">KD</span>
          </h1>
        </div>
      </div>
      <div className="w-[90%] md:w-[50%]  h-[55%] flex justify-center items-center ">
        <div className="bg-white shadow-md w-[100%] md:w-[60%] h-[90%] rounded-lg overflow-hidden flex justify-center items-center flex-col">
          <div className="flex justify-between border-b-[1px] h-[70px] w-full">
            <p
              onClick={() => {
                selectTransaction("deposit");
              }}
              className={`w-full flex justify-center items-center cursor-pointer hover:bg-gray-200 ${
                selectedTransaction == "deposit" && "bg-green-500"
              }`}
            >
              Deposit
            </p>
            <p
              onClick={() => {
                selectTransaction("withdraw");
              }}
              className={`w-full flex justify-center items-center cursor-pointer hover:bg-gray-200 ${
                selectedTransaction == "withdraw" && "bg-green-500"
              }`}
            >
              Withdraw
            </p>
          </div>
          <div className="w-full h-full gap-5 flex justify-center items-center flex-col">
            <div className="w-[80%] h-[75px]">
              <Input label={"Amount"} handleOnChange={handleOnChange} />
            </div>
            <div className="w-[80%] h-[36px]">
              <Button label={"Sumbit"} onClick={handleOnSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
