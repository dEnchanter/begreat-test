import React, { useEffect, useState } from "react";
import TextInput from "../../ui/TextInput";
import { toast } from "react-hot-toast";
import { FiPlus } from "react-icons/fi";
import Select from 'react-select';
import AsyncSelect from 'react-select/async'
import useSWR from 'swr';
import axios from 'axios';
import FallBackImage from "../../common/FallBackImage";
import { HiPlus } from "react-icons/hi";
import { MdCancel, MdOutlineDisabledByDefault } from "react-icons/md";
import { MdSort } from "react-icons/md";
import DropDownItem from "../../ui/DropDownItem";
import TwoSides from "../../common/TwoSides";
import Accordance from "../../common/Accordiance";
import FlexContainer from "../../common/FlexContainer";
import ButtonComp from "../../ui/ButtonComp";
import {
  useAddToWatchListMutation,
  useGetAllWatchListQuery,
  useGetAllAssetQuery,
  useRemoveFromWatchListMutation,
  useSearchCoinPriceQuery,
  useSearchCoinsQuery,
  useTimeFrameQuery,
  useCreateWatchlistHolderMutation,
  useRemoveWatchlistHolderMutation,
  useRemoveAssetsFromWatchlistMutation,
  useDeleteWatchlistMutation,
  useGetWatchListNameQuery,
} from "../../../store/Coins/coinsApi";
import Spinner from "../../common/Spinner";
import { Controller, useForm } from "react-hook-form";
import {
  generateMaxLength,
} from "../../../constants/errors";
import Accordance2 from "../../common/Accordiance2";
import { getCurrency, getWatchlist, removeWatchlist, setCurrency, setWatchlist, getUserDataS, setUserDataS } from "../../../helper";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logoutUser, logoutUserI } from "../../../store/auth";

export default function DashBoardHome() {
  // Controls the no of Pulse cards you see on the dashboard
  const options = [
    {
      value: 1,
      label: <span className="text-white text-xl font-semibold">1</span>,
    },
    {
      value: 2,
      label: <span className="text-white text-xl font-semibold">2</span>,
    },
    {
      value: 3,
      label: <span className="text-white text-xl font-semibold">3</span>,
    },
    {
      value: 4,
      label: <span className="text-white text-xl font-semibold">4</span>,
    },
    {
      value: 5,
      label: <span className="text-white text-xl font-semibold">5</span>,
    },
  ];

  // Controls the no of Shift cards you see on the dashboard
  const options1 = [
    {
      value: 1,
      label: <span className="text-white text-xl font-semibold">1</span>,
    },
    {
      value: 2,
      label: <span className="text-white text-xl font-semibold">2</span>,
    },
    {
      value: 3,
      label: <span className="text-white text-xl font-semibold">3</span>,
    },
    {
      value: 4,
      label: <span className="text-white text-xl font-semibold">4</span>,
    },
    {
      value: 5,
      label: <span className="text-white text-xl font-semibold">5</span>,
    },
  ];

  // Pulse timeframes on Dashboard Card
  const options2 = [
    {
      value: 1,
      label: <span className=" text-xl font-semibold">1 MINUTE</span>,
    },
    {
      value: 3,
      label: <span className=" text-xl font-semibold">3 MINUTE</span>,
    },
    {
      value: 5,
      label: <span className=" text-xl font-semibold">5 MINUTE</span>,
    },
    {
      value: 15,
      label: <span className="text-xl  font-semibold">15 MINUTE</span>,
    },
    {
      value: 30,
      label: <span className=" text-xl font-semibold whitespace-nowrap">30 MINUTE</span>,
    },
    {
      value: 60,
      label: <span className="text-xl  font-semibold  whitespace-nowrap ">1 HOUR</span>,
    },
    {
      value: 120,
      label: <span className=" text-xl  font-semibold  whitespace-nowrap">2 HOUR</span>,
    },
    {
      value: 240,
      label: <span className=" text-xl  font-semibold  whitespace-nowrap">4 HOUR</span>,
    },
    {
      value: 360,
      label: <span className="  text-xl font-semibold  whitespace-nowrap">6 HOUR</span>,
    },
    {
      value: 480,
      label: <span className="  text-xl font-semibold  whitespace-nowrap">8 HOUR</span>,
    },
    {
      value: 720,
      label: <span className=" text-xl font-semibold">12 HOUR</span>,
    },

    {
      value: 1440,
      label: <span className="text-xl  font-semibold">1 DAY</span>,
    },

    {
      value: 4320,
      label: <span className="text-xl  font-semibold">3 DAY</span>,
    },

    {
      value: 10080,
      label: <span className="text-xl  font-semibold">1 WEEK</span>,
    },

    {
      value: 43200,
      label: <span className="text-xl font-semibold">1 MONTH</span>,
    },
    
  ];

  // Rise and Fall timeframes
  const options3 = [
    {
      value: 2,
      label: <span className=" text-xl font-semibold whitespace-nowrap">1 MINUTE</span>,
    },

    {
      value: 3,
      label: <span className="text-xl font-semibold whitespace-nowrap">3 MINUTES</span>,
    },

    {
      value: 5,
      label: <span className=" text-xl font-semibold whitespace-nowrap">5 MINUTES</span>,
    },

    {
      value: 10,
      label: <span className=" text-xl font-semibold whitespace-nowrap">10 MINUTES</span>,
    },

    {
      value: 15,
      label: <span className="text-xl font-semibold whitespace-nowrap">15 MINUTES</span>,
    },

    {
      value: 30,
      label: <span className=" text-xl font-semibold whitespace-nowrap">30 MINUTES</span>,
    },
    {
      value: 45,
      label: <span className="text-xl  font-semibold whitespace-nowrap">45 MINUTES</span>,
    },
    {
      value: 60,
      label: <span className=" text-xl font-semibold  whitespace-nowrap ">1 HOUR</span>,
    },
    {
      value: 120,
      label: <span className=" text-xl font-semibold  whitespace-nowrap">2 HOURS</span>,
    },
    {
      value: 240,
      label: <span className=" text-xl font-semibold  whitespace-nowrap">4 HOURS</span>,
    },
    {
      value: 360,
      label: <span className=" text-xl font-semibold  whitespace-nowrap">6 HOURS</span>,
    },
    {
      value: 480,
      label: <span className="text-xl  font-semibold  whitespace-nowrap">8 HOURS</span>,
    },
    {
      value: '12h',
      label: <span className=" text-xl font-semibold whitespace-nowrap">12 HOURS</span>,
    },
    {
      value: '1d',
      label: <span className=" text-xl font-semibold whitespace-nowrap">1 DAY</span>,
    },
    {
      value: '3d',
      label: <span className=" text-xl font-semibold whitespace-nowrap">3 DAYS</span>,
    },
    {
      value: '1w',
      label: <span className=" text-xl font-semibold whitespace-nowrap">1 WEEK</span>,
    },
    {
      value: '1M',
      label: <span className=" text-xl font-semibold whitespace-nowrap">1 MONTH</span>,
    },
    
  ];

  // Change% timeframes
  const options4 = [
    {
      value: 1,
      label: <span className="text-white font-semibold whitespace-nowrap">AVERAGE</span>,
      label2: 'Average',
    },
    {
      value: 2,
      label: <span className="text-white font-semibold whitespace-nowrap">1 MINUTE</span>,
      label2: '1m',
    },

    {
      value: 3,
      label: <span className="text-white font-semibold whitespace-nowrap">3 MINUTES</span>,
      label2: '3m',
    },

    {
      value: 5,
      label: <span className="text-white font-semibold whitespace-nowrap">5 MINUTES</span>,
      label2: '5m',
    },

    {
      value: 10,
      label: <span className="text-white font-semibold whitespace-nowrap">10 MINUTES</span>,
      label2: '10m',
    },

    {
      value: 15,
      label: <span className="text-white font-semibold whitespace-nowrap">15 MINUTES</span>,
      label2: '15m',
    },

    {
      value: 30,
      label: <span className="text-white font-semibold whitespace-nowrap">30 MINUTES</span>,
      label2: '30m',
    },
    {
      value: 45,
      label: <span className="text-white font-semibold whitespace-nowrap">45 MINUTES</span>,
      label2: '45m',
    },
    {
      value: 60,
      label: <span className="text-white font-semibold  whitespace-nowrap ">1 HOUR</span>,
      label2: '1h',
    },
    {
      value: 120,
      label: <span className="text-white font-semibold  whitespace-nowrap">2 HOURS</span>,
      label2: '2h',
    },
    {
      value: 240,
      label: <span className="text-white font-semibold  whitespace-nowrap">4 HOURS</span>,
      label2: '4h',
    },
    {
      value: 360,
      label: <span className="text-white font-semibold  whitespace-nowrap">6 HOURS</span>,
      label2: '6h',
    },
    {
      value: 480,
      label: <span className="text-white font-semibold  whitespace-nowrap">8 HOURS</span>,
      label2: '8h',
    },
    {
      value: '12h',
      label: <span className="text-white font-semibold whitespace-nowrap">12 HOURS</span>,
      label2: '12h',
    },

     {
      value: '1d',
      label: <span className="text-white font-semibold whitespace-nowrap">1 DAY</span>,
      label2: '1d',
    },

     {
      value: '3d',
      label: <span className="text-white font-semibold whitespace-nowrap">3 DAYS</span>,
      label2: '3d',
    },

     {
      value: '1w',
      label: <span className="text-white font-semibold whitespace-nowrap">1 WEEK</span>,
      label2: '1w',
    },

     {
      value: '1M',
      label: <span className="text-white font-semibold whitespace-nowrap">1 MONTH</span>,
      label2: '1M',
    },
    
  ];

  // Sort value
  const options5 = [
    {
      value: 1,
      label: <span className=" text-sm font-semibold">Bullish</span>,
    },

    {
      value: 2,
      label: <span className="text-sm  font-semibold">Bearish</span>,
    },

    {
      value: 3,
      label: <span className=" text-sm font-semibold">Fastest</span>,
    }, 
    {
      value: 4,
      label: <span className=" text-sm font-semibold">Slowest</span>,
    }, 
  ]

  // WL Pulse timeframe
  const options6 = [
    {
      value: 2,
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">1 Min</span>,
    },

    {
      value: 3,
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">3 Min</span>,
    },

    {
      value: 5,
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">5 Min</span>,
    },

    {
      value: 10,
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">10 Min</span>,
    },

    {
      value: 15,
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">15 Min</span>,
    },

    {
      value: 30,
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">30 Min</span>,
    },
    {
      value: 45,
      label: <span className="text-white text-lg  font-semibold whitespace-nowrap">45 Min</span>,
    },
    {
      value: 60,
      label: <span className="text-white text-lg font-semibold  whitespace-nowrap ">1 Hour</span>,
    },
    {
      value: 120,
      label: <span className="text-white text-lg font-semibold  whitespace-nowrap">2 Hours</span>,
    },
    {
      value: 240,
      label: <span className="text-white text-lg font-semibold  whitespace-nowrap">4 Hours</span>,
    },
    {
      value: 360,
      label: <span className="text-white text-lg font-semibold  whitespace-nowrap">6 Hours</span>,
    },
    {
      value: 480,
      label: <span className="text-white text-lg  font-semibold  whitespace-nowrap">8 Hours</span>,
    },
    {
      value: 720,
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">12 Hours</span>,
    },

    {
      value: 1440,
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">1 Day</span>,
    },

     {
      value: 4320,
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">3 Days</span>,
    },

     {
      value: 10080,
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">1 Week</span>,
    },

     {
      value: 43800,
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">1 Month</span>,
    },
    
  ];

  // WL Shift timeframe
  const options7 = [
    {
      value: 2,
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">1 Min</span>,
    },
    {
      value: 3,
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">3 Min</span>,
    },

    {
      value: 5,
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">5 Min</span>,
    },
    {
      value: 10,
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">10 Min</span>,
    },

    {
      value: 15,
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">15 Min</span>,
    },

    {
      value: 30,
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">30 Min</span>,
    },
    {
      value: 45,
      label: <span className="text-white text-lg  font-semibold whitespace-nowrap">45 Min</span>,
    },
    {
      value: 60,
      label: <span className="text-white text-lg font-semibold  whitespace-nowrap ">1 Hour</span>,
    },
    {
      value: 120,
      label: <span className="text-white text-lg font-semibold  whitespace-nowrap">2 Hours</span>,
    },
    {
      value: 240,
      label: <span className="text-white text-lg font-semibold  whitespace-nowrap">4 Hours</span>,
    },
    {
      value: 360,
      label: <span className="text-white text-lg font-semibold  whitespace-nowrap">6 Hours</span>,
    },
    {
      value: 480,
      label: <span className="text-white text-lg  font-semibold  whitespace-nowrap">8 Hours</span>,
    },
    {
      value: '12h',
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">12 Hours</span>,
    },
    {
      value: '1d',
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">1 Day</span>,
    },
    {
      value: '3d',
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">3 Days</span>,
    },
    {
      value: '1w',
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">1 Week</span>,
    },
    {
      value: '1M',
      label: <span className="text-white text-lg font-semibold whitespace-nowrap">1 Month</span>,
    },
    
  ];

  // Shift timeframes on Dashboard Card
  const options8 = [
    {
      value: 2,
      label: <span className=" text-lg font-semibold whitespace-nowrap">1 Mins</span>,
    },

    {
      value: 3,
      label: <span className="text-lg font-semibold whitespace-nowrap">3 Mins</span>,
    },

    {
      value: 5,
      label: <span className=" text-lg font-semibold whitespace-nowrap">5 Mins</span>,
    },

    {
      value: 10,
      label: <span className=" text-lg font-semibold whitespace-nowrap">10 Mins</span>,
    },

    {
      value: 15,
      label: <span className="text-lg font-semibold whitespace-nowrap">15 Mins</span>,
    },

    {
      value: 30,
      label: <span className=" text-lg font-semibold whitespace-nowrap">30 Mins</span>,
    },
    {
      value: 45,
      label: <span className="text-lg  font-semibold whitespace-nowrap">45 Mins</span>,
    },
    {
      value: 60,
      label: <span className=" text-lg font-semibold  whitespace-nowrap ">1 Hour</span>,
    },
    {
      value: 120,
      label: <span className=" text-lg font-semibold  whitespace-nowrap">2 Hours</span>,
    },
    {
      value: 240,
      label: <span className=" text-lg font-semibold  whitespace-nowrap">4 Hours</span>,
    },
    {
      value: 360,
      label: <span className=" text-lg font-semibold  whitespace-nowrap">6 Hours</span>,
    },
    {
      value: 480,
      label: <span className="text-lg  font-semibold  whitespace-nowrap">8 Hours</span>,
    },
    {
      value: '12h',
      label: <span className="text-lg font-semibold whitespace-nowrap">12 Hours</span>,
    },
    {
      value: '1d',
      label: <span className="text-lg font-semibold whitespace-nowrap">1 Day</span>,
    },
    {
      value: '3d',
      label: <span className="text-lg font-semibold whitespace-nowrap">3 Days</span>,
    },
    {
      value: '1w',
      label: <span className="text-lg font-semibold whitespace-nowrap">1 Week</span>,
    },
    {
      value: '1M',
      label: <span className="text-lg font-semibold whitespace-nowrap">1 Month</span>,
    },
    
  ];

  const [getTf, setTf] = useState(options4[4]);
  const [getTimeFrame, setTimeFrame] = useState(options[4]);
  const [getShiftFrame, setShiftFrame] = useState(options1[3]);

  const [getSortValue, setSortValue] = useState(options5[1]);
  const [coinName, setCoinName] = useState("SOL");
  const [createWatchlist, setCreateWatchlist] = useState("");

  const [isFormDisabled, setFormDisabled] = useState(false);
  const [storedInputValue, setStoredInputValue] = useState("");
  const [placeholderItem, setPlaceholderItem] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [userActive, setUserActive] = useState(true);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);

  const selectedVal = selectedOptions.map((item) => item.value);
  const selectedVal2 = selectedOptions2.map((item) => item.value);

  const [timeLeft, setTimeLeft] = useState(options3[1]);
  const router = useRouter();
  const dispatch  = useDispatch();

  // Persists the Asset Currency you're on in the local storage
  useEffect(() => {
    const currency = localStorage.getItem("currencyName");
    if (currency) {
      setCoinName(currency);
    }
  }, []);

  // fetcher 1 and 2 for fetching the svg icons for each Asset Currency
  const fetcher1 = async (url) => {
    const response = await axios.get(url);
    return response.data;
  }

  const fetcher2 = async (url) => {
    const response = await axios.get(url);
    return response.data;
  }

  const url = `https://raw.githubusercontent.com/VadimMalykhin/binance-icons/main/crypto/${coinName.toLowerCase()}.svg`;
  const { data: svgData } = useSWR(url, fetcher1);

  const url2 = `https://raw.githubusercontent.com/VadimMalykhin/binance-icons/main/crypto/usdt.svg`;
  const { data: svgUSDT } = useSWR(url2, fetcher2);


  // FOR PULSE TIMEFRAME
  
  const [day1, setDay1]=useState({label:<span className="font-bold text-xl leading-6 tracking-tighter drop-shadow-lg">DAY</span>, value:'1440'})
  const [fourHours, setFourHours]=useState({label:<span className="font-bold text-xl leading-6 tracking-tighter drop-shadow-lg">4 HOUR</span>, value:'240'});
  const [oneHour, setOneHours] =useState({label:<span className="font-bold text-xl leading-6 tracking-tighter drop-shadow-lg">1 HOUR</span>, value:'60'})
  const [fifteenMin, setFifteenMin] =useState({label:<span className="font-bold text-xl leading-6 tracking-tighter drop-shadow-lg">15 MINUTE</span>, value:'15'});
  const [fiveMin, setFiveMin]=useState({label:<span className="font-bold text-xl leading-6 tracking-tighter drop-shadow-lg">5 MINUTE</span>, value:'5'})

  // FOR SHIFT TIMEFRAME

  const [day1b,setDay1b]=useState({label:<span className="text-lg flex whitespace-nowrap px-0 mx-0">Day</span>,value:'1d'})
  const [fourHoursb,setFourHoursb]=useState({label:<span className="text-lg flex whitespace-nowrap">4 Hours</span>,value:'240'});
  const [oneHourb,setOneHoursb] =useState({label:<span className="text-lg flex whitespace-nowrap">1 Hour</span>,value:'60'})
  const [fifteenMinb,setFifteenMinb] =useState({label:<span className="text-lg flex whitespace-nowrap">15 Mins</span>,value:'15'});
  const [fiveMinb,setFiveMinb]=useState({label:<span className="text-lg flex whitespace-nowrap">5 Mins</span>,value:'5'})

  // Data calls
  const { 
    data: Day1, 
    isLoading: Day1Loader, 
    isFetching:Day1IsFetching 
  } = useTimeFrameQuery({
    id: day1b?.value,
    coinName,
    userId: getUserDataS().userId
  }, { 
    refetchOnMountOrArgChange: true,
    skip:!coinName,
    pollingInterval: 30000, // refetch after 30secs
  });

  localStorage.setItem("token2", Day1?.token);
  console.log("get user data", getUserDataS().userId);

  const { 
    data: FourHours, 
    isLoading: FourHoursLoader,
    isFetching:FourHoursLoaderIsFetching 
  } = useTimeFrameQuery({
    id: fourHoursb?.value,
    coinName,
    userId: getUserDataS().userId
  }, { 
    refetchOnMountOrArgChange: true,
    skip:!coinName,
    pollingInterval: 30000, // 30secs 
  });

  const { 
    data: OneHours, 
    isLoading: OneHoursLoader,
    isFetching:OneHoursIsFetching 
  } = useTimeFrameQuery({
    id: oneHourb?.value,
    coinName,
    userId: getUserDataS().userId
  }, { 
    refetchOnMountOrArgChange: true,
    skip:!coinName,
    pollingInterval: 30000, // 30secs
  });

  const { 
    data: FifteenMin, 
    isLoading: FifteenMinLoader,
    isFetching:FifteenMinIsFetching 
  } = useTimeFrameQuery({
    id: fifteenMinb?.value,
    coinName,
    userId: getUserDataS().userId
  }, { 
    refetchOnMountOrArgChange: true,
    skip:!coinName,
    pollingInterval: 30000, // 30secs
  });

  const { 
    data: FiveMin, 
    isLoading: FiveMinLoader,
    isFetching:FiveMinIsFetching 
  } = useTimeFrameQuery(
    { 
      id: fiveMinb?.value, 
      coinName,
      userId: getUserDataS().userId
    },
    { 
      refetchOnMountOrArgChange: true ,
      skip:!coinName,
      pollingInterval: 30000, // 30secs
    });

  const { 
    data: Day1Color, 
    isLoading: Day1LoaderColor, 
    isFetching:Day1IsFetchingColor 
  } = useSearchCoinPriceQuery(
    day1?.value && coinName && {
    id: day1?.value,
    coinName,
    userId: getUserDataS().userId
  }, { 
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000, // 30secs
  });

  const { 
    data: FourHoursColor, 
    isLoading: FourHoursLoaderColor,
    isFetching:FourHoursLoaderIsFetchingColor 
  } = useSearchCoinPriceQuery({
    id: fourHours?.value,
    coinName,
    userId: getUserDataS().userId
  }, { 
    refetchOnMountOrArgChange: true , 
    skip:!fourHours?.value || !coinName,
    pollingInterval: 30000, // 30secs 
  });
  
  const { 
    data: OneHoursColor, 
    isLoading: OneHoursLoaderColor,
    isFetching:OneHoursIsFetchingColor 
  } = useSearchCoinPriceQuery({
    id: oneHour?.value,
    coinName,
    userId: getUserDataS().userId
  }, { 
    refetchOnMountOrArgChange: true,
    skip:!oneHour?.value || !coinName,
    pollingInterval: 30000, // 30secs
  });

  const { 
    data: FifteenMinColor, 
    isLoading: FifteenMinLoaderColor, 
    isFetching:FifteenMinIsFetchingColor 
  } = useSearchCoinPriceQuery({
    id: fifteenMin?.value,
    coinName,
    userId: getUserDataS().userId
  }, { 
    refetchOnMountOrArgChange: true,
    skip:!fifteenMin?.value || !coinName,
    pollingInterval: 30000, // 30secs
  });

  const { 
    data: FiveMinColor, 
    isLoading: FiveMinLoaderColor,
    isFetching:FiveMinIsFetchingColor 
  } = useSearchCoinPriceQuery(
    { 
      id: fiveMin?.value, 
      coinName,
      userId: getUserDataS().userId
    },
    { 
      refetchOnMountOrArgChange: true,
      skip:!fiveMin?.value || !coinName,
      pollingInterval: 30000, // 30secs
    });


  const {
    data,
    isLoading: FindCoinLoader,
    isFetching,
  } = useSearchCoinsQuery({
    coinName,
    timeLeft:timeLeft?.value,
    userId: getUserDataS().userId
    }, {
    refetchOnMountOrArgChange: true,
    skip:!timeLeft?.value || !coinName,
    pollingInterval: 30000, // 30secs
  });

  const [addToWatchlist] = useAddToWatchListMutation();
  const [createWatchlistHolder] = useCreateWatchlistHolderMutation();
  // const [removeAssetsFromWatchlist] = useRemoveAssetsFromWatchlistMutation();
  const [deleteWatchlist] = useDeleteWatchlistMutation();
  const [removeFromWatchlist] = useRemoveFromWatchListMutation();

  const {
    data: WatchList,
    isLoading: WatchListIsLoading,
    isFetching: WatchListIsFetching,
  } = useGetAllWatchListQuery({ 
    sortNumber: getSortValue?.value, 
    shift: selectedVal2, 
    pulse: selectedVal,
    wltf: getTf?.value,
    createWatchlist,
    userId: getUserDataS().userId
  }, { 
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000, // 30secs
  });

  // console.log("watchlist", WatchList);

  const {
    data: WatchListName
  } = useGetWatchListNameQuery({
    userId: getUserDataS().userId
  },{ 
    refetchOnMountOrArgChange: true,
  });

  // console.log("WatchlistName", WatchListName);

  useEffect(() => {
    setCreateWatchlist(WatchListName?.watchlist)
  }, []);

  const {
    data: AllAssets,
  } = useGetAllAssetQuery({ 
    refetchOnMountOrArgChange: true 
  });

  const arrOfAssetsData = Object.entries(AllAssets?.assets ?? {}).map(([key, value]) => ({ 
    value: key,
    label: key,
  }));

  const loadOptions = (inputValue, callback) => {
    const filteredOptions = arrOfAssetsData.filter(
      (option) =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
    );

    callback(filteredOptions);
  };

  const totalAverageValue = WatchList?.totalAverage;

  const ConvertObject = (object=[]) => {
    return Object?.values(object)
  }

  // DROPDOWN ITEM FOR PULSE and SHIFT ITEM CARDS
  const List = [
    { 
      time: <DropDownItem noIcon={true} options={options2} value={day1} onChange={(e)=>setDay1(e)}/>,
      time2: <DropDownItem noIcon={true} padding={"0px 20px 0px 5px"} options={options8} value={day1b} onChange={(e)=>setDay1b(e)}/>,
      time1:'1 day',
      data: Day1?.data?.average,
      loading: Day1IsFetchingColor,
      loading1: Day1Loader||Day1IsFetching,
        //  this for Pulse TimeFrame
      pulseColor:ConvertObject(Day1Color?.data)[0],
    },
    {
      time: <DropDownItem noIcon={true} options={options2} value={fourHours} onChange={(e)=>setFourHours(e)}/>,
      time2: <DropDownItem noIcon={true} padding={"0px 20px 0px 5px"} options={options8} value={fourHoursb} onChange={(e)=>setFourHoursb(e)}/>,
      data: FourHours?.data?.average,
      time1:fourHoursb?.label,
      loading: FourHoursLoaderIsFetchingColor,
      loading1: FourHoursLoader||FourHoursLoaderIsFetching,
         //  this for Pules TimeFrame
      pulseColor:ConvertObject(FourHoursColor?.data)[0],

    },
    { 
      time: <DropDownItem noIcon={true} options={options2} value={oneHour}  onChange={(e)=>setOneHours(e)}/>,
      time2: <DropDownItem noIcon={true} padding={"0px 20px 0px 5px"} options={options8} value={oneHourb}  onChange={(e)=>setOneHoursb(e)}/>,
      time1:oneHourb?.label,
      data: OneHours?.data?.average, 
      loading: OneHoursIsFetchingColor,
      loading1: OneHoursLoader||OneHoursIsFetching,
        //  this for Pules TimeFrame
      pulseColor:ConvertObject(OneHoursColor?.data)[0],
    },
    {
      time: <DropDownItem noIcon={true} options={options2} value={fifteenMin}  onChange={(e)=>setFifteenMin(e)}/>,
      time2: <DropDownItem noIcon={true} padding={"0px 20px 0px 5px"} options={options8} value={fifteenMinb}  onChange={(e)=>setFifteenMinb(e)}/>,
      time1:fifteenMinb?.label,
      data: FifteenMin?.data?.average,
      loading:FifteenMinIsFetchingColor,
      loading1: FifteenMinLoader||FifteenMinIsFetching,
         //  this for Pules TimeFrame
      pulseColor:ConvertObject(FifteenMinColor?.data)[0],

    },
    { 
      time: <DropDownItem noIcon={true} options={options2} value={fiveMin}  onChange={(e)=>setFiveMin(e)}/>,
      time2: <DropDownItem noIcon={true} padding={"0px 20px 0px 5px"} options={options8} value={fiveMinb}  onChange={(e)=>setFiveMinb(e)}/>,
      time1:fiveMinb?.label,
      data: FiveMin?.data?.average, 
      loading: FiveMinIsFetchingColor,
      loading1: FiveMinLoader||FiveMinIsFetching,
      //  this for Pules TimeFrame
      pulseColor:ConvertObject(FiveMinColor?.data)[0],
    },
     
  ];

  const toThreeFig = (nums, places=3) => {
    let myNum = parseFloat(nums);
    let roundedNum = myNum.toFixed(places);
    return roundedNum;
  };

  const { control, reset } = useForm({
    defaultValues: {
      coinname: "",
      watchlist: "",
    },
  });

  // Add to watchlist handle
  const addToWatchlistHandle = async () => {
    try {
      const payload = {
        asset: data.asset,
        createWatchlist: createWatchlist,
      };
      addToWatchlist(payload, {
        userId: getUserDataS().userId
      });
    } catch (error) {
      console.error('addToWatchlist error:', error);
    }
  };

  // Remove from watchlist handle
  const removeFromWatchlistHandle = async (name) => {
    try {
      const payload = {
        asset: name,
        createWatchlist: createWatchlist,
      }
      removeFromWatchlist(payload, {
        userId: getUserDataS().userId
      });
    } catch (error) {
      console.error('removeFromWatchlist error:', error);
    }
  }

  // Create watchlist handle
  const createWatchlistHolderHandle = async (payload) => {
    try {
        setWatchlist(payload);
        localStorage.setItem("textboxInput", payload)
        const payloadData = getWatchlist(payload);
        createWatchlistHolder(payloadData, {
          userId: getUserDataS().userId
        });
        setCreateWatchlist(payloadData);
        toast.success(`Watchlist ${payload} created successfully, you can now add to watchlist`, {
          duration: 4000,
        });
        // reset("");
        setFormDisabled(true);
    } catch (error) {
      console.error('addToWatchlist error:', error);
    }
  }

  // Delete watchlist handle
  const deleteWatchlistHolderHandle = async () => {
    try {
      deleteWatchlist(WatchListName?.watchlist, {
        userId: getUserDataS().userId
      }); // Call delete endpoint
      setCreateWatchlist(""); // set createwatchlist to empty
      toast.success(`Watchlist Deleted.`, {
        duration: 4000,
      });
      reset("");
      setFormDisabled(false);
    } catch (error) {
      console.error('addToWatchlist error:', error);
    }
  }

  // Click on asset currency in the watchlist to set the whole app to that currency
  const handleOnClickWatchlist = async (name) => {
    const a = name.split("/")[0];
    setCoinName(a);
    setCurrency(a);
    if (name) {
      // console.log('data name', a)
      setCoinName(a);
      setCurrency(a)
    }
  }

  useEffect(() => {
    const createWatchlistAccount = getWatchlist("createWatchlistAccount");
    // console.log("Watchlist Account: ", createWatchlistAccount)

    if (createWatchlistAccount) {
      setCreateWatchlist(createWatchlistAccount);
    }
  }, []);

  useEffect(() => {
    const storedInput = localStorage.getItem("textboxInput");

    if (storedInput) {
      setStoredInputValue(storedInput);
    }
  }, []);

  // Implement Auto Logout
  useEffect(() => {
    let inactivityTimeout;

    const resetTimer = () => {
      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(() => {
        setUserActive(false);
        setShowModal(true);
      }, 900000); //15mins
    };

    const handleActivity = () => {
      setUserActive(true);
      resetTimer();
    };

    // Add event listeners for user activity
    document.addEventListener('mousemove', handleActivity);
    document.addEventListener('keydown', handleActivity);
    // document.addEventListener('touchstart', handleActivity);

    resetTimer();

    // Clean up event listeners on component unmount
    return () => {
      clearTimeout(inactivityTimeout);
      document.removeEventListener('mousemove', handleActivity);
      document.removeEventListener('keydown', handleActivity);
      // document.removeEventListener('touchstart', handleActivity);
    };
  }, []);

  useEffect(() => {
    if (showModal) {
      const countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      if (countdown === 0) {
        clearInterval(countdownInterval);
        dispatch(logoutUser());
        router.push('/login');
      }

      return () => {
        clearInterval(countdownInterval);
      };
    }
  }, [showModal, countdown]);

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push('/login');

  };

  const handleContinueWorking = () => {
    setShowModal(false);
    setCountdown(60);
  };

  // GRADIENT COLORS;
   const handleColor = (no) => {
    //console.log(no,'DFGHJKL')
    switch (no) {
      case 1:
        return "back1 animate__animated animate__fadeIn my-element"
      case 2:
        return "back3 animate__animated animate__fadeIn my-element"
      case -1:
        return "deepRed animate__animated animate__fadeIn my-element"
      case -2:
        return "deepRed2 animate__animated animate__fadeIn my-element"
      default:
        return  "back1 animate__animated animate__fadeIn my-element";
    }
  }

  // Select dropdown styling
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#343334', // customize background color of input field
      border: 'none', // remove border
      outline: 'none',
      textColor: 'white', // customize text color
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#343334', // customize background color of dropdown menu
      textColor: 'white', // customize text color
      border: '1px solid #343334', // customize border color
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: 'gray', // customize background color of selected options
    }),
  };

  const customStyles2 = {
    container: (provided, state) => ({
      ...provided,
      color: "white",
    }),
    input: (provided, state) => ({
      ...provided,
      color: "white",
      fontSize: "18px",
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "#343334",
      border: "none",
      boxShadow: "none",
      color: "white",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: "#343334",
      color: "white",
      fontSize: "18px",
    }),
  };

  return (
    <section className="relative">
      {/* Auto Logout Modal */}
      {showModal && (
        <div className="fixed inset-1 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[25rem] h-[17rem]">
            <h2 className="text-xl font-bold mb-4 text-center">Session will expire soon!</h2>
            <p className="mb-4 text-center text-lg">You will be automatically logged out for security reasons in:</p>
            <p className="mb-4 text-center text-2xl">{countdown}</p>
            <div className="flex justify-center">
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mr-2"
                onClick={handleLogout}
              >
                Logout
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                onClick={handleContinueWorking}
              >
                Keep Working
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex px-3 flex-wrap">
        <div className="flex-grow w-[100%] xl:w-[67%] mb-4 xl:mb-0">

          {/* TOP BAR AFTER DASHBOARD NAVBAR */}
          <div className="flex items-center justify-between space-x-3 flex-wrap mb-3">
            <div className="flex items-center gap-2 flex-wrap">
              {/* SEARCH BUTTON */}
              <Controller
                name="coinname"
                control={control}
                rules={{
                  required: "Coin Name is required",
                  // pattern: REGEX_PATTERNS?.EMAIL,
                  maxLength: generateMaxLength(10),
                }}
                render={({
                  // field: { value, onChange },
                  formState: { errors },
                }) => {
                  const errorMessage = errors?.coinname?.message;
                  return (
                    <div className="w-[15rem]">
                      <AsyncSelect
                        placeholder="Select Asset..."
                        value={coinName}
                        onChange={(e) => {
                          // console.log(e?.value,'set Asset')
                          const word = e?.value;
                          const index = word?.indexOf("USDT");
                          const firstHalf = word?.slice(0, index);
                          // const secondHalf = word.slice(index);
                          // console.log(firstHalf, secondHalf, 'firstHalf, secondHalf')
                          setCoinName(firstHalf);
                          setCurrency(firstHalf);
                        }}
                        isClearable={true}
                        styles={customStyles2}
                        cacheOptions
                        loadOptions={loadOptions}
                        defaultOptions
                      />
                    </div>
                  );
                }}
              />

              {/* FALLBACK IMAGE AND ASSET */}
              <div className="flex gap-1 items-center">
                {/* <FallBackImage
                  src={"/Images/Dashboard/coin.png"}
                  width={62}
                  height={34}
                /> */}
                <FallBackImage
                  src={`data:image/svg+xml;utf8,${encodeURIComponent(svgData)}`}
                  width={34}
                  height={34}
                />
                <FallBackImage
                  src={`data:image/svg+xml;utf8,${encodeURIComponent(svgUSDT)}`}
                  width={34}
                  height={34}
                />
                <h1 className="text-[25px] lg:text-[32px] font-bold textI">
                  {
                    // `${data?.asset?.split("U")[0]||" "}/
                    //  ${data?.asset?.split("U")[1]&&'U'}
                    //  ${data?.asset?.split("U")[1]||'USDT'}`

                    `${data?.asset?.split("U")[0]||" "}/USDT`
                  }
                </h1>
              </div>
            </div>

            {/* PRICE */}
            <div className="leading-[1.4rem]">
              <div className="gray mb-0">Price</div>
              <div className="primaryText text-[20px] lg:text-[24px] font-bold">
                {toThreeFig(data?.currentPrice||0)}
              </div>
            </div>

            {/* WATCHLIST */}
            <div>
              <ButtonComp
                btnText={
                  <span className="flex items-center text-white">
                    <HiPlus className="mr-3" color="white" /> 
                    Watchlist
                  </span>
                }
                btnTextClassName="rounded-3xl px-8 font-semibold py-[10px]
                text-white font-bold py-2 px-4 rounded transition-colors duration-300 bg-gradient-to-r from-red-500 to-indigo-500 
                hover:from-red-600 hover:to-indigo-600 scale-100 duration-200 active:scale-95"
                onClick={() => addToWatchlistHandle()}
              />
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="flex flex-wrap mt-[3.5rem]">
            <div className="flex-grow w-full md:w-[39%] xl:w-[24%] ">

            {/* CHOOSE TIMEFRAME FOR WHOLE APP */}

            <div className=" whitespace-nowrap font-semibold text-xl priceText mb-4 -mt-10 flex items-center w-fit mx-auto ">
              <DropDownItem
              // padding={'0px 40px 0px 3px'}
              padding={'0px 20px 0px 8px'}
              onChange={(e)=>setTimeLeft(e)}
              options={options3}
              noIcon={true}
              value={timeLeft}
              />                  
            </div>

              <div className="p-2">

                {/* CURRENT PRICE CARD */}
                {/* HIGH PRICE */}

                <div className="mb-5 text-center">
                  <p className="font-semibold mt-3 mb-2 text-lg tracking-tighter leading-6"> High Price:{" "}   
                    <span className="font-semibold secondary ml-1">
                      {" "}
                      {toThreeFig(data?.high || 0)}
                    </span>
                  </p>
                 
                  <div className="h-[200px] md:h-[250px] bg-[#EA3943] rounded
                  text-white text-[24px] font-bold flex justify-center items-center
                  transition duration-300 ease-in-out"
                  style={{
                    height: data?.rise + data?.fall === 0 ? '200px' :
                    data?.rise === 0 && data?.fall < 0 ? '440px' :
                    data?.fall === 0 && data?.rise > 0 ? '100px' :
                    data?.rise + data?.fall > 0 && data?.fall < 0 ? '200px' :
                    data?.rise + data?.fall < 0 && data?.rise > 0 ? '350px' :
                    '250px'
                  }}>{" "}
                    {toThreeFig(data?.fall || 0)}%
                  </div> 
                </div>

                {/* CURRENT PRICE */}

                <div className="text-lg text-center font-semibold priceText mb-4 tracking-tighter leading-6">
                    Current Price :{" "}
                    <span className="font-semibold secondary">
                      {toThreeFig(data?.currentPrice || 0)}
                    </span>
                  </div>
                
                {/* LOW PRICE */}

                <div >
                  <div className="h-[200px] md:h-[250px] bg-[#16C782] rounded mb-2 
                  text-white text-[24px] font-bold flex justify-center items-center
                  transition duration-300 ease-in-out"
                  style={{
                    height: data?.rise + data?.fall === 0 ? '200px' :
                    data?.rise === 0 && data?.fall < 0 ? '100px' :
                    data?.fall === 0 && data?.rise > 0 ? '440px' :
                    data?.rise + data?.fall > 0 && data?.fall < 0 ? '350px' :
                    data?.rise + data?.fall < 0 && data?.rise > 0 ? '200px' :
                    '250px'
                  }}>{" "}
                    {toThreeFig(data?.rise || 0)}% 
                  </div>
                  <p className="font-semibold mt-2 text-center mb-2 text-lg tracking-tighter leading-6">Low Price:{" "}  
                    <span className="font-semibold secondary ml-1">
                      {" "}
                      {toThreeFig(data?.low || 0)}
                    </span>
                  </p>  
              
                </div>
              </div>
            </div>

            {/* PULSE COLOR */}
            <div className="flex-grow w-full md:w-[60%] xl:w-[74%]">
              <div className="flex gap-2 h-[415px] mx-3 flex-wrap mb-3">
                {List?.slice(0, getTimeFrame?.value)?.map((item, i) => (
                  <div
                    key={i}
                    className={`${handleColor(item?.pulseColor)} flex-grow font-bold text-white flex justify-center items-center 
                    text-2xl w-full md:w-[24%] xl:w-[18%] rounded ${item?.loading1 && "blur-sm"}`
                  }>
                    {item?.time || item}
                  </div>
                ))}
              </div>

              <div className="flex h-min-[216px] flex-wrap mb-3 mt-6">
                {/* TIMEFRAME COLOR */}

                {List?.slice(0, getShiftFrame?.value)?.map((item) => (
                  <div
                    className={`flex-grow h-[250px] flex w-[163px] md:w-[30%] lg:w-[20%] ${
                      item?.loading1 && "blur-sm"
                    } `}
                  >
                    <FlexContainer
                      wrapperContainer={`${
                        item?.data > 0 ? "greenAverage" : "back2"
                      }  flex justify-center w-full mr-2 py-6 rounded-xl`}
                      innerContainer={`flex justify-center gap-1 item-center rounded-md border-[${
                        item?.data > 0 ? "#26A17B" : "#EA3943"
                      }] border-[1px] bgList w-full`}
                    >
                      <div className="p-3 flex flex-col justify-around item-center ">
                        {/* <div className="text3 text-[14px] flex gap-1 items-center justify-center text-center font-semibold font-1 whitespace-nowrap">
                          Last {item?.time1}
                        </div> */}
                        <div className="text3 flex items-center justify-center text-center font-semibold whitespace-nowrap">
                          <span className="text-lg font-semibold text-center ml-5">Last</span>{item?.time2}
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

              </div>
              
            </div>
          </div>
          {/*  */}
        </div>

        {/* SIDEBAR TO THE RIGHT */}
        <div className="flex-grow xl:w-[25rem]">
          <div className="mx-3 ">
            {/* DASHBOARD TIMEFRAME SETTINGS */}
            <Accordance
              options={options}
              value={getTimeFrame}
              seyListDay={setTimeFrame}
              options1={options1}
              seyListDay1={setShiftFrame}
              value1={getShiftFrame}      
            />
            {/* TRENDSCAN TIMEFRAME SETTINGS */}
            <Accordance2
              options6={options6}
              options7={options7}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
              selectedOptions2={selectedOptions2}
              setSelectedOptions2={setSelectedOptions2}
              title="TrendScan Timeframe Settings"
            />
            <div className="bg-white py-3 px-3">
              <div className="secondary text-2xl font-bold mb-3 xl:mb-0">TrendScan</div>
              <TwoSides
                WrapperClassName={"mb-5 flex-wrap"}
                sideA={"Change(%) Timeframe:"}
                sideAClassName={"secondary gray text-lg font-medium mb-3 xl:mb-0"}
                sideB={
                  <Select 
                    options={options4}
                    onChange={(e) => {
                      console.log(e,'setTf')
                      setTf(e)
                    }}
                    value={getTf}
                    styles={customStyles}
                  />
                }
              />
              <TwoSides
                WrapperClassName={"mb-5 space-x-10"}
                sideA={
                  <Controller
                  name="watchlist"
                  control={control}
                  rules={{
                    required: "Create Watchlist",
                    maxLength: generateMaxLength(20),
                  }}
                  render={({
                    field: { value, onChange },
                    formState: { errors },
                  }) => {

                    setPlaceholderItem(WatchListName?.watchlist);
                    
                    const errorMessage = errors?.watchlist?.message;    
                    return (
                      <TextInput
                        disabled={WatchListName?.watchlist.length > 0 ? true : false}
                        placeholder={WatchListName?.watchlist.length > 0 ? 
                          placeholderItem : 'Create Watchlist'
                        }
                        inputClassName={"backText"}
                        suffixIcon={
                          WatchListName?.watchlist.length > 0 ? (
                            <MdOutlineDisabledByDefault 
                              size={20}
                              wrapperClassName="xl:w-[20%]"
                              className="cursor-pointer"
                              onClick={() => deleteWatchlistHolderHandle()}
                            />
                          ) : (
                            <FiPlus
                            size={20}
                            wrapperClassName="xl:w-[20%]"
                            className="cursor-pointer"
                            // onClick={value ? () => createWatchlistHolderHandle(value): null}
                            onClick={value ? () => createWatchlistHolderHandle(value) : null}
                          />
                          )  
                        }
                        // prefixIcon={(addToWatchListLoader || removeFromWatchListLoader) && <Spinner />}
                        name="watchlist"
                        {...{ value, onChange, errors: [errorMessage] }}
                      />
                      );
                    }}
                  />
                }
                sideB={
                  <span className="flex gap-2 items-center">
                    <MdSort className="text2" size={20} />{" "}
                    <span className="text2">Sort:</span>
                    <DropDownItem
                      options={options5}
                      onChange={(e) => {
                        console.log(e?.value,'sort value')
                        setSortValue(e)
                        localStorage.setItem("sortValue", e?.value)
                      }}
                      value={getSortValue}
                    />
                  </span>
                }
              />

              {/*  */}
              <div className={`${totalAverageValue > 0 ? "text-[#26A17B]" : "text-[#EA3943]"} text-center  p-2 font-bold borderColor border-[1px] rounded-md mb-5`}>
                {
                  `Watchlist ${getTf.label2} Average (%) Change: ${toThreeFig(totalAverageValue || 0.000)}%`
                }
              </div>
              
              {/* GET ALL FROM WATCHLIST */}
              <div className="grid grid-cols-6 gap-[4rem] justify-between items-center tableHeaderText text-sm mb-3 borderColor border-b-[1px] pb-2">
                  <div className="col-span-1">Symbol</div>
                  <div className="col-span-1">Price</div>
                  <div className="col-span-1">Pulse</div>
                  <div className="col-span-1">Shift</div>
                  <div className="col-span-1">Change%</div>
                  <div className="col-span-1"></div>
              </div>
              <div className="h-[20rem] scrollbar-thin overflow-hidden overflow-y-auto whitespace-no-wrap bg-white">
                  {WatchListIsLoading ? (
                    <p className="text-center">Loading <Spinner /></p>
                  ) : WatchListIsFetching ? (
                    <Spinner />
                  ) : (
                    WatchList?.data?.map((item, i) => {
                      let priceColor = item.wltf > 0 ? "text-[#26A17B]" : "text-[#EA3943]";

                      let pulseColor;
                      let shiftColor;

                      if (item.pulse === 2) {
                        pulseColor = "bg-[#26A17B]";
                      } else if (item.pulse === -2) {
                        pulseColor = "bg-[#EA3943]";
                      } else {
                        pulseColor = "bg-[#d1d5db]";
                      }

                      if (item.shift === 2) {
                        shiftColor = "bg-[#26A17B]";
                      } else if (item.shift === -2) {
                        shiftColor = "bg-[#EA3943]";
                      } else {
                        shiftColor = "bg-[#d1d5db]";
                      }

                      return (
                        <div className="flex">
                          <div className="grid grid-cols-6 gap-[4rem] justify-between 
                          items-center whitespace-nowrap borderColor border-b-[1px] 
                          pb-3 mb-3 cursor-pointer"
                          onClick={() => handleOnClickWatchlist(item.name)}
                          >
                            <div className="col-span-1">
                              {item?.name?.split("/")[0]}/
                              <br />
                              {item?.name?.split("/")[1]}
                            </div>
                            <div className="col-span-1">${toThreeFig(item.price)}</div>
                            <div className={`col-span-1 ${pulseColor} ml-4 w-[20px] h-[10px]`}>
                              {/* PULSE */}
                            </div>
                            <div className={`col-span-1 ${shiftColor} ml-4 w-[20px] h-[10px]`}>
                              {/* SHIFT */}
                            </div>
                            <div className="col-span-1 ml-4">
                              <div className={`${priceColor} font-semibold`}>{toThreeFig(item.wltf)}%</div>
                            </div>
                            
                          </div>
                          <div className="mt-4">
                              <div className="">
                                <MdCancel
                                  color="gray"
                                  cursor="pointer"
                                  onClick={() => removeFromWatchlistHandle(item.name)}
                                />
                              </div>
                          </div>
                        </div>
                      );
                    })
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}