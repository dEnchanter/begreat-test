<div className="p-2">

                {/* CURRENT PRICE CARD */}
                {/* HIGH PRICE */}

                <div className="mb-5 text-center">
                  <p className="font-semibold mt-3 mb-2 text-lg tracking-tighter leading-6"> High Price:{" "}   
                    <span className="font-semibold secondary ml-1">
                      {" "}
                      {/* {toThreeFig(data?.high || 0)} */}
                      {data?.high || 0}
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
                    {data?.fall || 0}%
                  </div> 
                </div>

                {/* CURRENT PRICE */}

                <div className="text-lg text-center font-semibold priceText mb-4 tracking-tighter leading-6">
                    Current Price :{" "}
                    <span className="font-semibold secondary">
                      {/* {toThreeFig(data?.currentPrice || 0)} */}
                      {data?.currentPrice || 0}
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
                    {data?.rise || 0}% 
                  </div>
                  <p className="font-semibold mt-2 text-center mb-2 text-lg tracking-tighter leading-6">Low Price:{" "}  
                    <span className="font-semibold secondary ml-1">
                      {" "}
                      {/* {toThreeFig(data?.low || 0)} */}
                      {data?.low || 0}
                    </span>
                  </p>  
              
                </div>
              </div>