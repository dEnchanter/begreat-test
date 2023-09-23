import React, { useEffect, useState } from "react";
import TextInput from "../../ui/TextInput";
import { toast } from "react-hot-toast";
import { FiPlus } from "react-icons/fi";
import Select from 'react-select';
import AsyncSelect from 'react-select/async'
import ClipLoader from 'react-spinners/ClipLoader';
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
import Slider from '../../common/Slider';
import ButtonComp from "../../ui/ButtonComp";
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
// import { Slider } from "@/components/ui/slider"
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  useAddToWatchListMutation,
  useGetAllWatchListQuery,
  useGetAllAssetQuery,
  useRemoveFromWatchListMutation,
  useSearchCoinPriceQuery,
  useSearchCoinsQuery,
  useTimeFrameQuery,
  useCreateWatchlistHolderMutation,
  // useRemoveWatchlistHolderMutation,
  // useRemoveAssetsFromWatchlistMutation,
  useDeleteWatchlistMutation,
  useGetWatchListNameQuery,
  useGetStretchRangeQuery,
  useGetSurgeLevelQuery
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
import { logoutUser } from "../../../store/auth";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";

export default function DashBoardHome() {

  // Controls the no of Pulse cards you see on the dashboard
  const options = [
    {
      value: 1,
      label: <span className="primaryText text-xl font-semibold">1</span>,
    },
    {
      value: 2,
      label: <span className="primaryText text-xl font-semibold">2</span>,
    },
    {
      value: 3,
      label: <span className="primaryText text-xl font-semibold">3</span>,
    },
    {
      value: 4,
      label: <span className="primaryText text-xl font-semibold">4</span>,
    },
    {
      value: 5,
      label: <span className="primaryText text-xl font-semibold">5</span>,
    },
  ];

  // Controls the no of Shift cards you see on the dashboard
  const options1 = [
    {
      value: 1,
      label: <span className="primaryText text-xl font-semibold">1</span>,
    },
    {
      value: 2,
      label: <span className="primaryText text-xl font-semibold">2</span>,
    },
    {
      value: 3,
      label: <span className="primaryText text-xl font-semibold">3</span>,
    },
    {
      value: 4,
      label: <span className="primaryText text-xl font-semibold">4</span>,
    },
    {
      value: 5,
      label: <span className="primaryText text-xl font-semibold">5</span>,
    },
  ];

  // Pulse timeframes on Dashboard Card
  const options2 = [
    {
      value: 1,
      label: <span className="primaryText text-xl font-semibold">1 MINUTE</span>,
    },
    {
      value: 3,
      label: <span className="primaryText text-xl font-semibold">3 MINUTE</span>,
    },
    {
      value: 5,
      label: <span className="primaryText text-xl font-semibold">5 MINUTE</span>,
    },
    {
      value: 15,
      label: <span className="primaryText text-xl font-semibold">15 MINUTE</span>,
    },
    {
      value: 30,
      label: <span className="primaryText text-xl font-semibold whitespace-nowrap">30 MINUTE</span>,
    },
    {
      value: 60,
      label: <span className="primaryText text-xl font-semibold whitespace-nowrap">1 HOUR</span>,
    },
    {
      value: 120,
      label: <span className="primaryText text-xl font-semibold whitespace-nowrap">2 HOUR</span>,
    },
    {
      value: 240,
      label: <span className="primaryText text-xl font-semibold whitespace-nowrap">4 HOUR</span>,
    },
    {
      value: 360,
      label: <span className="primaryText text-xl font-semibold whitespace-nowrap">6 HOUR</span>,
    },
    {
      value: 480,
      label: <span className="primaryText text-xl font-semibold whitespace-nowrap">8 HOUR</span>,
    },
    {
      value: 720,
      label: <span className="primaryText text-xl font-semibold">12 HOUR</span>,
    },

    {
      value: 1440,
      label: <span className="primaryText text-xl font-semibold">1 DAY</span>,
    },

    {
      value: 4320,
      label: <span className="primaryText text-xl font-semibold">3 DAY</span>,
    },

    {
      value: 10080,
      label: <span className="primaryText text-xl font-semibold">1 WEEK</span>,
    },

    {
      value: 43200,
      label: <span className="primaryText text-xl font-semibold">1 MONTH</span>,
    },
    
  ];

  // Rise and Fall timeframes
  const options3 = [
    {
      value: 2,
      label: <span className="primaryText text-xl font-semibold whitespace-nowrap">1 MINUTE</span>,
    },

    {
      value: 3,
      label: <span className="primaryText text-xl font-semibold whitespace-nowrap">3 MINUTES</span>,
    },

    {
      value: 5,
      label: <span className="primaryText text-xl font-semibold whitespace-nowrap">5 MINUTES</span>,
    },

    {
      value: 10,
      label: <span className="primaryText text-xl font-semibold whitespace-nowrap">10 MINUTES</span>,
    },

    {
      value: 15,
      label: <span className="primaryText text-xl font-semibold whitespace-nowrap">15 MINUTES</span>,
    },

    {
      value: 30,
      label: <span className="primaryText text-xl font-semibold whitespace-nowrap">30 MINUTES</span>,
    },
    {
      value: 45,
      label: <span className="primaryText text-xl  font-semibold whitespace-nowrap">45 MINUTES</span>,
    },
    {
      value: 60,
      label: <span className="primaryText text-xl font-semibold  whitespace-nowrap ">1 HOUR</span>,
    },
    {
      value: 120,
      label: <span className="primaryText text-xl font-semibold  whitespace-nowrap">2 HOURS</span>,
    },
    {
      value: 240,
      label: <span className="primaryText text-xl font-semibold  whitespace-nowrap">4 HOURS</span>,
    },
    {
      value: 360,
      label: <span className="primaryText text-xl font-semibold  whitespace-nowrap">6 HOURS</span>,
    },
    {
      value: 480,
      label: <span className="primaryText text-xl font-semibold  whitespace-nowrap">8 HOURS</span>,
    },
    {
      value: '12h',
      label: <span className="primaryText text-xl font-semibold whitespace-nowrap">12 HOURS</span>,
    },
    {
      value: '1d',
      label: <span className="primaryText text-xl font-semibold whitespace-nowrap">1 DAY</span>,
    },
    {
      value: '3d',
      label: <span className="primaryText text-xl font-semibold whitespace-nowrap">3 DAYS</span>,
    },
    {
      value: '1w',
      label: <span className="primaryText text-xl font-semibold whitespace-nowrap">1 WEEK</span>,
    },
    {
      value: '1M',
      label: <span className="primaryText text-xl font-semibold whitespace-nowrap">1 MONTH</span>,
    },
    
  ];

  // Change% timeframes
  const options4 = [
    {
      value: 1,
      label: <span className="primaryText font-semibold whitespace-nowrap">AVERAGE</span>,
      label2: 'Average',
    },
    {
      value: 2,
      label: <span className="primaryText font-semibold whitespace-nowrap">1 MINUTE</span>,
      label2: '1m',
    },

    {
      value: 3,
      label: <span className="primaryText font-semibold whitespace-nowrap">3 MINUTES</span>,
      label2: '3m',
    },

    {
      value: 5,
      label: <span className="primaryText font-semibold whitespace-nowrap">5 MINUTES</span>,
      label2: '5m',
    },

    {
      value: 10,
      label: <span className="primaryText font-semibold whitespace-nowrap">10 MINUTES</span>,
      label2: '10m',
    },

    {
      value: 15,
      label: <span className="primaryText font-semibold whitespace-nowrap">15 MINUTES</span>,
      label2: '15m',
    },

    {
      value: 30,
      label: <span className="primaryText font-semibold whitespace-nowrap">30 MINUTES</span>,
      label2: '30m',
    },
    {
      value: 45,
      label: <span className="primaryText font-semibold whitespace-nowrap">45 MINUTES</span>,
      label2: '45m',
    },
    {
      value: 60,
      label: <span className="primaryText font-semibold  whitespace-nowrap ">1 HOUR</span>,
      label2: '1h',
    },
    {
      value: 120,
      label: <span className="primaryText font-semibold  whitespace-nowrap">2 HOURS</span>,
      label2: '2h',
    },
    {
      value: 240,
      label: <span className="primaryText font-semibold  whitespace-nowrap">4 HOURS</span>,
      label2: '4h',
    },
    {
      value: 360,
      label: <span className="primaryText font-semibold  whitespace-nowrap">6 HOURS</span>,
      label2: '6h',
    },
    {
      value: 480,
      label: <span className="primaryText font-semibold  whitespace-nowrap">8 HOURS</span>,
      label2: '8h',
    },
    {
      value: '12h',
      label: <span className="primaryText font-semibold whitespace-nowrap">12 HOURS</span>,
      label2: '12h',
    },

     {
      value: '1d',
      label: <span className="primaryText font-semibold whitespace-nowrap">1 DAY</span>,
      label2: '1d',
    },

     {
      value: '3d',
      label: <span className="primaryText font-semibold whitespace-nowrap">3 DAYS</span>,
      label2: '3d',
    },

     {
      value: '1w',
      label: <span className="primaryText font-semibold whitespace-nowrap">1 WEEK</span>,
      label2: '1w',
    },

     {
      value: '1M',
      label: <span className="primaryText font-semibold whitespace-nowrap">1 MONTH</span>,
      label2: '1M',
    },
    
  ];

  // Sort value
  const options5 = [
    {
      value: 1,
      label: <span className="primaryText text-sm font-semibold">Bullish</span>,
    },

    {
      value: 2,
      label: <span className="primaryText text-sm font-semibold">Bearish</span>,
    },

    {
      value: 3,
      label: <span className="primaryText text-sm font-semibold">Fastest</span>,
    }, 
    {
      value: 4,
      label: <span className="primaryText text-sm font-semibold">Slowest</span>,
    }, 
  ]

  // WL Pulse timeframe
  const options6 = [
    {
      value: 2,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">1 Min</span>,
    },

    {
      value: 3,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">3 Min</span>,
    },

    {
      value: 5,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">5 Min</span>,
    },

    {
      value: 10,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">10 Min</span>,
    },

    {
      value: 15,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">15 Min</span>,
    },

    {
      value: 30,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">30 Min</span>,
    },
    {
      value: 45,
      label: <span className="primaryText text-lg  font-semibold whitespace-nowrap">45 Min</span>,
    },
    {
      value: 60,
      label: <span className="primaryText text-lg font-semibold  whitespace-nowrap ">1 Hour</span>,
    },
    {
      value: 120,
      label: <span className="primaryText text-lg font-semibold  whitespace-nowrap">2 Hours</span>,
    },
    {
      value: 240,
      label: <span className="primaryText text-lg font-semibold  whitespace-nowrap">4 Hours</span>,
    },
    {
      value: 360,
      label: <span className="primaryText text-lg font-semibold  whitespace-nowrap">6 Hours</span>,
    },
    {
      value: 480,
      label: <span className="primaryText text-lg  font-semibold  whitespace-nowrap">8 Hours</span>,
    },
    {
      value: 720,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">12 Hours</span>,
    },

    {
      value: 1440,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">1 Day</span>,
    },

     {
      value: 4320,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">3 Days</span>,
    },

     {
      value: 10080,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">1 Week</span>,
    },

     {
      value: 43800,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">1 Month</span>,
    },
    
  ];

  // WL Shift timeframe
  const options7 = [
    {
      value: 2,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">1 Min</span>,
    },
    {
      value: 3,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">3 Min</span>,
    },

    {
      value: 5,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">5 Min</span>,
    },
    {
      value: 10,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">10 Min</span>,
    },

    {
      value: 15,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">15 Min</span>,
    },

    {
      value: 30,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">30 Min</span>,
    },
    {
      value: 45,
      label: <span className="primaryText text-lg  font-semibold whitespace-nowrap">45 Min</span>,
    },
    {
      value: 60,
      label: <span className="primaryText text-lg font-semibold  whitespace-nowrap ">1 Hour</span>,
    },
    {
      value: 120,
      label: <span className="primaryText text-lg font-semibold  whitespace-nowrap">2 Hours</span>,
    },
    {
      value: 240,
      label: <span className="primaryText text-lg font-semibold  whitespace-nowrap">4 Hours</span>,
    },
    {
      value: 360,
      label: <span className="primaryText text-lg font-semibold  whitespace-nowrap">6 Hours</span>,
    },
    {
      value: 480,
      label: <span className="primaryText text-lg  font-semibold  whitespace-nowrap">8 Hours</span>,
    },
    {
      value: '12h',
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">12 Hours</span>,
    },
    {
      value: '1d',
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">1 Day</span>,
    },
    {
      value: '3d',
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">3 Days</span>,
    },
    {
      value: '1w',
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">1 Week</span>,
    },
    {
      value: '1M',
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">1 Month</span>,
    },
    
  ];

  // Shift timeframes on Dashboard Card
  const options8 = [
    {
      value: 2,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">1 MIN</span>,
    },

    {
      value: 3,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">3 MINS</span>,
    },

    {
      value: 5,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">5 MINS</span>,
    },

    {
      value: 10,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">10 MINS</span>,
    },

    {
      value: 15,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">15 MINS</span>,
    },

    {
      value: 30,
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">30 MINS</span>,
    },
    {
      value: 45,
      label: <span className="primaryText text-lg  font-semibold whitespace-nowrap">45 MINS</span>,
    },
    {
      value: 60,
      label: <span className="primaryText text-lg font-semibold  whitespace-nowrap ">1 HOUR</span>,
    },
    {
      value: 120,
      label: <span className="primaryText text-lg font-semibold  whitespace-nowrap">2 HOURS</span>,
    },
    {
      value: 240,
      label: <span className="primaryText text-lg font-semibold  whitespace-nowrap">4 HOURS</span>,
    },
    {
      value: 360,
      label: <span className="primaryText text-lg font-semibold  whitespace-nowrap">6 HOURS</span>,
    },
    {
      value: 480,
      label: <span className="primaryText text-lg  font-semibold  whitespace-nowrap">8 HOURS</span>,
    },
    {
      value: '12h',
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">12 HOURS</span>,
    },
    {
      value: '1d',
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">1 DAY</span>,
    },
    {
      value: '3d',
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">3 DAYS</span>,
    },
    {
      value: '1w',
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">1 WEEK</span>,
    },
    {
      value: '1M',
      label: <span className="primaryText text-lg font-semibold whitespace-nowrap">1 MONTH</span>,
    },
    
  ];

  // Surge TF
  const options9 = [
    {
      value: 2,
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">1 MINUTE</span>,
    },

    {
      value: 3,
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">3 MINUTES</span>,
    },

    {
      value: 5,
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">5 MINUTES</span>,
    },

    {
      value: 10,
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">10 MINUTES</span>,
    },

    {
      value: 15,
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">15 MINUTES</span>,
    },

    {
      value: 30,
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">30 MINUTES</span>,
    },
    {
      value: 45,
      label: <span className="primaryText text-lg  font-medium whitespace-nowrap">45 MINUTES</span>,
    },
    {
      value: 60,
      label: <span className="primaryText text-lg font-medium whitespace-nowrap ">1 HOUR</span>,
    },
    {
      value: 120,
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">2 HOURS</span>,
    },
    {
      value: 240,
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">4 HOURS</span>,
    },
    {
      value: 360,
      label: <span className="primaryText text-lg font-medium  whitespace-nowrap">6 HOURS</span>,
    },
    {
      value: 480,
      label: <span className="primaryText text-white font-medium  whitespace-nowrap">8 HOURS</span>,
    },
    {
      value: 720,
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">12 HOURS</span>,
    },
    {
      value: 1440,
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">1 DAY</span>,
    },
    {
      value: 4320,
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">3 DAYS</span>,
    },
    {
      value: 10080,
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">1 WEEK</span>,
    },
    {
      value: 43800,
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">1 MONTH</span>,
    },
    
  ];

  // ATR
  const options10 = [
    {
      value: '1m',
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">1 Min</span>,
    },

    {
      value: '3m',
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">3 Min</span>,
    },

    {
      value: '5m',
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">5 Min</span>,
    },

    // {
    //   value: '10m',
    //   label: <span className="text-white text-lg font-medium whitespace-nowrap">10 Min</span>,
    // },

    {
      value: '15m',
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">15 Min</span>,
    },

    {
      value: '30m',
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">30 Min</span>,
    },
    // {
    //   value: '45m',
    //   label: <span className="text-white text-lg  font-medium whitespace-nowrap">45 Min</span>,
    // },
    {
      value: '1h',
      label: <span className="primaryText text-lg font-medium whitespace-nowrap ">1 Hour</span>,
    },
    {
      value: '2h',
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">2 Hours</span>,
    },
    {
      value: '4h',
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">4 Hours</span>,
    },
    {
      value: '6h',
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">6 Hours</span>,
    },
    {
      value: '8h',
      label: <span className="primaryText text-lg  font-medium whitespace-nowrap">8 Hours</span>,
    },
    {
      value: '12h',
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">12 Hours</span>,
    },

    {
      value: '1d',
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">1 Day</span>,
    },

     {
      value: '3d',
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">3 Days</span>,
    },
    {
      value: '1w',
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">1 Week</span>,
    },
    {
      value: '1M',
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">1 Month</span>,
    },
    
  ];

  // LookBack
  const options11 = [
    {
      value: 7,
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">Short</span>,
    },

    {
      value: 14,
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">Regular</span>,
    },

    {
      value: 50,
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">Long</span>,
    },

    {
      value: 100,
      label: <span className="primaryText text-lg font-medium whitespace-nowrap">Extreme</span>,
    }
  ];

   // Rise/Fall% timeframes
   const options12 = [
    // {
    //   value: 1,
    //   label: <span className="text-white font-semibold whitespace-nowrap">AVERAGE</span>,
    //   label2: 'Average',
    // },
    {
      value: 2,
      label: <span className="primaryText font-semibold whitespace-nowrap">1 MINUTE</span>,
      label2: '1m',
    },

    {
      value: 3,
      label: <span className="primaryText font-semibold whitespace-nowrap">3 MINUTES</span>,
      label2: '3m',
    },

    {
      value: 5,
      label: <span className="primaryText font-semibold whitespace-nowrap">5 MINUTES</span>,
      label2: '5m',
    },

    {
      value: 10,
      label: <span className="primaryText font-semibold whitespace-nowrap">10 MINUTES</span>,
      label2: '10m',
    },

    {
      value: 15,
      label: <span className="primaryText font-semibold whitespace-nowrap">15 MINUTES</span>,
      label2: '15m',
    },

    {
      value: 30,
      label: <span className="primaryText font-semibold whitespace-nowrap">30 MINUTES</span>,
      label2: '30m',
    },
    {
      value: 45,
      label: <span className="primaryText font-semibold whitespace-nowrap">45 MINUTES</span>,
      label2: '45m',
    },
    {
      value: 60,
      label: <span className="primaryText font-semibold  whitespace-nowrap ">1 HOUR</span>,
      label2: '1h',
    },
    {
      value: 120,
      label: <span className="primaryText font-semibold  whitespace-nowrap">2 HOURS</span>,
      label2: '2h',
    },
    {
      value: 240,
      label: <span className="primaryText font-semibold  whitespace-nowrap">4 HOURS</span>,
      label2: '4h',
    },
    {
      value: 360,
      label: <span className="primaryText font-semibold  whitespace-nowrap">6 HOURS</span>,
      label2: '6h',
    },
    {
      value: 480,
      label: <span className="primaryText font-semibold  whitespace-nowrap">8 HOURS</span>,
      label2: '8h',
    },
    {
      value: '12h',
      label: <span className="primaryText font-semibold whitespace-nowrap">12 HOURS</span>,
      label2: '12h',
    },
    {
      value: '1d',
      label: <span className="primaryText font-semibold whitespace-nowrap">1 DAY</span>,
      label2: '1d',
    },
    {
      value: '3d',
      label: <span className="primaryText font-semibold whitespace-nowrap">3 DAYS</span>,
      label2: '3d',
    },
    {
      value: '1w',
      label: <span className="primaryText font-semibold whitespace-nowrap">1 WEEK</span>,
      label2: '1w',
    },
    {
      value: '1M',
      label: <span className="primaryText font-semibold whitespace-nowrap">1 MONTH</span>,
      label2: '1M',
    },
    
  ];

  const [getTf, setTf] = useState(options4[6]);
  const [getRf, setRf] = useState(options12[5]);
  const [getTimeFrame, setTimeFrame] = useState(options[4]);
  const [getShiftFrame, setShiftFrame] = useState(options1[3]);

  // New states i introduced for Risk Management
  const [getSurgeTf, setSurgeTf] = useState(options9[7]);
  const [getATRtf, setATRtf] = useState(options10[3]);
  const [getLookBackTf, setLookBackTf] = useState(options11[1]);
  const [currentValue, setCurrentValue] = useState("long");
  const [currentRfcValue, setCurrentRfcValue] = useState(0);
  const [inputValue, setInputValue] = useState('1000');
  const [customInputValue, setCustomInputValue] = useState(data?.currentPrice);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [switchValue, setSwitchValue] = useState(0);
  const [expandedChild, setExpandedChild] = useState("secondChild");
  const [toggle, setToggle] = useState(false);
  const [sliderValue, setSliderValue] = useState("50");
  // const [snap, setSnap] = useState("400px");
  // const [isExpanded, setIsExpanded] = useState(true);

  const [getSortValue, setSortValue] = useState(options5[2]);
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

  const [timeLeft, setTimeLeft] = useState(options3[7]);
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

  let url;

  if (coinName) {
      url = `https://raw.githubusercontent.com/VadimMalykhin/binance-icons/main/crypto/${coinName.toLowerCase()}.svg`;
  } else {
      console.warn("coinName is undefined!");
      url = null;  // No fetching will occur if the URL is null.
  }

  const { data: svgData } = useSWR(url, fetcher1);
  

  // const url = `https://raw.githubusercontent.com/VadimMalykhin/binance-icons/main/crypto/${coinName.toLowerCase()}.svg`;
  // const { data: svgData } = useSWR(url, fetcher1);

  const url2 = `https://raw.githubusercontent.com/VadimMalykhin/binance-icons/main/crypto/usdt.svg`;
  const { data: svgUSDT } = useSWR(url2, fetcher2);


  // FOR PULSE TIMEFRAME
  
  const [day1, setDay1]=useState({label:<span className="primaryText font-bold text-xl leading-6 tracking-tighter drop-shadow-lg">DAY</span>, value:'1440'})
  const [fourHours, setFourHours]=useState({label:<span className="primaryText font-bold text-xl leading-6 tracking-tighter drop-shadow-lg">4 HOUR</span>, value:'240'});
  const [oneHour, setOneHours] =useState({label:<span className="primaryText font-bold text-xl leading-6 tracking-tighter drop-shadow-lg">1 HOUR</span>, value:'60'})
  const [fifteenMin, setFifteenMin] =useState({label:<span className="primaryText font-bold text-xl leading-6 tracking-tighter drop-shadow-lg">15 MINUTE</span>, value:'15'});
  const [fiveMin, setFiveMin]=useState({label:<span className="primaryText font-bold text-xl leading-6 tracking-tighter drop-shadow-lg">5 MINUTE</span>, value:'5'})

  // FOR SHIFT TIMEFRAME

  const [day1b,setDay1b]=useState({label:<span className="primaryText text-lg flex whitespace-nowrap px-0 mx-0">Day</span>,value:'1d'})
  const [fourHoursb,setFourHoursb]=useState({label:<span className="primaryText text-lg flex whitespace-nowrap">4 Hours</span>,value:'240'});
  const [oneHourb,setOneHoursb] =useState({label:<span className="primaryText text-lg flex whitespace-nowrap">1 Hour</span>,value:'60'})
  const [fifteenMinb,setFifteenMinb] =useState({label:<span className="primaryText text-lg flex whitespace-nowrap">15 Mins</span>,value:'15'});
  const [fiveMinb,setFiveMinb]=useState({label:<span className="primaryText text-lg flex whitespace-nowrap">5 Mins</span>,value:'5'})

  // Data calls
  const { 
    data: Day1, 
    isLoading: Day1Loader, 
    isFetching:Day1IsFetching 
  } = useTimeFrameQuery({
    id: day1b?.value,
    coinName,
    userId: getUserDataS()?.userId
  }, { 
    refetchOnMountOrArgChange: true,
    skip:!coinName,
    pollingInterval: 30000, // refetch after 30secs
  });

  localStorage.setItem("token2", Day1?.token);
  // console.log("Item", Day1, Day1?.token)
  // console.log("get user data", getUserDataS().userId);

  const { 
    data: FourHours, 
    isLoading: FourHoursLoader,
    isFetching:FourHoursLoaderIsFetching 
  } = useTimeFrameQuery({
    id: fourHoursb?.value,
    coinName,
    userId: getUserDataS()?.userId
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
    userId: getUserDataS()?.userId
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
    userId: getUserDataS()?.userId
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
      userId: getUserDataS()?.userId
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
    userId: getUserDataS()?.userId
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
    userId: getUserDataS()?.userId
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
    userId: getUserDataS()?.userId
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
    userId: getUserDataS()?.userId
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
      userId: getUserDataS()?.userId
    },
    { 
      refetchOnMountOrArgChange: true,
      skip:!fiveMin?.value || !coinName,
      pollingInterval: 30000, // 30secs
    });


  const {
    data,
    // isLoading: FindCoinLoader,
    // isFetching,
  } = useSearchCoinsQuery({
    coinName,
    timeLeft:timeLeft?.value,
    userId: getUserDataS()?.userId
    }, {
    refetchOnMountOrArgChange: true,
    skip:!timeLeft?.value || !coinName,
    pollingInterval: 30000, // 30secs
  });

  // console.log("data current price", data)

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
    rf: getRf?.value,
    rank: switchValue,
    sortrfc: currentRfcValue,
    createWatchlist,
    userId: getUserDataS()?.userId
  }, { 
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000, // 30secs
  });

  const {
    data: WatchListName
  } = useGetWatchListNameQuery({
    userId: getUserDataS()?.userId
  },{ 
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    setCreateWatchlist(WatchListName?.watchlist)
  });

  const {
    data: AllAssets,
  } = useGetAllAssetQuery({ 
    refetchOnMountOrArgChange: true 
  });

  const {
    data: StretchRange,
  } = useGetStretchRangeQuery({ 
    // userId: getUserDataS().userId,
    coinName,
    range: getATRtf?.value,
    stretch: timeLeft?.value,
    lookback: getLookBackTf?.value,
    size: inputValue,
    direction: currentValue,
    custom: customInputValue

  }, { 
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000, // 30secs
  });

  // console.log("Stretch", StretchRange?.data)

  const {
    data: SurgeLevel
  } = useGetSurgeLevelQuery({ 
    id: getSurgeTf?.value,
    coinName,
  }, { 
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000, // 30secs
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
  const averageRiseRatio = WatchList?.averageRiseRatio;

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

  // Function to convert values with plenty decimals into 3 decimal places
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

  useEffect(() => {
    setSliderValue(Number(averageRiseRatio));
  }, [averageRiseRatio]);

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
  // const customStyles = {
  //   control: (provided) => ({
  //     ...provided,
  //     backgroundColor: '#343334', // customize background color of input field
  //     border: 'none', // remove border
  //     outline: 'none',
  //     textColor: 'white', // customize text color
  //   }),
  //   menu: (provided) => ({
  //     ...provided,
  //     backgroundColor: '#343334', // customize background color of dropdown menu
  //     textColor: 'white', // customize text color
  //     border: '1px solid #343334', // customize border color
  //   }),
  //   multiValue: (provided) => ({
  //     ...provided,
  //     backgroundColor: 'gray', // customize background color of selected options
  //   }),
  // };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'var(--control-bg-color)',
      borderColor: state.isFocused ? 'var(--focused-border-color)' : 'var(--control-border-color)',
      color: 'var(--control-text-color)',
      boxShadow: state.isFocused ? '0 0 0 1px var(--focused-border-color)' : 'none',
      '&:hover': {
        borderColor: 'var(--control-hover-border-color)'
      }
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected 
        ? 'var(--selected-option-bg-color)' 
        : state.isFocused 
          ? 'var(--focused-option-bg-color)' 
          : 'var(--option-bg-color)',
      color: 'var(--option-text-color)',
      '&:active': {
        backgroundColor: 'var(--active-option-bg-color)'
      }
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'var(--control-text-color)'
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'var(--control-text-color)'
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: 'var(--control-border-color)'
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'var(--placeholder-text-color)'
    })
  };

  const customStyles2 = {
    container: (provided, state) => ({
      ...provided,
      backgroundColor: 'var(--control-bg-color)',
      borderColor: 'var(--control-border-color)',
      color: 'var(--control-text-color)',
    }),
    input: (provided, state) => ({
      ...provided,
      color: 'var(--control-text-color)',
      fontSize: "18px",
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--control-bg-color)',
      borderColor: 'var(--control-border-color)',
      boxShadow: 'none',
      color: 'var(--control-text-color)',
      '&:hover': {
        borderColor: 'var(--control-hover-border-color)',
      }
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? 'var(--selected-option-bg-color)'
        : state.isFocused
        ? 'var(--focused-option-bg-color)'
        : 'var(--option-bg-color)',
      color: 'var(--option-text-color)',
      fontSize: "18px",
      ':active': {
        backgroundColor: 'var(--active-option-bg-color)',
      }
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: 'var(--control-text-color)',
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: 'var(--placeholder-text-color)',
    })
  };

  // Function to determine the background color of Surge
  const getBackgroundColor = (priceBreak) => {
    if (priceBreak === 'highLevel') {
      return 'bg-[#16C782]';
    } else if (priceBreak === 'lowLevel') {
      return 'bg-[#EA3943]';
    }
  };

  const toggleInput = () => {
    const newState = !isInputDisabled;
    setIsInputDisabled(newState);
    
    if (newState) {  // if the input is now disabled
      setCustomInputValue("");  // reset the custom input value to empty
    }
  }; 
  
  // Function to toggle the switch value
  const toggleSwitch = () => {
    setSwitchValue(1 - switchValue);
  };

  // VARIABLES FOR DYNAMIC DIV FOR RISE AND FALL LEVELS

  // const MIN_HEIGHT = 50; // For instance, 50 pixels as minimum height
  // const BASE_HEIGHT = 550; // 200px for 100% rise or fall

  // // Assuming riseRatio is 90% and fallRatio is 10%, calculate the heights:
  // const riseHeight = (data?.riseRatio / 100) * BASE_HEIGHT || MIN_HEIGHT;
  // const fallHeight = (data?.fallRatio / 100) * BASE_HEIGHT || MIN_HEIGHT;

  const MIN_HEIGHT = 50; 
  const BASE_HEIGHT = 550; 

  let riseHeight = MIN_HEIGHT;
  let fallHeight = MIN_HEIGHT;

  if (data?.riseRatio >= 96 && data?.riseRatio <= 99 && data?.fallRatio <= 4) {
    riseHeight = BASE_HEIGHT - MIN_HEIGHT;
    fallHeight = MIN_HEIGHT;
  } else if (data?.fallRatio >= 96 && data?.fallRatio <= 99 && data?.riseRatio <= 1) {
    fallHeight = BASE_HEIGHT - MIN_HEIGHT;
    riseHeight = MIN_HEIGHT;
  } else if (data?.riseRatio === 0 && data?.fallRatio) {
    fallHeight = BASE_HEIGHT;
  } else if (data?.fallRatio === 0 && data?.riseRatio) {
    riseHeight = BASE_HEIGHT;
  } else if (data?.riseRatio === 0 && data?.fallRatio === 0) {
    riseHeight = BASE_HEIGHT / 2;  // dividing the space equally
    fallHeight = BASE_HEIGHT / 2;  // dividing the space equally
  } else {
    riseHeight = (data?.riseRatio / 100) * BASE_HEIGHT || MIN_HEIGHT;
    fallHeight = (data?.fallRatio / 100) * BASE_HEIGHT || MIN_HEIGHT;
  }

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
                {/* {toThreeFig(data?.currentPrice||0)} */}
                {data?.currentPrice || 0}
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

          {/* SIDEBAR AND CENTER */}
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
                      {data?.high || 0}
                    </span>
                  </p>

                  <div className="h-[200px] md:h-[250px] bg-[#EA3943] rounded
                  text-white text-[24px] font-bold flex justify-center items-center
                  transition duration-300 ease-in-out"
                  style={{
                    height: `${fallHeight}px`
                  }}>
                    {data?.fall || 0}%
                  </div> 
                </div>

                {/* CURRENT PRICE */}

                <div className="text-lg text-center font-semibold priceText mb-4 tracking-tighter leading-6">
                    Current Price :{" "}
                    <span className="font-semibold secondary">
                      {data?.currentPrice || 0}
                    </span>
                </div>

                {/* LOW PRICE */}

                <div>
                  <div className="h-[200px] md:h-[250px] bg-[#16C782] rounded mb-2 
                  text-white text-[24px] font-bold flex justify-center items-center
                  transition duration-300 ease-in-out"
                  style={{
                    height: `${riseHeight}px`
                  }}>
                    {data?.rise || 0}% 
                  </div>

                  {/* Spacer to push the Low Price text to the bottom */}
                  <div className="flex-grow"></div>
                  
                  <p className="font-semibold mt-2 text-center mb-2 text-lg tracking-tighter leading-6">Low Price:{" "}  
                    <span className="font-semibold secondary ml-1">
                      {data?.low || 0}
                    </span>
                  </p>  
                </div>
              </div>
            </div>

            {/* CENTER AREA OF UI */}
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
                        <div className="text4 flex items-center justify-center text-center font-semibold whitespace-nowrap">
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

              {/* New Feature */}
              {/* Risk Management Tools */}
              <div className="flex space-x-5 h-min-[216px] flex-wrap mb-3 mt-6 -ml-[18rem] lg:-ml-[17rem]">
                
                {/* TABLE */}
                <div className="flex flex-col space-y-3">
                  <div className="flex">
                    <Card className="bg-header p-2 flex items-center justify-center border-none">
                      <div>
                        <Tabs defaultValue="long" className="w-[300px]">
                          <TabsList className="textInput p-1">
                            <TabsTrigger className={`w-[8rem] ${currentValue == 'long' ? 'data-[state=active]:bg-[#16C782]' : 'bg-[#16C782]/8'}`} value="long" onClick={() => setCurrentValue('long')}>Long</TabsTrigger>
                            <TabsTrigger className={`w-[8rem] ${currentValue == 'short' ? 'data-[state=active]:bg-[#EA3943]' : 'bg-[#EA3943]/8'}`} value="short" onClick={() => setCurrentValue('short')}>Short</TabsTrigger>
                          </TabsList>
                        </Tabs>
                      </div>
                      <div>
                        <TwoSides
                          WrapperClassName={"flex-wrap space-x-2"}
                          sideA={"Position Size:"}
                          sideAClassName={"secondary gray text-md font-medium xl:mb-0"}
                          sideB={
                            <div className="relative">
                                {currentValue === 'short' && (
                                    <span className="absolute inset-y-0 left-0 pl-[1.4rem] flex items-center text-white">
                                        -
                                    </span>
                                )}
                                <TextInput
                                    wrapperClassName="textInput rounded-lg"
                                    inputClassName={`primaryText ${currentValue === 'short' ? 'pl-6' : ''}`}
                                    suffixIconClassName="primaryText"
                                    suffixIcon={"$"}
                                    borderColor="border-none"
                                    placeholder="0.00"
                                    value={inputValue}
                                    onChange={(e) => {
                                        const newInputValue = e.target.value;
                                        if (/^\d*\.?\d*$/.test(newInputValue)) {
                                            setInputValue(newInputValue);
                                        }
                                    }}
                                />
                            </div>
                          }
                        />
                      </div>
                    </Card>
                  </div>

                  <div>
                    <Card className="bg-header p-2 flex flex-col items-center border-none">
                      <TableHeader className="bg-header2">
                        <TableRow className="hover:bg-header">
                          <TableHead className="text-left w-[13rem] primaryText">%Change</TableHead>
                          <TableHead className="w-[13rem] primaryText">Price</TableHead>
                          <TableHead className="w-[13rem] primaryText">P/L</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                      {
                        StretchRange?.data?.stretches && 
                        Object.keys(StretchRange?.data?.stretches)
                        .sort((a, b) => StretchRange?.data?.stretches[b].percentageChange - StretchRange?.data?.stretches[a].percentageChange)
                        .map((level, index, array) => {

                          const isStretchHigh = StretchRange?.data?.stretchHigh === StretchRange?.data?.stretches[level]?.price;
                          const isStretchLow = StretchRange?.data?.stretchLow === StretchRange?.data?.stretches[level]?.price;

                          if (level === "level_5") {
                            // Special row for level 5
                            return (
                              <>
                                <Separator className="bg-gray-600"/>
                                <TableRow className="hover:bg-header">
                                  <TableCell className="font-medium text-left w-[13rem]">
                                    <Button 
                                      className={`bg-gray-400 text-white hover:bg-gray-500 ${isInputDisabled ? "opacity-50" : "opacity-100"}`}
                                      onClick={toggleInput}
                                    >
                                      Current Price
                                    </Button>
                                  </TableCell>
                                  <TableCell className="w-[13rem]">
                                    <TextInput 
                                      type="text" 
                                      placeholder={data?.currentPrice || 0}
                                      wrapperClassName={`p-1`}
                                      // inputClassName={`${isInputDisabled ? '' : ''}`}
                                      value={customInputValue}
                                      onChange={(e) => {
                                        // Check if the input is only numbers or a floating point
                                        if (/^\d*\.?\d*$/.test(e.target.value)) {
                                          setCustomInputValue(e.target.value);
                                        }
                                      }}
                                      // disabled={isInputDisabled}  
                                    />
                                  </TableCell>
                                  <TableCell className="w-[13rem]">
                                    $0.00
                                  </TableCell>
                                </TableRow>
                                <Separator className="bg-gray-600"/>
                              </>
                            );
                          }                      

                          return (
                            <>
                              <TableRow 
                                key={level} 
                                className={`hover:bg-header 
                                  ${isStretchHigh && isStretchLow ? 'combo11' : 
                                  isStretchHigh ? 'back11' : 
                                  isStretchLow ? 'deepRed11' : ''}`}
                                >
                                <TableCell className={`font-medium text-left w-[13rem] ${StretchRange?.data.stretches[level].percentageChange < 0 ? 'text-red-700' : 'text-green-700'}`}>
                                  {StretchRange?.data?.stretches[level]?.percentageChange + '%' || 0.00}
                                </TableCell>
                                <TableCell className="w-[13rem] primaryText">
                                  {'$' + StretchRange?.data?.stretches[level].price || 0.00}
                                </TableCell>
                                <TableCell className={`w-[13rem] ${StretchRange?.data.stretches[level].profit < 0 ? 'text-red-700' : 'text-green-700'}`}>
                                  {'$' + StretchRange?.data?.stretches[level]?.profit || 0.00}
                                </TableCell>
                              </TableRow>

                              {index < array.length - 1 && <Separator className="bg-gray-600" />}
                            </>
                          )
                        })
                      }
                      </TableBody>
                    </Card>
                  </div>
                </div>

                {/* Surge TF */}
                <div className="flex flex-col flex-1 space-y-[1.6rem]">
                  
                  <Card className="bg-header p-2 border-none">
                    <CardHeader className="flex">
                      <TwoSides
                        WrapperClassName={"flex-wrap"}
                        sideA={"Surge Timeframe:"}
                        sideAClassName={"secondary gray text-lg font-medium mb-3 xl:mb-0"}
                        sideB={
                          <Select 
                            options={options9}
                            onChange={(e) => {
                              // console.log(e,'setSurge')
                              setSurgeTf(e)
                            }}
                            value={getSurgeTf}
                            styles={customStyles}
                          />
                        }
                      />
                    </CardHeader>
                    <Separator className="bg-gray-600" />
                    <CardContent className="flex flex-col space-y-2 mt-2 pt-4">
                      {
                        SurgeLevel?.percentChange > '0' ? (
                          <>
                            <Button className="min-h-[6rem] back3">
                              <p className="text-lg font-medium">
                                {SurgeLevel?.percentChange || 0.00}
                              </p>
                            </Button>
                            <Button className={`min-h-[6rem] ${getBackgroundColor(SurgeLevel?.priceBreak)} hover:${getBackgroundColor(SurgeLevel?.priceBreak)}`}>
                              <p className="text-lg font-medium">
                                {/* {toThreeFig(SurgeLevel?.surge || 0)} */}
                                {SurgeLevel?.surge || 0}
                              </p>
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button className={`min-h-[5rem] ${getBackgroundColor(SurgeLevel?.priceBreak)} hover:${getBackgroundColor(SurgeLevel?.priceBreak)}`}>
                              <p className="text-lg font-medium">
                                {/* {toThreeFig(SurgeLevel?.surge || 0)} */}
                                {SurgeLevel?.surge || 0}
                              </p>
                            </Button>
                            <Button className="min-h-[5rem] deepRed2">
                              <p className="text-lg font-medium">
                                {SurgeLevel?.percentChange || 0.00}
                              </p>
                            </Button>
                          </>
                        )
                      }
                    </CardContent>
                  </Card>

                  <Card className="bg-header p-2 border-none">
                    <CardHeader className="flex">
                    <TwoSides
                        WrapperClassName={"mb-5 flex-wrap"}
                        sideA={"Average True Range:"}
                        sideAClassName={"secondary gray text-lg font-medium mb-3 xl:mb-0"}
                        sideB={
                          <Select 
                            options={options10}
                            onChange={(e) => {
                              // console.log(e,'setATR')
                              setATRtf(e)
                            }}
                            value={getATRtf}
                            styles={customStyles}
                          />
                        }
                      />
                      <TwoSides
                        WrapperClassName={"mb-5 flex-wrap"}
                        sideA={"LookBack:"}
                        sideAClassName={"secondary gray text-lg font-medium mb-3 xl:mb-0"}
                        sideB={
                          <Select 
                            options={options11}
                            onChange={(e) => {
                              // console.log(e,'setLookBack')
                              setLookBackTf(e)
                            }}
                            value={getLookBackTf}
                            styles={customStyles}
                          />
                        }
                      />
                    </CardHeader>
                    <Separator className="bg-gray-600" />
                    <CardContent className="flex justify-around items-center mt-2 p-10">
                      <div className="text-5xl">{toThreeFig(StretchRange?.data.atr || 0)}</div>
                      <Separator orientation="vertical" className="bg-gray-200 h-[3.5rem]" />
                      <div className="text-5xl">{toThreeFig(StretchRange?.data.atrPercentage || 0)}%</div>
                    </CardContent>
                  </Card>
                  
                </div>
              </div>

              {
                expandedChild === 'firstChild' && (
                  <div className="-ml-[18rem]">
                    <Card className="bg-header p-2 border-none">
                      <div className="flex items-center justify-between pb-3 pt-3 border-b-[1px] borderColor">
                        <div className="flex items-center ">
                          <AiFillSetting size={30} className="mr-3" />{" "}
                          <div className="secondary text-[16px] lg:text-[20px] font-semibold">
                            {"TrendScan"}
                          </div>
                        </div>
                        <div onClick={() => setToggle(!toggle)} >
                          {
                            toggle ? <IoIosArrowDown size={20} /> : <IoIosArrowUp size={20}/>
                          }  
                        </div>
                      </div>
                      <div
                        className={`p-2 space-y-3 ${
                          toggle
                            ? "h-0 transition-all mt-1 overflow-hidden"
                            : "h-auto transition-all mt-4"
                        } `}
                      >
                        <div className="flex justify-between items-center">
                          {/* CREATE WATCHLIST TEXTINPUT */}
                          <div className="mb-5 space-x-10">
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
                                  <div>
                                    <TextInput
                                      disabled={WatchListName?.watchlist.length > 0 ? true : false}
                                      placeholder={WatchListName?.watchlist.length > 0 ? 
                                        placeholderItem : 'Create Watchlist'
                                      }
                                      inputClassName={`backText ${WatchListName?.watchlist.length > 0 ? 'cursor-not-allowed' : ''}`}
                                      suffixIcon={
                                        WatchListName?.watchlist.length > 0 ? (
                                          <MdOutlineDisabledByDefault 
                                            size={20}
                                            wrapperClassName="w-full"
                                            className="cursor-pointer"
                                            onClick={() => deleteWatchlistHolderHandle()}
                                          />
                                        ) : (
                                          <FiPlus
                                            size={20}
                                            wrapperClassName="w-full"
                                            className="cursor-pointer"
                                            onClick={value ? () => createWatchlistHolderHandle(value) : null}
                                          />
                                        )  
                                      }
                                      // prefixIcon={(addToWatchListLoader || removeFromWatchListLoader) && <Spinner />}
                                      name="watchlist"
                                      {...{ value, onChange, errors: [errorMessage] }}
                                    />
                                  </div>
                                );
                              }}
                            />
                          </div>

                          {/* EXPAND BUTTON AND EXPAND DRAWER COMPONENT */}
                          <div className="text-right mb-5">
                            <Button 
                              className="bg-gray-400 text-gray-300 hover:bg-gray-500"
                              // onClick={() => setIsExpanded(false)} // set isExpanded to false when clicked
                              onClick={() => setExpandedChild(expandedChild === 'firstChild' ? 'secondChild' : 'firstChild')}
                            >
                              Reduce TrendScan
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* FLOW TAB */}
                          <div className="flex items-center space-x-5">
                            <span className="text2">Flow:</span>

                            <Tabs 
                              defaultValue="%Change" 
                              className="w-[400px]"
                            >
                              <TabsList className="bg-black/8">
                                <TabsTrigger value="%Change" onClick={() => setCurrentRfcValue(1)} className="text-gray-400 bg-gray-600">%Change</TabsTrigger>
                                <TabsTrigger value="Rise/Fall" onClick={() => setCurrentRfcValue(0)} className="text-gray-400 bg-gray-600">Rise/Fall</TabsTrigger>
                              </TabsList>
                            </Tabs>
                          </div>

                          {/* CHANGE PERCENT TIMEFRAME */}
                          <TwoSides
                            WrapperClassName={"flex-wrap space-x-3"}
                            sideA={"Change(%) Timeframe:"}
                            sideAClassName={"secondary gray text-lg font-medium mb-3 xl:mb-0"}
                            sideB={
                              <Select 
                                options={options4}
                                onChange={(e) => {
                                  // console.log(e,'setTf')
                                  setTf(e)
                                }}
                                value={getTf}
                                styles={customStyles}
                              />
                            }
                          />

                          {/* SCORE RANK AND SORT COMPONENT */}
                          <TwoSides
                            WrapperClassName={"space-x-10"}
                            sideB={
                              <span className="flex gap-2 items-center">
                                <MdSort className="text2" size={20} />{" "}
                                <span className="text2">Sort:</span>
                                <DropDownItem
                                  options={options5}
                                  onChange={(e) => {
                                    // console.log(e?.value,'sort value')
                                    setSortValue(e)
                                    localStorage.setItem("sortValue", e?.value)
                                  }}
                                  value={getSortValue}
                                />
                              </span>
                            }
                          />

                        </div>

                        <div className="flex items-center justify-between">
                          {/* FLOW TAB */}
                          <div className={`${totalAverageValue > 0 ? "text-[#26A17B]" : "text-[#EA3943]"} text-center  p-2 font-bold borderColor border-[1px] rounded-md`}>
                            {`Watchlist ${getTf.label2} Average (%) Change: ${toThreeFig(totalAverageValue || 0.000)}%`}
                          </div>

                          {/* RISE / FALL PERCENT TIMEFRAME */}
                          <TwoSides
                            WrapperClassName={"flex-wrap space-x-3 ml-[3rem]"}
                            sideA={"Rise/Fall(%) Timeframe:"}
                            sideAClassName={"secondary gray text-lg font-medium mb-3 xl:mb-0"}
                            sideB={
                              <Select 
                                options={options12}
                                onChange={(e) => {
                                  // console.log(e,'setRF')
                                  setRf(e)
                                }}
                                value={getRf}
                                styles={customStyles}
                              />
                            }
                          />

                          {/* SCORE RANK AND SORT COMPONENT */}
                          <TwoSides
                            WrapperClassName={"space-x-10"}
                            sideA={
                              <span className="flex gap-2 items-center">
                                <Label htmlFor="airplane-mode" className="text2">Score Rank:</Label>
                                <Switch 
                                  id="airplane-mode" 
                                  className="data-[state=checked]:bg-gray-500 data-[state=unchecked]:bg-gray-300" 
                                  checked={switchValue}
                                  onCheckedChange={toggleSwitch}
                                />
                              </span>
                            }
                          />
                        </div>

                        <div className={`${totalAverageValue > 0 ? "text-[#26A17B]" : "text-[#EA3943]"} text-center  p-2 font-bold rounded-md mt-3 mb-5`}>
                          <Slider
                            initialValue={sliderValue}
                          />
                        </div>

                        {/* WATCHLIST */}
                        <div>
                          {WatchListIsLoading ? (
                            <p className="text-center">
                              <div className="flex justify-center items-center min-h-[20rem]">
                                <ClipLoader color="#52bfd9" size={50}/>
                              </div>
                            </p>
                          ) : WatchListIsFetching ? (
                            <div className="flex justify-center items-center min-h-[20rem]">
                              <ClipLoader color="#52bfd9" size={50}/>
                            </div>
                          ) : (
                            <Card className="bg-header p-2 flex flex-col items-center border-none">
                              <TableHeader className="bg-header2">
                                <TableRow className="hover:bg-black">
                                  {['Symbol', 'Price', '%Change', 'Pulse', 'Shift', 'Rise', 'Fall'].map((header) => (
                                    <TableHead className="text-left w-[10rem] primaryText" key={header}>
                                      {header}
                                    </TableHead>
                                  ))}
                                </TableRow>
                              </TableHeader>
                              <TableBody className="h-[20rem] scrollbar-thin overflow-hidden overflow-y-auto whitespace-no-wrap">
                                {WatchList?.data?.map((item, index, array) => {
                                  const priceColor = item.wltf > 0 ? "text-[#26A17B]" : "text-[#EA3943]";
                                  const pulseColor = item.pulse === 2 ? "bg-[#26A17B]" : item.pulse === -2 ? "bg-[#EA3943]" : "bg-[#d1d5db]";
                                  const shiftColor = item.shift === 2 ? "bg-[#26A17B]" : item.shift === -2 ? "bg-[#EA3943]" : "bg-[#d1d5db]";
                                  
                                  return (
                                    <>
                                      <TableRow key={item.name} className="hover:bg-header borderColor border-b-[1px] p-4 mb-3 cursor-pointer" onClick={() => handleOnClickWatchlist(item.name)}>
                                        <TableCell className="text-left w-[10rem]">{item?.name}</TableCell>
                                        <TableCell className="text-left w-[10rem]">${item.price}</TableCell>
                                        <TableCell className={`text-left w-[10rem] ${priceColor} font-semibold`}>{toThreeFig(item.wltf)}%</TableCell>
                                        <TableCell className="text-right w-[10rem]">
                                          <div className={`${pulseColor} w-[20px] h-[10px] ml-5`}></div>
                                        </TableCell>
                                        <TableCell className="text-right w-[10rem]">
                                          <div className={`${shiftColor} w-[20px] h-[10px] ml-5`}></div>
                                        </TableCell>
                                        <TableCell className="text-left w-[10rem] text-[#26A17B]">{item.rise}%</TableCell>
                                        <TableCell className="text-left w-[10rem] text-[#EA3943]">{item.fall}%</TableCell>
                                      </TableRow>
                                      {index < array.length - 1 && <Separator className="bg-gray-600" />}
                                    </>
                                    
                                  );
                                })}
                              </TableBody>
                            </Card>
                          )}
                          
                        </div>    

                      </div>
                    </Card>
                  </div>
                )
              }
              
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

            {/* TrendScan */}
            {
              expandedChild === 'secondChild' && (
                <div className="bg-white h-[68rem] py-3 px-3">
                  <div className="secondary flex-grow text-2xl font-bold mb-5 xl:mb-5">TrendScan</div>
              
                  {/* EXPAND BUTTON */}
                  <div className="text-right mb-5">
                    <Button 
                      className="bg-gray-400 primaryText hover:bg-gray-500"
                      // onClick={() => setIsExpanded(true)} 
                      onClick={() => setExpandedChild(expandedChild === 'secondChild' ? 'firstChild' : 'secondChild')}
                    >
                      Expand TrendScan
                    </Button>
                  </div>

                  {/* CREATE WATCHLIST TEXTINPUT */}
                  <div className="mb-5 space-x-10">
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
                          <div>
                            <TextInput
                              disabled={WatchListName?.watchlist.length > 0 ? true : false}
                              placeholder={WatchListName?.watchlist.length > 0 ? 
                                placeholderItem : 'Create Watchlist'
                              }
                              inputClassName={`backText ${WatchListName?.watchlist.length > 0 ? 'cursor-not-allowed' : ''}`}
                              suffixIcon={
                                WatchListName?.watchlist.length > 0 ? (
                                  <MdOutlineDisabledByDefault 
                                    size={20}
                                    wrapperClassName="w-full"
                                    className="cursor-pointer"
                                    onClick={() => deleteWatchlistHolderHandle()}
                                  />
                                ) : (
                                  <FiPlus
                                    size={20}
                                    wrapperClassName="w-full"
                                    className="cursor-pointer"
                                    onClick={value ? () => createWatchlistHolderHandle(value) : null}
                                  />
                                )  
                              }
                              // prefixIcon={(addToWatchListLoader || removeFromWatchListLoader) && <Spinner />}
                              name="watchlist"
                              {...{ value, onChange, errors: [errorMessage] }}
                            />
                          </div>
                        );
                      }}
                    />
                  </div>
              
                  {/* CHANGE PERCENT TIMEFRAME */}
                  <TwoSides
                    WrapperClassName={"mb-5 flex-wrap"}
                    sideA={"Change(%) Timeframe:"}
                    sideAClassName={"secondary gray text-lg font-medium mb-3 xl:mb-0"}
                    sideB={
                      <Select 
                        options={options4}
                        onChange={(e) => {
                          // console.log(e,'setTf')
                          setTf(e)
                        }}
                        value={getTf}
                        styles={customStyles}
                      />
                    }
                  />

                  {/* RISE / FALL PERCENT TIMEFRAME */}
                  <TwoSides
                    WrapperClassName={"mb-5 flex-wrap"}
                    sideA={"Rise/Fall(%) Timeframe:"}
                    sideAClassName={"secondary gray text-lg font-medium mb-3 xl:mb-0"}
                    sideB={
                      <Select 
                        options={options12}
                        onChange={(e) => {
                          // console.log(e,'setRF')
                          setRf(e)
                        }}
                        value={getRf}
                        styles={customStyles}
                      />
                    }
                  />

                  {/* SCORE RANK AND SORT COMPONENT */}
                  <TwoSides
                    WrapperClassName={"mb-5 space-x-10"}
                    sideA={
                      <span className="flex gap-2 items-center">
                        <Label htmlFor="airplane-mode" className="text2">Score Rank:</Label>
                        <Switch 
                          id="airplane-mode" 
                          className="data-[state=checked]:bg-gray-500 data-[state=unchecked]:bg-gray-300"
                          checked={switchValue}
                          onCheckedChange={toggleSwitch}
                        />
                      </span>
                    }
                    sideB={
                      <span className="flex gap-2 items-center">
                        <MdSort className="text2" size={20} />{" "}
                        <span className="text2">Sort:</span>
                        <DropDownItem
                          options={options5}
                          onChange={(e) => {
                            // console.log(e?.value,'sort value')
                            setSortValue(e)
                            localStorage.setItem("sortValue", e?.value)
                          }}
                          value={getSortValue}
                        />
                      </span>
                    }
                  />
              
                  {/* FLOW TAB */}
                  <div className="flex justify-around items-center space-x-3 mb-5">
                    <span className="text2">Flow:</span>

                    <Tabs 
                      defaultValue="Rise/Fall" 
                      className="w-[400px]"
                    >
                      <TabsList className="bg-black/8">
                        <TabsTrigger value="%Change" onClick={() => setCurrentRfcValue(1)} className="text-gray-400 bg-gray-600">%Change</TabsTrigger>
                        <TabsTrigger value="Rise/Fall" onClick={() => setCurrentRfcValue(0)} className="text-gray-400 bg-gray-600">Rise/Fall</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>

                  {/*  */}
                  {
                    currentRfcValue === 1 ? (
                      <div className={`${totalAverageValue > 0 ? "text-[#26A17B]" : "text-[#EA3943]"} text-center  p-2 font-bold borderColor border-[1px] rounded-md mb-5`}>
                        {`Watchlist ${getTf.label2} Average (%) Change: ${toThreeFig(totalAverageValue || 0.000)}%`}
                      </div>
                    ) : (
                      <div className={`${totalAverageValue > 0 ? "text-[#26A17B]" : "text-[#EA3943]"} text-center p-2 font-bold rounded-md mb-5`}>
                          <Slider
                            initialValue={sliderValue}
                          />
                      </div>
                    )
                  }
              
                  {/* GET ALL FROM WATCHLIST */}
                  <div className="grid grid-cols-6 gap-[4rem] justify-between items-center tableHeaderText text-sm mb-3 borderColor border-b-[1px] pb-2">
                      <div className="col-span-1">Symbol</div>
                      <div className="col-span-1">Price</div>
                      <div className="col-span-1">Pulse</div>
                      <div className="col-span-1">Shift</div>
                      <div className="col-span-1">Change%</div>
                      <div className="col-span-1"></div>
                  </div>
                  <div className="h-[33rem] scrollbar-thin overflow-hidden overflow-y-auto whitespace-no-wrap bg-white">
                      {WatchListIsLoading ? (
                        <p className="text-center"><div className="flex justify-center items-center"><ClipLoader color="#52bfd9" size={50}/></div></p>
                      ) : WatchListIsFetching ? (
                        // <Spinner />
                        <div className="flex justify-center items-center">
                          <ClipLoader color="#52bfd9" size={50}/>
                        </div>
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
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
}