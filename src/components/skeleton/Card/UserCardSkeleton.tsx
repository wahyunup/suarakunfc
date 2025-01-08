const UserCardSkeleton = () => {
  return (
    <div className="bg-white border px-[27px] flex h-[81px] justify-between items-center rounded-[10px] w-full">
      <div className="flex gap-[20px] items-center">
        <div className="w-[41px] h-[41px] bg-slate-300 rounded-full animate-pulse"></div>
        <div className="flex flex-col gap-[5px]">
          <div className="bg-slate-300 w-[100px] h-[14px] rounded animate-pulse"></div>
          <div className="flex items-center gap-[10px]">
            <div className="w-[8px] h-[8px] bg-slate-300 rounded-full animate-pulse"></div>
            <div className="bg-slate-300 w-[80px] h-[12px] rounded animate-pulse"></div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="w-[8px] h-[8px] bg-slate-300 rounded-full animate-pulse"></div>
            <div className="bg-slate-300 w-[80px] h-[12px] rounded animate-pulse"></div>
          </div>
        </div>
      </div>
      <div className="w-[46px] h-[46px] bg-slate-300 rounded-[9px] animate-pulse"></div>
    </div>
  );
};

export default UserCardSkeleton;
