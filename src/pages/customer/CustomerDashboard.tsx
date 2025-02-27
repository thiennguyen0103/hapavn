import { FC } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
import CustomerHeader from "../../components/Header/CustomerHeader";
import OrderTabs from "../../components/Tabs/OrderTab";
import {
  Calendar,
  Circle,
  Clock,
  Location1,
  Location2,
  Logo1,
  Tag,
} from "../../lib/assets";
import { cn } from "../../lib/utils";

const CustomerDashboard: FC = () => {
  const tabData = [
    {
      id: "shop",
      label: "Tạo bởi shop",
      content: (
        <div className="space-y-6">
          <div className="rounded-br-2xl rounded-bl-2xl bg-white p-6 shadow-2xl">
            <div className="mb-8 flex items-start justify-between gap-2">
              <Location1 className="w-auto min-w-7 md:min-w-10" />
              <div className="mt-2 flex w-full flex-1 items-start gap-2">
                <div className="w-full flex-1">
                  <p className="mb-4 text-[20px] font-bold text-[#333] md:mb-0">
                    Address 1
                  </p>
                  <p className="text-[10px] text-[#999] md:text-xs">
                    ***, Tân Hưng, Quận 7, TP. Hồ Chí Minh · L******n ·
                    *******975 ··· Plan ID: ABC12345
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="cursor-pointer p-1">
                    <FiMoreHorizontal size={24} />
                  </div>
                  <div className="cursor-pointer p-1">
                    <IoIosArrowUp size={24} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* Header */}
              <div className="hidden grid-cols-6 border-t border-b border-[#E8EAEB] bg-white px-3 md:grid">
                <div className="col-span-2 flex items-center justify-center py-3 text-sm font-bold text-[#999]">
                  Sản phẩm, dịch vụ
                </div>
                <div className="flex items-center px-4 py-3 text-sm font-bold text-[#999]">
                  Ngày thay gần nhất
                </div>
                <div className="flex items-center px-4 py-3 text-sm font-bold text-[#999]">
                  Chu kỳ thay thế
                </div>
                <div className="flex items-center px-4 py-3 text-sm font-bold text-[#999]">
                  Ngày thay tiếp theo
                </div>
                <div className="flex items-center px-4 py-3 text-sm font-bold text-[#999]">
                  Đơn giá
                </div>
              </div>
              <div className="space-y-6">
                {/* List 1 */}
                <div className="rounded-2xl bg-[#F6F6F6] md:rounded-tl-none md:rounded-tr-none">
                  <div className="p-3">
                    <div className="mb-4 grid grid-cols-6">
                      <div className="col-span-6">
                        <div className="flex flex-col justify-between md:flex-row md:items-center">
                          <div className="inline-flex w-full items-start gap-2 md:items-center">
                            <img
                              src="https://s3-alpha-sig.figma.com/img/e65a/3fc7/f62927429e4f1fa67eac9b0fa55c6309?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aWuwO9vMMY~iz3llzxsJjYiebENsCMXq0F82iFgXucIeSbiv~YOA~xo4A-BVG2AhvWHmLjlZ7nZEQCZxNA0ZLSQ0ax~gMwFOVfMfrqYaJFzQqq6fnjtcq89K99yr-~dFYny3SQ7h10lzmEU5TtsBExY5RbnsmXg5Q7B2rg~r7Cnqlxbof0nOU8s7NhZhDgGsxBJn6jWKtwXb~wJoFVFYJhF7-t0lh8CIyoZOQ3peBlJzaubFntablARyp0nwpjCXOqHlQ1v5sTfAmGvF-SM89TjFLQUKKk-GpjsEkhFzIhBBLq3g7wgam4oNlvXoJum11rv00Az2-ju9qH9DAyNywg__"
                              className="h-full max-h-[50px] w-full max-w-[50px] rounded-lg"
                            />
                            <div className="flex flex-1 flex-col justify-between gap-2 md:flex-row md:items-center">
                              <span className="text-sm font-light text-[#999] md:text-[20px]">
                                Combo Máy Lọc Nước Đầu Nguồn 3M AP904 + Bộ Lọc
                                Thô 3M
                              </span>
                              <div className="inline-flex flex-col gap-1 text-xs text-[8px] font-light text-[#999] md:flex-row md:text-xs">
                                <span>Ngày lắp đặt: 18/06/2024</span>
                                <span>Series: ABC123XYZ</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Item 1 */}
                    <div className="grid grid-cols-2 rounded-2xl md:grid-cols-6">
                      <div
                        className={cn(
                          "col-span-2 ml-6 rounded-tl-2xl rounded-tr-2xl px-3 pt-3 md:rounded-tr-none md:py-3",
                          "border border-[#FFAEB8] bg-[#FFAEB8] pb-0.5",
                        )}
                      >
                        <div className="inline-flex items-start gap-2 md:items-center">
                          <img
                            src="https://s3-alpha-sig.figma.com/img/0f6d/f892/d5685c47d74765fff346da03075c05af?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A4alVTwbS5NHuOqRZxNdRaLp6eMZKRSISQp5d4iYmEwLvSD3o-frTMeTWircWm5LLRuFF-mlblqf1p3ZH-UmSvemNIk3ktRCMTBjMRgMLvb~bex21aHapx1AQqrL5nyz3eQ3T5qLkrMgwD2qcL00P4LHV1V3NxKZLSIK~wWCMahFp5eR4pLbCT3aoAlkYSc~kZ~7DSg~~KPnKA-NtLmUYZLQmHrSLwkAptxF49cywY3CtSUij2ldQU8xOvdHd7zGFYudj3Ebs2MsTgqUKwgYIgf~SDXNzmiqCgkMO1oF85x1ATAxHDAloEmBUnXd2x1iyUk47c-F-1I~0TivmdV8KQ__"
                            className="h-full max-h-[50px] w-full max-w-[50px] rounded-lg"
                          />
                          <span className="font-bold text-[#333]">
                            Lõi lọc 3M RT20B6G20NN 20”
                          </span>
                        </div>
                      </div>
                      <div
                        className={cn(
                          "col-span-2 ml-6 inline-flex items-center gap-2 pl-[70px] font-normal text-[#333] md:col-span-1 md:m-0 md:p-3 md:font-bold",
                          "border border-[#FFAEB8] bg-[#FFAEB8] py-0.5",
                        )}
                      >
                        <Circle className="size-3 md:hidden" />
                        <span className="text-xs md:text-sm">18/06/2024</span>
                      </div>
                      <div
                        className={cn(
                          "col-span-2 ml-6 inline-flex items-center gap-2 pl-[70px] font-normal text-[#333] md:col-span-1 md:m-0 md:p-3 md:font-bold",
                          "border border-[#FFAEB8] bg-[#FFAEB8] py-0.5",
                        )}
                      >
                        <Clock className="size-3 md:hidden" />
                        <span className="text-xs md:text-sm">6 tháng</span>
                      </div>
                      <div
                        className={cn(
                          "col-span-2 ml-6 inline-flex items-center gap-2 pl-[70px] font-bold md:col-span-1 md:m-0 md:p-3",
                          "border border-[#FFAEB8] bg-[#FFAEB8] py-0.5",
                        )}
                      >
                        <Calendar className="size-3 md:hidden" />
                        <div className="inline-flex items-center gap-2">
                          <span className="text-xs text-[#FF0041] md:text-sm">
                            18/12/2024
                          </span>
                          <span className="rounded-[100px] border border-[#FFAEB8] bg-[#FFF6F7] px-2 py-0.5 text-[9px] text-nowrap text-[#FF0041] md:py-1 md:text-[13px]">
                            Trễ 12 ngày
                          </span>
                        </div>
                      </div>
                      <div
                        className={cn(
                          "col-span-2 ml-6 inline-flex items-center gap-2 rounded-tr-none pb-6 pl-[70px] font-normal text-[#333] md:col-span-1 md:m-0 md:rounded-tr-2xl md:p-3 md:font-bold",
                          "border border-[#FFAEB8] bg-[#FFAEB8] pt-0.5",
                        )}
                      >
                        <Tag className="size-3 md:hidden" />
                        <span className="text-xs md:text-sm">880,000đ</span>
                      </div>
                    </div>
                    {/* Item 2 */}
                    <div className="grid grid-cols-2 rounded-2xl md:grid-cols-6">
                      <div
                        className={cn(
                          "col-span-2 ml-6 px-3 pt-3 md:py-3",
                          "bg-[#FFF] pb-0.5",
                        )}
                      >
                        <div className="inline-flex items-start gap-2 md:items-center">
                          <img
                            src="https://s3-alpha-sig.figma.com/img/00b4/5574/49afa789a9a35e611d107980528a8b51?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dR93~mqvjjfjcyji4ZpAl0oLqmDBhvawPXGlXMpmcgQ3YIxlO4iazTD~fJGI8a115fWB~a2nrTM~krrdaf80Vmt4JDpqRuJcFxbRWnqBHsesKDvOsXMCFyx44V4veGd8HKQBPI1XQIZr0MKPeF86ney0Av07PIXSSwrFtS39WeP44Nepl4riM3q0raL~8xRYKt7jfQYB~P2CfFAa-CHV2M2BPaXyidngSbdSmO5bmiBO4u~9tc6cdslLkc9HvK2v1e46SmbLqnOJWN45f23rR10iHCJSjEweZaxLgJIkXNHLKdO620g6QDUJCZSVUcDR017ILYWJIENcQzmXt11BTQ__"
                            className="h-full max-h-[50px] w-full max-w-[50px] rounded-lg"
                          />
                          <span className="font-bold text-[#333]">
                            Lõi lọc 3M AP917HD-S
                          </span>
                        </div>
                      </div>
                      <div
                        className={cn(
                          "col-span-2 ml-6 inline-flex items-center gap-2 pl-[70px] font-normal text-[#333] md:col-span-1 md:m-0 md:p-3 md:font-bold md:text-[#999]",
                          "bg-[#FFF] py-0.5",
                        )}
                      >
                        <Circle className="size-3 md:hidden" />
                        <span className="text-xs md:text-sm">18/06/2024</span>
                      </div>
                      <div
                        className={cn(
                          "col-span-2 ml-6 inline-flex items-center gap-2 pl-[70px] font-normal text-[#333] md:col-span-1 md:m-0 md:p-3 md:font-bold md:text-[#999]",
                          "bg-[#FFF] py-0.5",
                        )}
                      >
                        <Clock className="size-3 md:hidden" />
                        <span className="text-xs md:text-sm">12 tháng</span>
                      </div>
                      <div
                        className={cn(
                          "col-span-2 ml-6 inline-flex items-center gap-2 pl-[70px] font-bold md:col-span-1 md:m-0 md:p-3",
                          "bg-[#FFF] py-0.5",
                        )}
                      >
                        <Calendar className="size-3 md:hidden" />
                        <div className="inline-flex items-center gap-2">
                          <span className="text-xs text-[#00CB77] md:text-sm">
                            18/06/2025
                          </span>
                          <span className="rounded-[100px] border border-[#82FCD1] bg-[#F0FDF9] px-2 py-0.5 text-[9px] text-nowrap text-[#00CB77] md:py-1 md:text-[13px]">
                            Còn 35 ngày
                          </span>
                        </div>
                      </div>
                      <div
                        className={cn(
                          "col-span-2 ml-6 inline-flex items-center gap-2 pb-6 pl-[70px] font-normal text-[#333] md:col-span-1 md:m-0 md:p-3 md:font-bold md:text-[#999]",
                          "bg-[#FFF] pt-0.5",
                        )}
                      >
                        <Tag className="size-3 md:hidden" />
                        <span className="text-xs md:text-sm">8,900,000đ</span>
                      </div>
                    </div>
                    {/* Item 3 */}
                    <div className="grid grid-cols-2 rounded-2xl md:grid-cols-6">
                      <div
                        className={cn(
                          "col-span-2 ml-6 px-3 pt-3 md:rounded-bl-2xl md:py-3",
                          "bg-[#FFFCE9] pb-0.5",
                        )}
                      >
                        <div className="inline-flex items-start gap-2 md:items-center">
                          <img
                            src="https://s3-alpha-sig.figma.com/img/c743/399b/274cf39c1348c6c5c4bf43495585ad3c?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bbBlbJ67IQtibc9ni1ZM1R4q9cLV5bIE-OwXGICf8vNRD7vl7oDBN4oLtIdjGX7nABKgG-Dc3nfHAbuCoGj0YPsJ1UNANmEP3YASlfjlajAoKL1GJhqnAoscHX5Eej3mDBc7W4k77F4neRLMnLnkdWKI1xTQMH3rD4H0hwOm1U7nYOQKYP8eY3Fg3jgeNEOn7Bpjf7-nR4TFtdGbfN6wo7EaglGsxznE3tZTyZU~IZReC-vLGoNN6QJSSZQ5tFzNzA2LhXP80XUKcqsOG6MKlBHWyv47rtpRkb5ut~61MwCo3ir0RhjBMMNrLJNrFGDEusv1r9lFmu9rCktH8bbWbQ__"
                            className="h-full max-h-[50px] w-full max-w-[50px] rounded-lg"
                          />
                          <span className="font-bold text-[#333]">
                            Lõi lọc 3M ABC
                          </span>
                        </div>
                      </div>
                      <div
                        className={cn(
                          "col-span-2 ml-6 inline-flex items-center gap-2 pl-[70px] font-normal text-[#333] md:col-span-1 md:m-0 md:p-3 md:font-bold md:text-[#999]",
                          "bg-[#FFFCE9] py-0.5",
                        )}
                      >
                        <Circle className="size-3 md:hidden" />
                        <span className="text-xs md:text-sm">18/06/2024</span>
                      </div>
                      <div
                        className={cn(
                          "col-span-2 ml-6 inline-flex items-center gap-2 pl-[70px] font-normal text-[#333] md:col-span-1 md:m-0 md:p-3 md:font-bold md:text-[#999]",
                          "bg-[#FFFCE9] py-0.5",
                        )}
                      >
                        <Clock className="size-3 md:hidden" />
                        <span className="text-xs md:text-sm">9 tháng</span>
                      </div>
                      <div
                        className={cn(
                          "col-span-2 ml-6 inline-flex items-center gap-2 pl-[70px] font-bold md:col-span-1 md:m-0 md:p-3",
                          "bg-[#FFFCE9] py-0.5",
                        )}
                      >
                        <Calendar className="size-3 md:hidden" />
                        <div className="inline-flex items-center gap-2">
                          <span className="text-xs text-[#E9A30B] md:text-sm">
                            18/01/2025
                          </span>
                          <span className="rounded-[100px] border border-[#FEE99C] bg-[#FFFCE9] px-2 py-0.5 text-[9px] text-nowrap text-[#E9A30B] md:py-1 md:text-[13px]">
                            Chỉ còn 15 ngày
                          </span>
                        </div>
                      </div>
                      <div
                        className={cn(
                          "col-span-2 ml-6 inline-flex items-center gap-2 rounded-br-2xl rounded-bl-2xl pb-6 pl-[70px] font-normal text-[#333] md:col-span-1 md:m-0 md:rounded-bl-none md:p-3 md:font-bold md:text-[#999]",
                          "bg-[#FFFCE9] pt-0.5",
                        )}
                      >
                        <Tag className="size-3 md:hidden" />
                        <span className="text-xs md:text-sm">880,000đ</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* List 2 */}
                <div className="rounded-2xl bg-[#F6F6F6]">
                  <div className="p-3">
                    <div className="mb-4 grid grid-cols-6">
                      <div className="col-span-6">
                        <div className="flex flex-col justify-between md:flex-row md:items-center">
                          <div className="inline-flex w-full items-start gap-2 md:items-center">
                            <img
                              src="https://s3-alpha-sig.figma.com/img/16cc/3e99/845a028449eaabe38add48e4a011e705?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oft6PqbD6zQst56-zMqvTLKfVkDjfwvvuaOOD9HsGw2gCOJdWdsfh0tzNyYgFzm91h8aEV2MXjDPOcUSBB3RNLXXVZ-cGnHHA6x~aRr67m6V5OTkOo9od~h1Ve4Y6qdeOZDxA3oM7f7hm3uzkVa3m642F3V0vf5dLSMF0kxzRLA-40qjlzu-MMd8imPDWeGtNlbAflPAhBoJAawfjvue5RFduqtQ~toYxsIFFE500m3eOI6Ya8uDopKB7p4x0AhISr~GiFzyrQW7vbW4wJ2O-T0A-qEkv6c3xJ1JYrQ4w-Ly~1aPW66c2rZKyU6ZPLgAWxAyCGwkO5UJk5IwwgfQlA__"
                              className="h-full max-h-[50px] w-full max-w-[50px] rounded-lg"
                            />
                            <div className="flex flex-1 flex-col justify-between gap-2 md:flex-row md:items-center">
                              <span className="text-sm font-light text-[#999] md:text-[20px]">
                                Máy Lọc Nước 3M ICE140-S
                              </span>
                              <div className="inline-flex flex-col gap-1 text-xs text-[8px] font-light text-[#999] md:flex-row md:text-xs">
                                <span>Ngày lắp đặt: 18/06/2024</span>
                                <span>Series: ABC123XYZ</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Item 1 */}
                    <div className="grid grid-cols-2 rounded-2xl md:grid-cols-6">
                      <div
                        className={cn(
                          "col-span-2 ml-6 rounded-tl-2xl rounded-tr-2xl px-3 pt-3 md:rounded-tr-none md:rounded-bl-2xl md:py-3",
                          "bg-[#FFF] py-0.5",
                        )}
                      >
                        <div className="inline-flex items-start gap-2 md:items-center">
                          <img
                            src="https://s3-alpha-sig.figma.com/img/c8d4/1e8e/b06245bf78838c7d58c24cd4e7223f46?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A2-Rfv7ggElx6L5-odoJcE9ADWSxnBffiSr~DLCYWJnl6sUUvGCrkC871qh22pcwpezR6GEK02mAaKHa5En0VV05pnfvM3mtWF2x9Qe5~pW4aHfccmpQbmvQ3FtQOQ8-PDQFYUtLR~PB~hAiuoMs7Z8LIw4VqvUJcE2C6c6Nk1JlTLOpuujuK7cQ8VwyL4rt7TTma3NG~rhH3GUO9PqocGr1FJKOtaNHcIqSJeu8sO88T5p0qG30ZOWdtPg2BnN-hEBtBYBQeoxHMtQIOJhCBgn5HfsQK5p62Nhz9oceAN5QKDgvK5RvH0MMQSRGTVwWfSvLCh6e0JCsgGJVwNGayQ__"
                            className="h-full max-h-[50px] w-full max-w-[50px] rounded-lg"
                          />
                          <span className="font-bold text-[#333]">
                            Lõi lọc 3M HF40-S
                          </span>
                        </div>
                      </div>
                      <div
                        className={cn(
                          "col-span-2 ml-6 inline-flex items-center gap-2 pl-[70px] font-normal text-[#333] md:col-span-1 md:m-0 md:p-3 md:font-bold md:text-[#999]",
                          "bg-[#FFF] py-0.5",
                        )}
                      >
                        <Circle className="size-3 md:hidden" />
                        <span className="text-xs md:text-sm">18/08/2024</span>
                      </div>
                      <div
                        className={cn(
                          "col-span-2 ml-6 inline-flex items-center gap-2 pl-[70px] font-normal text-[#333] md:col-span-1 md:m-0 md:p-3 md:font-bold md:text-[#999]",
                          "bg-[#FFF] py-0.5",
                        )}
                      >
                        <Clock className="size-3 md:hidden" />
                        <span className="text-xs md:text-sm">12 tháng</span>
                      </div>
                      <div
                        className={cn(
                          "col-span-2 ml-6 inline-flex items-center gap-2 pl-[70px] font-bold md:col-span-1 md:m-0 md:p-3",
                          "bg-[#FFF] py-0.5",
                        )}
                      >
                        <Calendar className="size-3 md:hidden" />
                        <div className="inline-flex items-center gap-2">
                          <span className="text-xs text-[#00CB77] md:text-sm">
                            18/08/2025
                          </span>
                          <span className="rounded-[100px] border border-[#82FCD1] bg-[#F0FDF9] px-2 py-0.5 text-[9px] text-nowrap text-[#00CB77] md:py-1 md:text-[13px]">
                            Còn 68 ngày
                          </span>
                        </div>
                      </div>
                      <div
                        className={cn(
                          "col-span-2 ml-6 inline-flex items-center gap-2 rounded-tr-none rounded-br-2xl rounded-bl-2xl pb-6 pl-[70px] font-normal text-[#333] md:col-span-1 md:m-0 md:rounded-tr-2xl md:rounded-bl-none md:p-3 md:font-bold md:text-[#999]",
                          "bg-[#FFF] pt-0.5",
                        )}
                      >
                        <Tag className="size-3 md:hidden" />
                        <span className="text-xs md:text-sm">3,990,000đ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-8 flex items-start justify-between gap-2">
              <Location2 className="w-auto min-w-7 md:min-w-10" />
              <div className="mt-2 flex w-full flex-1 items-start gap-2">
                <div className="w-full flex-1">
                  <p className="mb-4 text-[20px] font-bold text-[#333] md:mb-0">
                    Address 2
                  </p>
                  <p className="text-[10px] text-[#999] md:text-xs">
                    ***, Bến Thành, Quận 1, TP. Hồ Chí Minh · T******c ·
                    *******065 ··· Plan ID: ABC686868
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="cursor-pointer p-1">
                    <FiMoreHorizontal size={24} />
                  </div>
                  <div className="cursor-pointer p-1">
                    <IoIosArrowUp size={24} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* Header */}
              <div className="hidden grid-cols-6 border-t border-b border-[#E8EAEB] bg-white px-3 md:grid">
                <div className="col-span-2 flex items-center justify-center py-3 text-sm font-bold text-[#999]">
                  Sản phẩm, dịch vụ
                </div>
                <div className="flex items-center px-4 py-3 text-sm font-bold text-[#999]">
                  Ngày thay gần nhất
                </div>
                <div className="flex items-center px-4 py-3 text-sm font-bold text-[#999]">
                  Chu kỳ thay thế
                </div>
                <div className="flex items-center px-4 py-3 text-sm font-bold text-[#999]">
                  Ngày thay tiếp theo
                </div>
                <div className="flex items-center px-4 py-3 text-sm font-bold text-[#999]">
                  Đơn giá
                </div>
              </div>
              <div className="space-y-6">
                {/* List 1 */}
                <div className="rounded-2xl bg-[#F6F6F6] md:rounded-tl-none md:rounded-tr-none">
                  <div className="p-3">
                    <div className="mb-4 grid grid-cols-6">
                      <div className="col-span-6">
                        <div className="flex flex-col justify-between md:flex-row md:items-center">
                          <div className="inline-flex w-full items-start gap-2 md:items-center">
                            <img
                              src="https://s3-alpha-sig.figma.com/img/d09c/d356/62c011322a5dd38f66d2aec28d89c035?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rbp0s30IQLWmfTXcJAZ7fRAXFOlQAChYhvxuYP92Nz4hI2gZada3TaJHqWWITUwWMAsTJz2qSvUWTO9SPBuLwkYtUSy-z4gmeopKj0TfTHrBUmtPhKKDGZcoxY9XcfRJ5s-GmZoWFLFJ9LLh~gPBan3v5-8VskfOaWYLepN7QxLYTYN3a6FPLivjc2AF8~RjQs-lJr93~DnYHKXEbWndunSgrUtDCbImeDANrLjw-I7OBtMWSkhdgSXderC-fdX86Bu6FaQmGZeSIQefIa~QWiZf-SMK1B7PZpL-N-MrgIqZhv0cq4H~3GgZoM1DKqSKPYj94mTr0v3D4lQM41VDFg__"
                              className="h-full max-h-[50px] w-full max-w-[50px] rounded-lg"
                            />
                            <div className="flex flex-1 flex-col justify-between gap-2 md:flex-row md:items-center">
                              <span className="text-sm font-light text-[#999] md:text-[20px]">
                                Máy Lọc Nước 3M BREW120-MS
                              </span>
                              <div className="inline-flex flex-col gap-1 text-xs text-[8px] font-light text-[#999] md:flex-row md:text-xs">
                                <span>Ngày lắp đặt: 18/06/2024</span>
                                <span>Series: ABC123XYZ</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Item 1 */}
                    <div className="grid grid-cols-2 rounded-2xl md:grid-cols-6">
                      <div
                        className={cn(
                          "col-span-2 ml-6 rounded-tl-2xl px-3 pt-3 md:rounded-tr-none md:rounded-bl-2xl md:py-3",
                          "bg-[#FFF] py-0.5",
                        )}
                      >
                        <div className="inline-flex items-start gap-2 md:items-center">
                          <img
                            src="https://s3-alpha-sig.figma.com/img/c8d4/1e8e/b06245bf78838c7d58c24cd4e7223f46?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A2-Rfv7ggElx6L5-odoJcE9ADWSxnBffiSr~DLCYWJnl6sUUvGCrkC871qh22pcwpezR6GEK02mAaKHa5En0VV05pnfvM3mtWF2x9Qe5~pW4aHfccmpQbmvQ3FtQOQ8-PDQFYUtLR~PB~hAiuoMs7Z8LIw4VqvUJcE2C6c6Nk1JlTLOpuujuK7cQ8VwyL4rt7TTma3NG~rhH3GUO9PqocGr1FJKOtaNHcIqSJeu8sO88T5p0qG30ZOWdtPg2BnN-hEBtBYBQeoxHMtQIOJhCBgn5HfsQK5p62Nhz9oceAN5QKDgvK5RvH0MMQSRGTVwWfSvLCh6e0JCsgGJVwNGayQ__"
                            className="h-full max-h-[50px] w-full max-w-[50px] rounded-lg"
                          />
                          <span className="font-bold text-[#333]">
                            Lõi lọc 3M HF20-MS
                          </span>
                        </div>
                      </div>
                      <div
                        className={cn(
                          "col-span-2 ml-6 inline-flex items-center gap-2 pl-[70px] font-normal text-[#333] md:col-span-1 md:m-0 md:p-3 md:font-bold md:text-[#999]",
                          "bg-[#FFF] py-0.5",
                        )}
                      >
                        <Circle className="size-3 md:hidden" />
                        <span className="text-xs md:text-sm">20/09/2024</span>
                      </div>
                      <div
                        className={cn(
                          "col-span-2 ml-6 inline-flex items-center gap-2 pl-[70px] font-normal text-[#333] md:col-span-1 md:m-0 md:p-3 md:font-bold md:text-[#999]",
                          "bg-[#FFF] py-0.5",
                        )}
                      >
                        <Clock className="size-3 md:hidden" />
                        <span className="text-xs md:text-sm">12 tháng</span>
                      </div>
                      <div
                        className={cn(
                          "col-span-2 ml-6 inline-flex items-center gap-2 pl-[70px] font-bold md:col-span-1 md:m-0 md:p-3",
                          "bg-[#FFF] py-0.5",
                        )}
                      >
                        <Calendar className="size-3 md:hidden" />
                        <div className="inline-flex items-center gap-2">
                          <span className="text-xs text-[#00CB77] md:text-sm">
                            20/09/2025
                          </span>
                          <span className="rounded-[100px] border border-[#82FCD1] bg-[#F0FDF9] px-2 py-0.5 text-[9px] text-nowrap text-[#00CB77] md:py-1 md:text-[13px]">
                            Còn 40 ngày
                          </span>
                        </div>
                      </div>
                      <div
                        className={cn(
                          "col-span-2 ml-6 inline-flex items-center gap-2 rounded-tr-none rounded-br-2xl rounded-bl-2xl pb-6 pl-[70px] font-normal text-[#333] md:col-span-1 md:m-0 md:rounded-tr-2xl md:rounded-bl-none md:p-3 md:font-bold md:text-[#999]",
                          "bg-[#FFF] pt-0.5",
                        )}
                      >
                        <Tag className="size-3 md:hidden" />
                        <span className="text-xs md:text-sm">2,580,000đ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "me",
      label: "Tạo bởi tôi",
      content: <p>Danh sách sản phẩm do bạn tạo...</p>,
    },
  ];

  return (
    <div className="relative">
      <CustomerHeader />
      <div className="fixed top-0 right-0 left-0 z-0 h-[368px] bg-gradient-to-b from-[#0076DC] via-[#7AB5E9] to-[#F3F5F7] md:left-[220px]" />
      <Logo1 className="fixed top-1 right-1/4 hidden md:block" />
      <div className="relative z-10 px-2 pb-2 md:px-6 md:pb-6">
        <h1 className="py-8 text-2xl font-bold text-white md:py-[70px] md:text-[40px]">
          Thay lõi định kỳ
        </h1>
        <OrderTabs tabs={tabData} />
      </div>
    </div>
  );
};

export default CustomerDashboard;
