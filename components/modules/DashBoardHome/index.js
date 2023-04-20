import React, { useEffect, useState } from "react";
import TextInput from "../../ui/TextInput";
import { TbSearch } from "react-icons/tb";
import FallBackImage from "../../common/FallBackImage";
import { HiPlus } from "react-icons/hi";
import { MdOutlineSort, MdSort } from "react-icons/md";
import DropDownItem from "../../ui/DropDownItem";
import TwoSides from "../../common/TwoSides";
import Accordance from "../../common/Accordiance";
import FlexContainer from "../../common/FlexContainer";
import ButtonComp from "../../ui/ButtonComp";
import { TableComp } from "../../common/Table";
import { useTheme } from "next-themes";
import {
  useSearchCoinPriceQuery,
  useSearchCoinsQuery,
  useTimeFrameQuery,
} from "../../../store/Coins/coinsApi";
import Spinner from "../../common/Spinner";
import { Controller, useForm } from "react-hook-form";
import {
  generateMaxLength,
  generateMinLength,
} from "../../../constants/errors";
import { getUserDataS } from "../../../helper";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

export default function DashBoardHome() {
  const router=useRouter();
   const {query:{success}} =router;
  //  console.log(query,'setEndDate')

   useEffect(() => {
    if(success){
      toast.success(success)
      redirectToPage()
    }
   }, [success])

   const redirectToPage = () => {
    router.push('/dashboard'); // Replace '/new-page' with the path of the page you want to redirect to
  };
   
  const options = [
    {
      value: 1,
      label: <span className=" font-semibold">1</span>,
    },
    {
      value: 2,
      label: <span className=" font-semibold">2</span>,
    },
    {
      value: 3,
      label: <span className=" font-semibold">3</span>,
    },
    {
      value: 4,
      label: <span className=" font-semibold">4</span>,
    },
    {
      value: 5,
      label: <span className=" font-semibold">5</span>,
    },
  ];
  const options1 = [
    {
      value: 1,
      label: <span className=" font-semibold  ">1</span>,
    },
    {
      value: 2,
      label: <span className=" font-semibold">2</span>,
    },
    {
      value: 3,
      label: <span className=" font-semibold">3</span>,
    },
    {
      value: 4,
      label: <span className=" font-semibold">4</span>,
    },
    {
      value: 5,
      label: <span className=" font-semibold">5</span>,
    },
  ];
  const options2 = [
    {
      value: 1,
      label: <span className=" text-sm font-semibold">1 min</span>,
    },
    {
      value: 3,
      label: <span className=" text-sm font-semibold">3 mins</span>,
    },
    {
      value: 5,
      label: <span className=" text-sm font-semibold">5 mins</span>,
    },
    {
      value: 15,
      label: <span className="text-sm  font-semibold">15 mins</span>,
    },
    {
      value: 30,
      label: <span className=" text-sm font-semibold whitespace-nowrap">30 mins</span>,
    },
    {
      value: 60,
      label: <span className="text-sm  font-semibold  whitespace-nowrap ">1 hrs</span>,
    },
    {
      value: 120,
      label: <span className=" text-sm  font-semibold  whitespace-nowrap">2 hrs</span>,
    },
    {
      value: 240,
      label: <span className=" text-sm  font-semibold  whitespace-nowrap">4 hrs</span>,
    },
    {
      value: 360,
      label: <span className="  text-sm font-semibold  whitespace-nowrap">6 hrs</span>,
    },
    {
      value: 480,
      label: <span className="  text-sm font-semibold  whitespace-nowrap">8 hrs</span>,
    },
    {
      value: 720,
      label: <span className=" text-sm font-semibold">12 hrs</span>,
    },

    {
      value: 1440,
      label: <span className="text-sm  font-semibold">1 Day</span>,
    },

    {
      value: 4320,
      label: <span className="text-sm  font-semibold">3 Days</span>,
    },

    {
      value: 10080,
      label: <span className="text-sm  font-semibold">1 week</span>,
    },

    {
      value: 43200,
      label: <span className="text-sm font-semibold">1 Month</span>,
    },
    
  ];
  const options3 = [
    {
      value: 2,
      label: <span className=" text-sm font-semibold">1 min</span>,
    },

    {
      value: 3,
      label: <span className="text-sm  font-semibold">3 mins</span>,
    },

    {
      value: 5,
      label: <span className=" text-sm font-semibold">5 mins</span>,
    },

    {
      value: 10,
      label: <span className=" text-sm font-semibold">10 mins</span>,
    },
    {
      value: 15,
      label: <span className="text-sm  font-semibold">15 mins</span>,
    },

    {
      value: 30,
      label: <span className=" text-sm font-semibold whitespace-nowrap">30 mins</span>,
    },
    {
      value: 45,
      label: <span className="text-sm  font-semibold">45 mins</span>,
    },
    {
      value: 60,
      label: <span className=" text-sm font-semibold  whitespace-nowrap ">1 hrs</span>,
    },
    {
      value: 120,
      label: <span className=" text-sm font-semibold  whitespace-nowrap">2 hrs</span>,
    },
    {
      value: 240,
      label: <span className=" text-sm font-semibold  whitespace-nowrap">4 hrs</span>,
    },
    {
      value: 360,
      label: <span className=" text-sm font-semibold  whitespace-nowrap">6 hrs</span>,
    },
    {
      value: 480,
      label: <span className="text-sm  font-semibold  whitespace-nowrap">8 hrs</span>,
    },
    {
      value: '12h',
      label: <span className=" text-sm font-semibold">12 hrs</span>,
    },

     {
      value: '1d',
      label: <span className=" text-sm font-semibold">1 day</span>,
    },

     {
      value: '3d',
      label: <span className=" text-sm font-semibold">3 days</span>,
    },

     {
      value: '1w',
      label: <span className=" text-sm font-semibold">1 week</span>,
    },

     {
      value: '1M',
      label: <span className=" text-sm font-semibold">1 month</span>,
    },
    
  ];
  const [getTimeFrame, setTimeFrame] = useState(options[4]);
  const [getShiftFrame, setShiftFrame] = useState(options1[4]);
  const [coinName, setCoinName] = useState("SOL");

  const defaultOption = options[4];
  const { theme, setTheme } = useTheme();
  const [listDay, seyListDay] = useState(6);
  const [timeLeft,setTimeLeft] =useState(options2[1])
  //
     //  this for Pules TimeFrame 
  const [day1,setDay1]=useState({label:<span className="flex whitespace-nowrap">DAY</span>,value:'1440'})
  const [fourHours,setFourHours]=useState({label:<span className="flex whitespace-nowrap">4 hrs</span>,value:'240'});
  const [oneHour,setOneHours] =useState({label:<span className="flex whitespace-nowrap">1 Hr</span>,value:'60'})
  const [fifteenMin,setFifteenMin] =useState({label:<span className="flex whitespace-nowrap">15 Min</span>,value:'15'});
  const [fiveMin,setFiveMin]=useState({label:<span className="flex whitespace-nowrap">5 Min</span>,value:'5'})
  // 

  const [day1b,setDay1b]=useState({label:<span className="flex whitespace-nowrap px-0 mx-0">DAY</span>,value:'1d'})
  const [fourHoursb,setFourHoursb]=useState({label:<span className="flex whitespace-nowrap">4 hrs</span>,value:'240'});
  const [oneHourb,setOneHoursb] =useState({label:<span className="flex whitespace-nowrap">1 Hr</span>,value:'60'})
  const [fifteenMinb,setFifteenMinb] =useState({label:<span className="flex whitespace-nowrap">15 Min</span>,value:'15'});
  const [fiveMinb,setFiveMinb]=useState({label:<span className="flex whitespace-nowrap">5 Min</span>,value:'5'})
// /



  const { data: Day1, isLoading: Day1Loader, isFetching:Day1IsFetching } = useTimeFrameQuery({
    id: day1b?.value,
    coinName,
  },   { refetchOnMountOrArgChange: true,skip:!coinName});
  const { data: FourHours, isLoading: FourHoursLoader,isFetching:FourHoursLoaderIsFetching } = useTimeFrameQuery({
    id: fourHoursb?.value,
    coinName,
  },   { refetchOnMountOrArgChange: true,skip:!coinName });
  const { data: OneHours, isLoading: OneHoursLoader,isFetching:OneHoursIsFetching } = useTimeFrameQuery({
    id: oneHourb?.value,
    coinName,
  },   { refetchOnMountOrArgChange: true,skip:!coinName });
  const { data: FifteenMin, isLoading: FifteenMinLoader,isFetching:FifteenMinIsFetching } = useTimeFrameQuery({
    id: fifteenMinb?.value,
    coinName,
  },   { refetchOnMountOrArgChange: true,skip:!coinName });
  const { data: FiveMin, isLoading: FiveMinLoader,isFetching:FiveMinIsFetching } = useTimeFrameQuery(
    { id: fiveMinb?.value, coinName },
    { refetchOnMountOrArgChange: true ,skip:!coinName}
  );
  //
  const { data: Day1Color, isLoading: Day1LoaderColor, isFetching:Day1IsFetchingColor } = useSearchCoinPriceQuery(day1?.value && coinName&&{
    id: day1?.value,
    coinName,
  },   { refetchOnMountOrArgChange: true });
  const { data: FourHoursColor, isLoading: FourHoursLoaderColor,isFetching:FourHoursLoaderIsFetchingColor } = useSearchCoinPriceQuery(
    {
    id: fourHours?.value,
    coinName,
  },   { refetchOnMountOrArgChange: true ,skip:!fourHours?.value || !coinName });
  const { data: OneHoursColor, isLoading: OneHoursLoaderColor,isFetching:OneHoursIsFetchingColor } = useSearchCoinPriceQuery(
    {
    id: oneHour?.value,
    coinName,
  },   { refetchOnMountOrArgChange: true,skip:!oneHour?.value || !coinName});
  const { data: FifteenMinColor, isLoading: FifteenMinLoaderColor,isFetching:FifteenMinIsFetchingColor } = useSearchCoinPriceQuery(
   {
    id: fifteenMin?.value,
    coinName,
  },   { refetchOnMountOrArgChange: true,skip:!fifteenMin?.value || !coinName });
  const { data: FiveMinColor, isLoading: FiveMinLoaderColor,isFetching:FiveMinIsFetchingColor } = useSearchCoinPriceQuery(
    { id: fiveMin?.value, coinName },
    { refetchOnMountOrArgChange: true,skip:!fiveMin?.value || !coinName }
  );


  const {
    data,
    isLoading: FindCoinLoader,
    isFetching,
  } = useSearchCoinsQuery({coinName,timeLeft:timeLeft?.value}, {
    // pollingInterval: 3000,
    refetchOnMountOrArgChange: true,
    skip:!timeLeft?.value || !coinName
    // skip: false,
  });

  console.log(getUserDataS()?.userId,'getUserDataS')

  const ConvertObject =(object=[]) => {
    return Object?.values(object)
  }

  const List = [
    { 
      time: <DropDownItem borderRadius='10px'   options={options2} value={day1} onChange={(e)=>setDay1(e)}/>,
      time2: <DropDownItem borderRadius='10px' options={options3} value={day1b} onChange={(e)=>setDay1b(e)}/>,
      time1:'1 day',
     data: Day1?.data?.average,
      loading: Day1IsFetchingColor,
     loading1: Day1Loader||Day1IsFetching,
        //  this for Pules TimeFrame
     pulseColor:ConvertObject(Day1Color?.data)[0],
    },
    
    {
      time: <DropDownItem borderRadius='10px' options={options2} value={fourHours} onChange={(e)=>setFourHours(e)}/>,
      time2: <DropDownItem borderRadius='10px' padding={"5px"} options={options3} value={fourHoursb} onChange={(e)=>setFourHoursb(e)}/>,
      data: FourHours?.data?.average,
      time1:fourHoursb?.label,
      loading: FourHoursLoaderIsFetchingColor,
      loading1: FourHoursLoader||FourHoursLoaderIsFetching,
         //  this for Pules TimeFrame
      pulseColor:ConvertObject(FourHoursColor?.data)[0],

    },
    { 
      time: <DropDownItem borderRadius='10px' options={options2} value={oneHour}  onChange={(e)=>setOneHours(e)}/>,
      time2: <DropDownItem borderRadius='10px' options={options3} value={oneHourb}  onChange={(e)=>setOneHoursb(e)}/>,
      time1:oneHourb?.label,
     data: OneHours?.data?.average, 
     loading: OneHoursIsFetchingColor,
     loading1: OneHoursLoader||OneHoursIsFetching,
        //  this for Pules TimeFrame
     pulseColor:ConvertObject(OneHoursColor?.data)[0],

    },
    {
      time: <DropDownItem borderRadius='10px' options={options2} value={fifteenMin}  onChange={(e)=>setFifteenMin(e)}/>,
      time2: <DropDownItem borderRadius='10px' padding={"5px"} options={options3} value={fifteenMinb}  onChange={(e)=>setFifteenMinb(e)}/>,
      time1:fifteenMinb?.label,
      data: FifteenMin?.data?.average,
      loading:FifteenMinIsFetchingColor,
      loading1: FifteenMinLoader||FifteenMinIsFetching,
         //  this for Pules TimeFrame
      pulseColor:ConvertObject(FifteenMinColor?.data)[0],

    },
    { 
      time: <DropDownItem borderRadius='10px' options={options2} value={fiveMin}  onChange={(e)=>setFiveMin(e)}/>,
      time2: <DropDownItem borderRadius='10px' options={options3} value={fiveMinb}  onChange={(e)=>setFiveMinb(e)}/>,
      time1:fiveMinb?.label,
     data: FiveMin?.data?.average, 
     loading: FiveMinIsFetchingColor,
     loading1: FiveMinLoader||FiveMinIsFetching,
    //  this for Pules TimeFrame
     pulseColor:ConvertObject(FiveMinColor?.data)[0],
    },
     
  ];

  const toThreeFig = (nums,places=3) => {
    let myNum = parseFloat(nums);
    let roundedNum = myNum.toFixed(places);
    return roundedNum;
  };
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      coinname: "",
    },
  });

  const handleClick = (data) => {
    // console.log(data)
    setCoinName(data?.coinName);
    if (data?.coinname) {
      // console.log(data,'data2')
      setCoinName(data?.coinname);
    }
  };

   const handleColor =(no) =>{
    //console.log(no,'DFGHJKL')
    switch (no) {
      case 1:
        return "back1 animate__animated animate__fadeIn my-element"
      case 2:
        return "deepGreen animate__animated animate__fadeIn my-element"
      case -1:
        return "back2 animate__animated animate__fadeIn my-element"
      case -2:
        return "deepRed animate__animated animate__fadeIn my-element"
      
    
      default:
        return  "back1 animate__animated animate__fadeIn my-element";
    }
  }
//console.log(data,timeLeft?.value,'timeLeft')

  let coinsName=data?.asset?.split("U")[1]?`U${data?.asset?.split("U")[1]}`:''

  return (
    <section className="relative">
      <div className="flex px-3 lg:px-8 flex-wrap">
        <div className="flex-grow w-[100%] xl:w-[67%] mb-4 xl:mb-0  ">
          <div className="flex items-center justify-between flex-wrap mb-3">
            <div className="flex items-center gap-2 flex-wrap">
              <Controller
                name="coinname"
                control={control}
                rules={{
                  required: "Coin Name is required",
                  // pattern: REGEX_PATTERNS?.EMAIL,
                  maxLength: generateMaxLength(5),
                }}
                render={({
                  field: { value, onChange },
                  formState: { errors },
                }) => {
                  const errorMessage = errors?.coinname?.message;
                  return (
                    <TextInput
                      //  containerClassName={'text-[#1E1D20]'}
                      inputClassName={"backText"}
                      suffixIcon={
                        <TbSearch
                          size={25}
                          wrapperClassName=" xl:w-[29%]"
                          color="text-[#fff"
                          className="cursor-pointer"
                          onClick={handleSubmit(handleClick)}
                        />
                      }
                      prefixIcon={FindCoinLoader || (isFetching && <Spinner />)}
                      name="coinname"
                      {...{ value, onChange, errors: [errorMessage] }}
                    />
                  );
                }}
              />
              <div className="flex gap-1 items-center">
                <FallBackImage
                  src={"/Images/Dashboard/coin.png"}
                  width={62}
                  height={34}
                />
                <h1 className="text-[25px] lg:text-[32px] font-bold textI">
                  {`${data?.asset?.split("U")[0]||" "}/${coinsName}`}
                </h1>
              </div>
            </div>
            <div className="leading-[1.4rem]">
              <div className="gray mb-0">Price</div>
              <div className="primaryText text-[20px] lg:text-[24px] font-bold">
                {toThreeFig(data?.currentPrice||0)}
              </div>
            </div>

            <div>
              <ButtonComp
                btnText={
                  <span className="flex items-center text-white">
                    <HiPlus className="mr-3" color="white" /> Watchlist
                  </span>
                }
                btnTextClassName="rounded-3xl px-8 font-semibold  py-[10px] btnWaitlist "
              />
            </div>
          </div>
          {/*  */}
          <div className="flex flex-wrap mt-5">
            <div className="flex-grow w-full md:w-[39%] xl:w-[24%] ">
            <div className=" whitespace-normal font-semibold text-[13px] priceText mb-4 flex items-center w-fit mx-auto ">
                    Last<DropDownItem
                    padding={'0px 30px 0px 3px'}
                    onChange={(e)=>setTimeLeft(e)}
                    options={options3}
                    noIcon={true}
                    value={timeLeft}
                    />                  </div>
              <div className="bg-white py-3 px-3  rounded-lg">
                 <div >
                 High price:{" "}  <span className="font-bold secondary">
                      {" "}
                      {toThreeFig(data?.high || 0)}
                    </span>
                  <div className="h-[200px] md:h-[250px] bg-[#16C782] rounded-xl mb-2 text-white text-[24px] font-bold flex justify-center items-center">
                    {toThreeFig(data?.rise || 0)}%
                  </div>
                  <div className=" whitespace-normal text-[14px] font-semibold priceText mb-4">
                   
                   
                  </div>
                  <div className="text-[16px] font-semibold priceText mb-4">
                    Current Price :{" "}
                    <span className="font-bold secondary">
                      {toThreeFig(data?.currentPrice || 0)}
                    </span>
                  </div>
                </div>
                {/*  */}
                <div className="mb-5">
                 
                  <div className="h-[200px] md:h-[250px] bg-[#EA3943] rounded-xl text-white text-[24px] font-bold flex justify-center items-center">{" "}
                    {toThreeFig(data?.fall || 0)}%
                    
                  </div> 
                   <p className="flex mt-2 ">   Low price:{" "}   <span className="font-bold secondary ml-1">
                      {" "}
                      {toThreeFig(data?.low || 0)}
                    </span>
                  </p>
                </div>

               

              </div>
            </div>
            {/*  */}
            <div className="flex-grow w-full md:w-[60%] xl:w-[74%]">
              <div className="flex gap-2 h-[415px] mx-3 flex-wrap mb-3">
                {List?.slice(0, getTimeFrame?.value)?.map((item, i) => (
                  <div
                    key={i}
                    className={`${handleColor(item?.pulseColor )}  flex-grow  font-bold text-white flex justify-center items-center text-[20px] xl:text-[20px] w-full md:w-[24%] xl:w-[18%] rounded`}
                  >
                 
                    {item?.loading ? <Spinner /> : item?.time || item}
                  </div>
                ))}
              </div>

              <div className="flex  h-min-[216px] mx-3 flex-wrap mb-3 mt-6">
                {/*  */}

                {List?.slice(0, getShiftFrame?.value)?.map((item) => (
                  <div
                    className={`flex-grow h-[230px] flex w-[100%] md:w-[50%]  lg:w-[20%] ${
                      item?.loading1 && "blur-2xl"
                    } `}
                  >
                    <FlexContainer
                      wrapperContainer={`${
                        item?.data > 0 ? "greenAverage" : "back2"
                      }  flex justify-center w-full mr-2 py-6 rounded-xl`}
                      innerContainer={`flex justify-center gap-3 item-center rounded-xl border-[${
                        item?.data > 0 ? "#26A17B" : "#EA3943"
                      }] border-[1px] bgList w-full`}
                    >
                      <div className="p-3 flex flex-col justify-around item-center ">
                        <div className="text3 text-[14px] flex gap-1 items-center justify-center text-center font-semibold font-1 whitespace-nowrap">
                          Last {item?.time1}
                        </div>
                        <div>
                        {item?.time2}
                        </div>
                        <div
                          className={`${
                            item?.data > 0 ? "List2" : "List1"
                          } text-center text-[1.8rem]  font-bold font-1`}
                        >
                          {toThreeFig(item?.data || 0,2)}%
                        </div>
                      </div>
                    </FlexContainer>
                  </div>
                ))}

                {/*  */}

                {/*  */}
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        {/*  */}
        <div className="flex-grow    xl:w-[33%]">
          <div className="mx-3 ">
            <Accordance
              options={options}
              value={getTimeFrame}
              seyListDay={setTimeFrame}
              options1={options1}
              seyListDay1={setShiftFrame}
              value1={getShiftFrame}
              
            />
            <Accordance
              options={options1}
              seyListDay={setShiftFrame}
              value={getShiftFrame}
              title="Watchlist Timeframe Settings"
            />
            <div className="bg-white  py-3 px-3">
              <TwoSides
                WrapperClassName={"mb-5 flex-wrap"}
                sideA={"Watchlist"}
                sideAClassName={"secondary text-[22px] font-bold mb-3 xl:mb-0"}
                sideB={
                  <ButtonComp
                    btnTextClassName={"rounded-md btn2"}
                    btnText={
                      <span className="text-[13px] text-white">
                        Current Time Change(%):{" "}
                        <span className="text-[#50AF95]">5min</span>
                      </span>
                    }
                  />
                }
              />
              <TwoSides
                WrapperClassName={"mb-5"}
                sideA={<DropDownItem placeholder={"Crypto"} />}
                sideB={
                  <span className="flex gap-2 items-center">
                    <MdSort className="text2" size={20} />{" "}
                    <span className="text2">Sort:</span>
                    <DropDownItem placeholder={"Bullish"} />
                  </span>
                }
              />

              {/*  */}
              <div className="text-[#EA3943] p-2 font-bold borderColor border-[1px] rounded-md mb-5">
                Watchlist 5m Average (%) Change: -8%
              </div>
              {/*  */}
              <div class="overflow-x-auto whitespace-no-wrap bg-white ">
                <div className="flex justify-between items-center tableHeaderText text-[13px] mb-3 borderColor border-b-[1px] pb-2">
                  <div>Symbol</div>
                  <div>Price</div>
                  <div>Pulse</div>
                  <div>Shift</div>
                  <div>Change</div>
                </div>
                <div className="flex justify-between items-center   whitespace-nowrap borderColor border-b-[1px] pb-3 mb-3">
                  <div>
                    CRV/
                    <br />
                    USDT
                  </div>
                  <div>$0.096</div>
                  <div>
                    {" "}
                    <div className="w-[20px] h-[10px] bg-[#EA3943]"></div>
                  </div>
                  <div>
                    <div className="w-[20px] h-[10px] bg-[#26A17B]"></div>
                  </div>
                  <div>
                    {" "}
                    <div className="text-[#EA3943] font-semibold">-34.5%</div>
                  </div>
                </div>
                {/*  */}
                <div className="flex justify-between items-center   whitespace-nowrap borderColor border-b-[1px] pb-3 mb-3">
                  <div>
                    CRV/
                    <br />
                    USDT
                  </div>
                  <div>$0.096</div>
                  <div>
                    {" "}
                    <div className="w-[20px] h-[10px] bg-[#EA3943]"></div>
                  </div>
                  <div>
                    <div className="w-[20px] h-[10px] bg-[#26A17B]"></div>
                  </div>
                  <div>
                    {" "}
                    <div className="text-[#EA3943] font-semibold">-34.5%</div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}