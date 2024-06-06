import instance from ".";

const me = async () => {
  const res = await instance.get("/mini-project/api/auth/me");
  return res.data;
};

const deposit = async (amount) => {
  const res = await instance.put("/mini-project/api/transactions/deposit", {
    amount,
  });

  return res.data;
};

const withdraw = async (amount) => {
  const res = await instance.put("/mini-project/api/transactions/withdraw", {
    amount,
  });

  return res.data;
};

export { me, deposit, withdraw };
