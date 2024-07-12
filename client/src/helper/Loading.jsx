import { useEffect, useState } from "react";

export default function Loading() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const updateStep = () => {
      setStep((prevStep) => (prevStep < 6 ? prevStep + 1 : 0));
    };

    const interval = setInterval(updateStep, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-50 flex bg-slate-800">
      <div className="m-auto flex flex-col items-center gap-12">
        <div>
          <svg
            width="317"
            height="147"
            viewBox="0 0 317 147"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="queimando_panela"
              className={`${step >= 0 ? "block" : "hidden"}`}
            >
              <path
                d="M10.5936 68.5052C10.7716 68.0219 10.9105 67.5926 11.0104 67.2174C11.0934 65.909 11.2451 63.9726 11.4655 61.4082C11.532 60.6603 11.6087 59.7387 11.6955 58.6436C11.782 57.5219 11.8657 56.2535 11.9468 54.8385L11.6254 54.7643C11.3835 54.662 11.1693 54.6125 10.9826 54.6159C10.796 54.6192 10.6239 54.689 10.4663 54.8252C10.3349 54.9343 10.1776 55.0838 9.99436 55.2738C9.83728 55.4367 9.7328 55.5586 9.68092 55.6396C8.81793 56.5886 8.01526 57.9234 7.2729 59.6437C6.17221 62.1974 5.64018 64.4874 5.67682 66.5137C5.69176 67.3402 5.79857 68.0851 5.99726 68.7483C6.31416 70.0494 6.94209 70.8515 7.88106 71.1546C8.0958 71.2308 8.28316 71.2674 8.44314 71.2645C8.84307 71.2573 9.17394 71.1179 9.43574 70.8465C9.69755 70.575 9.91791 70.2243 10.0968 69.7943C10.3019 69.3372 10.4675 68.9075 10.5936 68.5052ZM16.0954 80.7277C16.4348 80.3215 16.9354 79.9791 17.5971 79.7004C18.2593 79.4484 18.8837 79.3171 19.4703 79.3065C19.8969 79.2988 20.2183 79.373 20.4345 79.5291C20.6773 79.6847 20.7483 79.9235 20.6475 80.2454L18.1872 90.2115C18.0626 90.6938 17.6182 91.1952 16.8542 91.7158C16.1168 92.2359 15.4015 92.5022 14.7083 92.5147C14.015 92.5272 13.5565 92.2422 13.3326 91.6594C11.7086 87.3948 10.843 82.3029 10.736 76.3839C10.7144 75.1841 10.7113 74.2773 10.7269 73.6636C9.59003 74.2176 8.39505 74.5059 7.14192 74.5285C5.86213 74.5517 4.69678 74.266 3.64586 73.6716C2.62161 73.0767 1.8851 72.1698 1.43633 70.9511C1.12617 70.0232 0.961213 69.0127 0.941452 67.9195C0.899518 65.5999 1.40127 63.1104 2.44671 60.4511C3.49214 57.7918 4.91929 55.5923 6.72814 53.8526C8.53651 52.0863 10.4955 51.2775 12.6052 51.426C12.9461 51.0998 13.3814 50.8386 13.9113 50.6423C14.4673 50.4189 14.9853 50.3028 15.4652 50.2941C16.3984 50.2773 16.858 50.6157 16.8438 51.3094C16.8112 52.4568 16.7337 54.0718 16.6114 56.1544C16.6446 57.9941 16.6343 59.6345 16.5803 61.0757C16.5263 62.517 16.3648 63.9068 16.0956 65.2452C15.9382 68.3419 15.8468 70.6639 15.8215 72.2113C15.7961 73.7587 15.7906 74.9323 15.8051 75.7321C15.8403 77.6785 15.9371 79.3437 16.0954 80.7277Z"
                fill="yellow"
              />
              <path
                d="M30.51 52.9826C30.5271 52.4489 30.8919 51.9756 31.6046 51.5626C32.3434 51.1225 33.0861 50.8957 33.8326 50.8822C34.2592 50.8745 34.6075 50.9616 34.8775 51.1434C35.147 51.2985 35.2718 51.563 35.2519 51.9368C35.2169 52.9509 35.205 53.7646 35.216 54.3778C35.1454 57.8463 34.9587 60.7968 34.6559 63.2294C34.3799 65.6614 33.6878 67.9543 32.5799 70.108C31.472 72.2617 29.7909 73.6924 27.5367 74.3999C26.7673 74.6272 26.036 74.7471 25.3428 74.7596C23.6364 74.7904 22.1209 74.3111 20.7961 73.3215C19.498 72.3315 18.7399 70.9717 18.522 69.242C18.4561 68.5497 18.4201 68.0303 18.4138 67.6837C18.3805 65.844 18.6265 63.9592 19.1517 62.0294C19.6769 60.0996 20.4482 57.7653 21.4655 55.0265C21.7724 54.3008 22.1158 53.3744 22.4954 52.2474C22.6472 51.7912 23.0404 51.4107 23.675 51.1059C24.3358 50.7739 24.9861 50.6021 25.626 50.5905C26.0526 50.5828 26.4009 50.6699 26.6709 50.8517C26.9404 51.0068 27.0781 51.2444 27.0839 51.5643C27.0858 51.671 27.062 51.8314 27.0125 52.0457C26.5073 53.6018 26.115 54.769 25.8356 55.5475C25.1015 57.7212 24.5344 59.5451 24.1343 61.0192C23.7337 62.4667 23.4672 63.9517 23.3347 65.4744C23.2929 66.1152 23.2754 66.6223 23.2822 66.9956C23.3106 68.5686 23.7177 69.6948 24.5034 70.374C24.7477 70.6097 25.0718 70.8305 25.4755 71.0366C25.8789 71.216 26.2541 71.3159 26.6012 71.3363L26.9225 71.4105C26.9492 71.41 27.0018 71.3691 27.0804 71.2876C27.7392 70.849 28.2594 70.1195 28.641 69.0991C29.0488 68.0515 29.3122 67.1266 29.431 66.3243C29.5499 65.522 29.7136 64.2522 29.9222 62.5148C30.0833 61.0983 30.202 59.5493 30.2783 57.8676C30.3813 56.1855 30.4585 54.5572 30.51 52.9826Z"
                fill="yellow"
              />
              <path
                d="M52.6938 69.8644C53.0962 69.9905 53.3005 70.2269 53.3067 70.5735C53.3144 71.0001 53.0696 71.4712 52.5722 71.987C52.0224 72.557 51.3075 72.85 50.4277 72.8659C50.0011 72.8736 49.6402 72.8268 49.345 72.7254C47.9237 72.2977 46.6398 72.0942 45.4933 72.1149C43.4936 72.1511 41.4655 72.8279 39.409 74.1452C39.0667 74.3915 38.6438 74.5992 38.1401 74.7683C37.6626 74.9103 37.2105 74.9851 36.7839 74.9928C36.384 75.0001 36.0628 74.9392 35.8204 74.8102C35.5776 74.6546 35.4533 74.4168 35.4475 74.0968C35.4441 73.9102 35.4679 73.7498 35.5188 73.6155C36.253 71.4419 36.831 69.4844 37.2529 67.7432C37.7015 66.0014 37.9897 64.2359 38.1174 62.4467C38.3139 60.0427 38.4021 58.2809 38.3819 57.161C38.3284 54.2015 37.7141 51.9456 36.5392 50.3932C36.403 50.2357 36.3325 50.0236 36.3277 49.757C36.3181 49.2237 36.6824 48.7237 37.4208 48.257C38.1586 47.7635 38.8875 47.5103 39.6074 47.4973C40.0873 47.4886 40.4358 47.589 40.653 47.7985C41.002 47.9255 41.2325 48.1347 41.3445 48.4261C42.0428 50.1737 42.9897 51.6502 44.185 52.8554C45.3798 54.034 46.7771 54.6089 48.3768 54.58C48.6701 54.5747 49.1091 54.5134 49.6937 54.3961C50.066 54.3361 50.3055 54.3051 50.4122 54.3031C50.8654 54.2949 51.2006 54.3956 51.4178 54.605C51.6611 54.7873 51.7859 55.0518 51.7922 55.3984C51.7989 55.7716 51.6457 56.1478 51.3325 56.5269C51.046 56.9054 50.6509 57.1793 50.1472 57.3484C49.0608 57.7414 47.971 57.9478 46.8778 57.9676C45.5714 57.9912 44.3134 57.7473 43.104 57.2357C43.0776 58.7298 43.0312 59.8508 42.9647 60.5988L42.7303 63.1234C43.7668 62.918 44.8037 62.7392 45.8412 62.5871L46.4003 62.537C47.4668 62.5177 48.0066 62.868 48.0196 63.5879C48.0283 64.0678 47.7694 64.4992 47.2429 64.8821C46.7164 65.2651 46.1741 65.5149 45.6161 65.6317C44.7925 65.8066 43.6625 66.0004 42.2261 66.213C41.9564 67.5248 41.6587 68.757 41.3328 69.9098C43.0809 69.2381 44.8615 68.8858 46.6745 68.8531C48.6742 68.8169 50.6806 69.154 52.6938 69.8644Z"
                fill="yellow"
              />
              <path
                d="M56.3196 52.5161C56.3366 51.9823 56.7148 51.5087 57.4541 51.0953C58.1929 50.6552 58.9356 50.4284 59.6822 50.4149C60.1087 50.4072 60.457 50.4943 60.727 50.6761C60.9966 50.8312 61.1214 51.0957 61.1014 51.4695L60.3342 73.2069C60.3177 73.7673 59.94 74.2675 59.2012 74.7076C58.4618 75.121 57.7189 75.3345 56.9724 75.348C55.9859 75.3658 55.499 74.9879 55.5116 74.2142L56.3196 52.5161ZM56.1442 47.2384C56.0976 47.6126 56.196 47.8909 56.4393 48.0732C56.7093 48.255 57.0576 48.342 57.4842 48.3343C58.2041 48.3213 58.9337 48.1081 59.673 47.6947C60.4123 47.2812 60.8169 46.7938 60.8868 46.2325C61.076 44.8955 61.2045 43.893 61.2725 43.225C61.3671 42.5565 60.9478 42.2307 60.0146 42.2476C59.2947 42.2606 58.5518 42.4741 57.7858 42.888C57.0198 43.3019 56.6147 43.7626 56.5706 44.2702L56.1442 47.2384Z"
                fill="yellow"
              />
              <path
                d="M81.052 50.3887C81.1068 50.4677 81.1628 50.6134 81.22 50.8257C81.5992 54.0994 82.2662 59.2748 83.2209 66.3521L83.8233 70.9019C83.9139 71.4871 83.59 72.013 82.8516 72.4798C82.1399 72.946 81.3842 73.1864 80.5843 73.2009C80.1044 73.2095 79.6894 73.1237 79.3394 72.9433C79.0156 72.7358 78.8365 72.419 78.8022 71.9929C78.3886 68.2931 77.9195 64.4743 77.3949 60.5364C76.7029 62.0959 76.0088 63.5353 75.3126 64.8548C75.2098 65.07 75.0137 65.2869 74.7242 65.5055C74.3834 65.8317 73.9483 66.1063 73.4189 66.3292C72.9157 66.525 72.4241 66.6273 71.9442 66.6359C71.1177 66.6509 70.5661 66.3808 70.2893 65.8257C69.7901 64.7679 69.2895 63.6301 68.7874 62.4123L68.6091 63.6157C68.3025 65.835 67.8875 68.6963 67.364 72.1996C67.2942 72.761 66.8498 73.2624 66.031 73.704C65.2384 74.1184 64.4555 74.3326 63.6822 74.3465C63.2556 74.3543 62.9209 74.2803 62.6781 74.1247C62.4352 73.969 62.3373 73.7174 62.3844 73.3698C63.6288 64.0125 64.6109 57.1136 65.3308 52.6732C65.4273 52.1114 65.8716 51.6099 66.6638 51.1689C67.456 50.7278 68.2122 50.5141 68.9326 50.5278C69.3582 50.4667 69.7189 50.5002 70.0146 50.6282C70.3364 50.7291 70.5267 50.9257 70.5853 51.218C71.3064 54.2188 72.1828 56.9634 73.2146 59.4518C74.3143 56.8448 75.3593 54.1589 76.3494 51.3938C76.5012 50.9377 76.9075 50.5436 77.5683 50.2116C78.2557 49.8791 78.9327 49.7069 79.5993 49.6948C80.3991 49.6804 80.8834 49.9116 81.052 50.3887Z"
                fill="yellow"
              />
              <path
                d="M93.1571 61.2116L92.8517 62.0173L95.6939 64.3263L95.3929 63.1716C95.1928 62.4284 94.7909 60.8487 94.1871 58.4326L93.1571 61.2116ZM97.5053 49.4511C97.9205 51.764 98.4297 54.1152 99.033 56.5047C99.6625 58.867 100.418 61.5871 101.301 64.665C102.127 67.5839 102.669 69.5211 102.926 70.4766C102.954 70.5561 102.97 70.6758 102.973 70.8358C102.984 71.4757 102.634 72.0421 101.923 72.535C101.212 73.0013 100.469 73.2414 99.6959 73.2554C99.056 73.267 98.5596 73.1026 98.2067 72.7623C97.4186 71.9497 96.5912 71.1779 95.7245 70.4467C94.8578 69.7156 93.7214 68.816 92.3152 67.7479L90.9758 66.692C89.8994 69.1118 89.0649 70.9005 88.4724 72.0581C88.293 72.4614 87.8065 72.8436 87.0129 73.2047C86.2455 73.5386 85.5285 73.7116 84.8619 73.7236C84.1154 73.7371 83.7378 73.5039 83.7291 73.024C83.7267 72.8907 83.7638 72.73 83.8404 72.5419C84.6046 70.5544 85.5102 68.271 86.557 65.6917L87.36 63.6368C86.6814 62.9823 86.3421 62.6551 86.3421 62.6551C86.1521 62.4718 86.0549 62.2602 86.0506 62.0202C86.0424 61.567 86.328 61.1351 86.9073 60.7245C87.4862 60.2873 88.1343 59.9956 88.8518 59.8492C90.0762 56.7599 91.2196 53.6188 92.2821 50.4257C92.382 50.0505 92.7094 49.7245 93.2645 49.4478C93.8458 49.1439 94.4557 48.9462 95.0941 48.8546C95.545 48.7131 95.9304 48.6395 96.2503 48.6337C96.9969 48.6202 97.4152 48.8927 97.5053 49.4511Z"
                fill="yellow"
              />
              <path
                d="M119.334 50.0567C118.782 54.9208 118.544 59.4992 118.622 63.7918C118.66 65.8715 118.778 67.9763 118.976 70.1064C119.032 70.2654 119.061 70.3983 119.063 70.5049C119.065 70.5849 119.04 70.7054 118.99 70.8663C118.99 70.893 118.977 70.9065 118.951 70.907L118.952 70.987C118.8 71.4432 118.434 71.8498 117.854 72.207C117.273 72.5376 116.65 72.7356 115.984 72.8009C114.92 72.9269 114.275 72.6585 114.05 71.9958C113.071 69.5064 111.529 66.067 109.422 61.6777L108.922 60.5666C108.769 63.9032 108.7 67.4651 108.715 71.2521C108.725 71.812 108.361 72.3253 107.623 72.7921C106.884 73.2322 106.128 73.4592 105.355 73.4732C104.875 73.4819 104.487 73.3955 104.19 73.2142C103.893 73.0329 103.754 72.7286 103.773 72.3016C103.802 65.0465 104.198 58.1716 104.961 51.6767L104.998 51.516C104.934 50.9304 105.284 50.3907 106.049 49.8968C106.813 49.4029 107.582 49.1489 108.355 49.135C109.155 49.1205 109.653 49.3782 109.85 49.9081C110.745 52.2123 112.065 55.1756 113.811 58.7979C113.926 56.2888 114.16 53.7375 114.513 51.144C114.583 50.6093 115.001 50.135 115.767 49.7211C116.533 49.2805 117.289 49.0535 118.035 49.04C118.995 49.0226 119.428 49.3615 119.334 50.0567Z"
                fill="yellow"
              />
              <path
                d="M125.744 65.8634C128.505 63.6531 130.663 61.3204 132.219 58.8652C130.074 58.2639 127.904 57.0096 125.71 55.1023C125.7 57.5295 125.712 61.1165 125.744 65.8634ZM137.138 56.5759C137.327 56.7059 137.424 56.8775 137.427 57.0908C137.431 57.2774 137.381 57.465 137.278 57.6536C135.914 60.3987 134.091 62.8454 131.809 64.9936C129.528 67.1419 126.753 69.2991 123.485 71.4651C123.168 71.6576 122.812 71.8374 122.415 72.0046C122.017 72.1451 121.632 72.2188 121.258 72.2255C120.858 72.2327 120.51 72.1324 120.213 71.9244C119.888 71.6902 119.723 71.3998 119.717 71.0532C119.709 70.5999 119.955 70.1954 120.455 69.8396C120.508 69.812 120.561 69.7711 120.613 69.7168C120.665 69.6625 120.744 69.6077 120.85 69.5525L120.831 59.6312C120.845 57.4706 120.839 54.1768 120.812 49.7499C120.784 49.6971 120.769 49.604 120.767 49.4707C120.766 49.4174 120.79 49.2836 120.84 49.0693L120.832 48.6294C120.849 48.1223 121.188 47.6894 121.848 47.3308C122.508 46.9455 123.211 46.7461 123.958 46.7326C124.465 46.7234 124.866 46.8095 125.163 46.9908C125.486 47.1717 125.651 47.4621 125.659 47.862L125.666 48.2619C128.973 52.6562 132.541 55.3121 136.372 56.2297C136.774 56.3558 137.029 56.4712 137.138 56.5759Z"
                fill="yellow"
              />
              <path
                d="M150.258 63.78C150.845 62.3291 151.125 60.8438 151.097 59.3241C151.076 58.1243 150.843 57.035 150.398 56.0562C149.98 55.0502 149.325 54.2353 148.434 53.6113C147.84 53.1953 147.276 52.9921 146.743 53.0018C146.529 53.0056 146.264 53.0638 145.946 53.1762C146.187 53.2785 146.311 53.463 146.316 53.7296C146.318 53.8896 146.269 54.0772 146.166 54.2924C145.574 55.4766 145.117 56.7651 144.795 58.1578C144.473 59.5238 144.325 60.9001 144.35 62.2865C144.379 63.8863 144.646 65.4017 145.152 66.8328C145.487 67.6268 145.831 68.2474 146.186 68.6944C146.349 68.8781 146.512 69.0085 146.673 69.0856C147.437 68.5384 148.117 67.7793 148.712 66.8084C149.335 65.837 149.85 64.8275 150.258 63.78ZM149.444 49.7524C150.755 49.9954 151.886 50.5484 152.835 51.4114C153.784 52.2744 154.51 53.3281 155.012 54.5725C155.514 55.7903 155.777 57.0658 155.802 58.3989C155.83 59.972 155.553 61.5906 154.969 63.2547C154.386 64.9189 153.573 66.4538 152.532 67.8595C151.491 69.2653 150.324 70.3799 149.032 71.2033C147.819 71.9721 146.626 72.367 145.453 72.3882C144.28 72.4094 143.247 72.0681 142.354 71.3641C141.461 70.6601 140.802 69.6318 140.378 68.2793C139.899 66.901 139.644 65.3454 139.613 63.6123C139.594 62.5725 139.656 61.5579 139.798 60.5685C139.612 60.6252 139.333 60.6569 138.96 60.6637C138.053 60.6801 137.594 60.3816 137.583 59.7684C137.579 59.5551 137.603 59.3813 137.654 59.247C138.515 56.6977 139.835 54.4735 141.614 52.5744C143.419 50.6481 145.509 49.6635 147.882 49.6206C148.228 49.6143 148.749 49.6583 149.444 49.7524Z"
                fill="yellow"
              />
              <path
                d="M114.55 111.473C114.931 110.453 115.114 109.476 115.097 108.543C115.075 107.316 114.71 106.323 114.003 105.562C112.941 104.354 111.184 103.799 108.732 103.897C108.328 108.118 108.047 113.204 107.887 119.155C109.393 118.328 110.734 117.25 111.91 115.922C113.085 114.567 113.965 113.084 114.55 111.473ZM109.075 100.77C109.368 100.738 109.821 100.717 110.434 100.706C113.687 100.647 116.128 101.403 117.757 102.974C118.978 104.125 119.605 105.621 119.638 107.461C119.655 108.42 119.463 109.571 119.06 110.912C118.226 113.434 116.8 115.713 114.783 117.75C112.766 119.76 110.447 121.309 107.826 122.396C107.769 125.118 107.732 127.492 107.715 129.52C107.699 131.574 107.689 133.281 107.687 134.641C107.72 137.894 107.699 141.162 107.625 144.444C107.608 145.004 107.217 145.505 106.451 145.945C105.686 146.386 104.903 146.613 104.103 146.628C103.17 146.645 102.697 146.306 102.685 145.613L102.667 142.413C102.675 141.373 102.67 138.866 102.651 134.892C102.659 130.918 102.712 127.21 102.81 123.767C102.092 123.86 101.386 123.913 100.693 123.926C100.186 123.935 99.8113 123.862 99.5684 123.706C99.2989 123.551 99.1617 123.34 99.1569 123.073C99.1482 122.593 99.4723 122.081 100.129 121.535C100.76 120.991 101.408 120.712 102.074 120.7C102.448 120.693 102.714 120.675 102.874 120.646C103.063 114.908 103.417 109.394 103.935 104.104C103.746 104.001 103.65 103.829 103.645 103.589C103.64 103.269 103.806 102.893 104.145 102.46C104.142 102.3 104.164 102.033 104.211 101.658C104.281 101.097 104.698 100.609 105.464 100.196C106.23 99.755 106.973 99.5282 107.692 99.5152C108.146 99.507 108.494 99.594 108.737 99.7763C109.007 99.9581 109.119 100.236 109.073 100.61L109.075 100.77Z"
                fill="yellow"
              />
              <path
                d="M127.376 110.601L127.07 111.407L129.912 113.716L129.612 112.561C129.411 111.818 129.009 110.238 128.406 107.822L127.376 110.601ZM131.724 98.8407C132.139 101.154 132.648 103.505 133.252 105.894C133.881 108.257 134.637 110.977 135.52 114.055C136.346 116.973 136.888 118.911 137.145 119.866C137.173 119.946 137.188 120.065 137.191 120.225C137.203 120.865 136.853 121.432 136.142 121.925C135.43 122.391 134.688 122.631 133.915 122.645C133.275 122.657 132.778 122.492 132.425 122.152C131.637 121.339 130.81 120.567 129.943 119.836C129.076 119.105 127.94 118.206 126.534 117.137L125.194 116.082C124.118 118.501 123.284 120.29 122.691 121.448C122.512 121.851 122.025 122.233 121.232 122.594C120.464 122.928 119.747 123.101 119.081 123.113C118.334 123.127 117.956 122.893 117.948 122.414C117.945 122.28 117.982 122.12 118.059 121.931C118.823 119.944 119.729 117.661 120.776 115.081L121.579 113.026C120.9 112.372 120.561 112.045 120.561 112.045C120.371 111.861 120.274 111.65 120.269 111.41C120.261 110.957 120.547 110.525 121.126 110.114C121.705 109.677 122.353 109.385 123.07 109.239C124.295 106.15 125.438 103.008 126.501 99.8153C126.601 99.4401 126.928 99.1141 127.483 98.8373C128.064 98.5335 128.674 98.3357 129.313 98.2442C129.764 98.1027 130.149 98.029 130.469 98.0232C131.215 98.0098 131.634 98.2822 131.724 98.8407Z"
                fill="yellow"
              />
              <path
                d="M153.552 99.4463C153 104.31 152.763 108.889 152.841 113.181C152.878 115.261 152.996 117.366 153.195 119.496C153.251 119.655 153.28 119.788 153.282 119.894C153.283 119.974 153.259 120.095 153.209 120.256C153.209 120.283 153.196 120.296 153.169 120.297L153.171 120.377C153.019 120.833 152.653 121.239 152.073 121.597C151.492 121.927 150.869 122.125 150.203 122.191C149.138 122.316 148.494 122.048 148.268 121.385C147.29 118.896 145.747 115.457 143.641 111.067L143.141 109.956C142.988 113.293 142.919 116.855 142.934 120.642C142.944 121.202 142.58 121.715 141.842 122.182C141.103 122.622 140.347 122.849 139.573 122.863C139.094 122.871 138.705 122.785 138.409 122.604C138.112 122.422 137.973 122.118 137.992 121.691C138.021 114.436 138.417 107.561 139.179 101.066L139.217 100.906C139.153 100.32 139.503 99.7802 140.267 99.2863C141.032 98.7924 141.801 98.5385 142.574 98.5245C143.374 98.5101 143.872 98.7678 144.068 99.2977C144.963 101.602 146.284 104.565 148.03 108.188C148.144 105.678 148.378 103.127 148.731 100.534C148.802 99.9989 149.22 99.5246 149.986 99.1107C150.751 98.6701 151.507 98.443 152.254 98.4296C153.214 98.4122 153.647 98.7511 153.552 99.4463Z"
                fill="yellow"
              />
              <path
                d="M172.289 117.711C172.691 117.837 172.896 118.073 172.902 118.42C172.91 118.846 172.665 119.317 172.167 119.833C171.618 120.403 170.903 120.696 170.023 120.712C169.596 120.72 169.235 120.673 168.94 120.572C167.519 120.144 166.235 119.94 165.089 119.961C163.089 119.997 161.061 120.674 159.004 121.991C158.662 122.238 158.239 122.445 157.735 122.614C157.258 122.756 156.806 122.831 156.379 122.839C155.979 122.846 155.658 122.785 155.416 122.656C155.173 122.501 155.049 122.263 155.043 121.943C155.039 121.756 155.063 121.596 155.114 121.462C155.848 119.288 156.426 117.331 156.848 115.589C157.297 113.848 157.585 112.082 157.713 110.293C157.909 107.889 157.997 106.127 157.977 105.007C157.924 102.048 157.309 99.7917 156.135 98.2394C155.998 98.0818 155.928 97.8697 155.923 97.6031C155.913 97.0699 156.278 96.5699 157.016 96.1031C157.754 95.6097 158.483 95.3565 159.203 95.3435C159.683 95.3348 160.031 95.4352 160.248 95.6446C160.597 95.7716 160.828 95.9808 160.94 96.2722C161.638 98.0199 162.585 99.4963 163.78 100.702C164.975 101.88 166.372 102.455 167.972 102.426C168.265 102.421 168.704 102.36 169.289 102.242C169.661 102.182 169.901 102.151 170.007 102.149C170.461 102.141 170.796 102.242 171.013 102.451C171.256 102.633 171.381 102.898 171.387 103.244C171.394 103.618 171.241 103.994 170.928 104.373C170.641 104.752 170.246 105.025 169.742 105.195C168.656 105.588 167.566 105.794 166.473 105.814C165.167 105.837 163.909 105.593 162.699 105.082C162.673 106.576 162.627 107.697 162.56 108.445L162.326 110.97C163.362 110.764 164.399 110.585 165.436 110.433L165.996 110.383C167.062 110.364 167.602 110.714 167.615 111.434C167.624 111.914 167.365 112.345 166.838 112.728C166.312 113.111 165.769 113.361 165.211 113.478C164.388 113.653 163.258 113.847 161.821 114.059C161.552 115.371 161.254 116.603 160.928 117.756C162.676 117.084 164.457 116.732 166.27 116.699C168.27 116.663 170.276 117 172.289 117.711Z"
                fill="yellow"
              />
              <path
                d="M178.33 90.1169C178.374 89.6093 178.793 89.1483 179.585 88.734C180.377 88.2929 181.133 88.0659 181.853 88.0528C182.707 88.0374 183.126 88.3499 183.111 88.9903C182.77 93.7705 182.183 100.369 181.348 108.785C180.812 114.529 180.466 118.256 180.31 119.966C180.267 120.527 179.849 121.041 179.058 121.509C178.292 121.949 177.536 122.176 176.79 122.19C175.75 122.209 175.263 121.831 175.329 121.056C176.096 111.867 177.097 101.554 178.33 90.1169Z"
                fill="yellow"
              />
              <path
                d="M192.092 109.431L191.786 110.237L194.628 112.546L194.328 111.391C194.127 110.648 193.725 109.068 193.122 106.652L192.092 109.431ZM196.44 97.6708C196.855 99.9836 197.364 102.335 197.968 104.724C198.597 107.087 199.353 109.807 200.236 112.885C201.062 115.804 201.603 117.741 201.861 118.696C201.889 118.776 201.904 118.895 201.907 119.055C201.919 119.695 201.569 120.262 200.858 120.755C200.146 121.221 199.404 121.461 198.631 121.475C197.991 121.487 197.494 121.322 197.141 120.982C196.353 120.169 195.526 119.398 194.659 118.666C193.792 117.935 192.656 117.036 191.25 115.968L189.91 114.912C188.834 117.331 188 119.12 187.407 120.278C187.228 120.681 186.741 121.063 185.948 121.424C185.18 121.758 184.463 121.931 183.797 121.943C183.05 121.957 182.672 121.724 182.664 121.244C182.661 121.11 182.698 120.95 182.775 120.762C183.539 118.774 184.445 116.491 185.492 113.911L186.295 111.856C185.616 111.202 185.277 110.875 185.277 110.875C185.087 110.691 184.99 110.48 184.985 110.24C184.977 109.787 185.263 109.355 185.842 108.944C186.421 108.507 187.069 108.215 187.786 108.069C189.011 104.98 190.154 101.838 191.217 98.6453C191.317 98.2701 191.644 97.9442 192.199 97.6674C192.78 97.3635 193.39 97.1658 194.029 97.0743C194.48 96.9328 194.865 96.8591 195.185 96.8533C195.931 96.8398 196.35 97.1123 196.44 97.6708Z"
                fill="yellow"
              />
            </g>
            <g id="..." className={`${step >= 1 ? "block" : "hidden"}`}>
              <path
                d="M46.8 118.6C47.7941 118.6 48.6 117.794 48.6 116.8C48.6 115.806 47.7941 115 46.8 115C45.8059 115 45 115.806 45 116.8C45 117.794 45.8059 118.6 46.8 118.6Z"
                fill="white"
              />
            </g>
            <g className={`${step >= 2 ? "block" : "hidden"}`}>
              <path
                d="M68.2 122.5C69.1941 122.5 70 121.694 70 120.7C70 119.706 69.1941 118.9 68.2 118.9C67.2059 118.9 66.4 119.706 66.4 120.7C66.4 121.694 67.2059 122.5 68.2 122.5Z"
                fill="white"
              />
            </g>
            <g className={`${step >= 3 ? "block" : "hidden"}`}>
              <path
                d="M78.7 119.7C79.6941 119.7 80.5 118.894 80.5 117.9C80.5 116.906 79.6941 116.1 78.7 116.1C77.7059 116.1 76.9 116.906 76.9 117.9C76.9 118.894 77.7059 119.7 78.7 119.7Z"
                fill="white"
              />
            </g>
            <g id="panela" className={`${step >= 0 ? "block" : "hidden"}`}>
              <path
                d="M218.185 96.3886C217.701 95.6882 217.121 95.012 216.589 94.1184C215.791 92.5725 215.406 91.0266 215.093 89.3598C214.901 88.1762 215.824 87.3303 217.012 87.5474C217.884 87.7403 218.782 87.6193 219.752 87.3774C217.457 82.305 217.733 76.3863 221.596 72.0367C222.47 70.9976 224.239 71.8909 224.237 73.1229C224.208 76.3117 225.245 79.2344 227.812 81.2628C228.829 82.0355 229.846 82.8083 231.155 83.0977C233.749 83.58 235.399 83.1688 235.644 81.6709C234.432 80.9466 234.921 78.7723 236.497 78.8925C242.049 79.2531 246.893 82.561 246.883 88.3105C254.937 86.3028 263.136 84.4641 271.237 82.6496C273.396 82.2141 274.556 84.3879 274.02 85.9583C274.72 88.3497 273.817 91.7562 271.246 92.1919C269.16 92.5066 267.541 88.9077 266.468 92.8699C266.078 94.1987 266.536 95.6238 265.346 96.6388C264.521 97.4605 263.138 97.7025 262.096 97.2438C260.594 96.5921 260.694 94.9252 259.652 94.0558C258.902 93.5246 256.572 94.5159 255.384 94.2988C253.857 93.9611 253.398 92.9467 252.745 91.9806C247.894 93.19 229.555 97.7619 225.286 98.8262C223.927 99.1649 221.016 99.8906 220.943 100.011C221.016 100.301 221.689 103.417 224.692 105.953C227.695 108.488 231.625 107.303 235.021 106.457C242.007 104.715 263.256 99.4176 266.944 98.4984C269.854 97.7727 272.717 97.2645 274.297 94.51C276.243 91.1515 275.764 87.1656 275.382 83.5663C275.07 81.4888 277.787 80.8115 278.487 82.7922C278.705 83.2511 278.849 83.8309 278.97 84.314C280.134 84.0237 281.419 83.8058 282.681 83.4914C282.682 82.67 283.096 81.8485 283.921 81.0269C285.427 79.6253 288.12 78.8513 290.133 78.2467C292.996 77.3278 298.647 76.4321 300.95 76.987C303.713 77.7349 304.846 81.4548 302.393 84.0163C300.669 85.7804 298.413 86.2402 296.084 86.8207C293.561 87.4496 290.845 88.1269 288.298 88.2486C286.868 88.2974 285.365 87.6456 284.203 86.7038C282.772 87.1633 281.243 87.647 279.691 88.034C280.072 92.044 279.144 96.1753 276.06 99.0994C272.83 102.265 267.591 102.75 263.322 103.814C254.589 105.991 245.905 108.362 237.075 110.563C233.388 111.482 229.458 112.667 225.75 111.436C221.388 110.061 218.969 106.148 217.157 102.187C215.998 99.6023 215.274 97.525 218.185 96.3886ZM260.796 91.6155C261.45 92.171 261.667 93.0406 261.956 93.7893C262.246 94.5381 262.728 96.4706 264.258 95.1656C264.67 94.7548 264.624 93.3295 264.674 92.7014C264.847 90.9136 265.141 88.7877 267.469 88.6178C268.585 88.545 269.092 89.342 269.989 89.6316C271.298 89.9211 271.615 88.7131 271.69 87.3602C266.135 88.6424 260.581 89.9246 255.05 91.3034C256.115 92.2693 259.682 90.867 260.796 91.6155ZM288.765 84.7456C290.996 84.5999 293.325 84.0193 295.459 83.4872C296.721 83.1727 298.734 82.9788 299.705 81.9155C300.677 80.8523 300.193 80.1519 299.369 79.7415C297.721 79.3313 287.534 81.4605 286.561 82.9345C285.492 84.4326 287.334 84.7944 288.765 84.7456ZM221.509 95.2521C223.523 94.6475 225.439 94.0671 227.38 93.5833C232.644 91.963 238.054 90.5118 243.39 89.1814C243.198 88.4084 243.272 87.4662 242.982 86.7174C242.355 85.0266 240.951 83.5293 239.279 82.6119C239.303 83.1192 239.108 83.5782 238.937 84.1339C237.721 86.695 234.616 87.0584 232.168 86.7452C227.053 86.0704 223.3 82.593 221.853 78.0277C221.023 81.3134 222.035 84.9608 223.994 87.8591C224.648 88.8252 223.966 90.2266 222.875 90.396C221.395 90.6622 220.013 90.9043 218.558 90.8564C219.089 92.5715 220.274 94.4312 221.509 95.2521Z"
                fill="yellow"
              />
            </g>

            <g id="fogo" className={`${step % 2 === 0 ? "block" : "hidden"}`}>
              <path
                d="M279.275 125.638C277.175 125.338 274.975 125.238 272.875 125.238C273.775 123.738 274.075 121.938 273.875 120.238C273.675 118.838 273.275 117.638 272.475 116.538C271.575 115.238 269.675 114.038 269.175 112.638C268.875 111.838 267.775 111.738 267.475 112.638C266.175 116.638 262.075 121.638 263.675 125.538C262.275 125.538 260.775 125.538 259.375 125.538C260.375 124.038 260.775 122.038 260.575 120.238C260.375 118.838 259.975 117.638 259.175 116.538C258.275 115.238 256.375 114.038 255.875 112.638C255.575 111.838 254.475 111.738 254.175 112.638C252.875 116.638 248.675 121.638 250.375 125.638C248.875 125.638 247.475 125.638 245.975 125.638C246.975 124.138 247.375 122.138 247.175 120.338C246.975 118.938 246.575 117.738 245.775 116.638C244.875 115.338 242.975 114.138 242.475 112.738C242.175 111.938 241.075 111.838 240.775 112.738C239.475 116.738 235.275 121.838 236.975 125.738C234.275 125.838 231.575 125.938 228.875 126.238C226.375 126.538 226.375 129.938 228.875 130.238C237.275 131.138 275.175 131.438 279.375 130.738C281.675 130.038 281.675 126.038 279.275 125.638ZM242.075 125.138C241.975 125.238 241.975 125.438 241.975 125.538C241.775 125.538 240.975 125.338 240.775 125.338C237.175 124.738 240.475 119.238 241.275 117.638C241.775 116.738 242.075 115.838 242.275 114.938C242.975 116.238 243.375 117.938 243.575 119.138C243.975 121.538 242.975 123.038 242.075 125.138ZM255.475 125.138C255.375 125.238 255.375 125.438 255.375 125.538C255.175 125.538 254.375 125.338 254.175 125.338C250.575 124.738 253.875 119.238 254.675 117.638C255.175 116.738 255.475 115.838 255.675 114.938C256.375 116.238 256.775 117.938 256.975 119.138C257.375 121.538 256.375 123.038 255.475 125.138ZM268.875 125.138C268.875 125.238 268.775 125.338 268.775 125.438C268.475 125.438 267.675 125.338 267.575 125.338C263.975 124.738 267.275 119.238 268.075 117.638C268.575 116.738 268.875 115.838 269.075 114.938C269.775 116.238 270.175 117.938 270.375 119.138C270.775 121.538 269.775 123.038 268.875 125.138Z"
                fill="yellow"
              />
            </g>
            <g id="Sal" className={`${step >= 5 ? "block" : "hidden"}`}>
              <path
                d="M260.4 47C259.295 47 258.4 46.1046 258.4 45C258.4 43.8954 259.295 43 260.4 43C261.505 43 262.4 43.8954 262.4 45C262.4 46.1046 261.505 47 260.4 47Z"
                fill="white"
              />
              <path
                d="M265.7 52.6C264.595 52.6 263.7 51.7046 263.7 50.6C263.7 49.4954 264.595 48.6 265.7 48.6C266.805 48.6 267.7 49.4954 267.7 50.6C267.7 51.7046 266.805 52.6 265.7 52.6Z"
                fill="white"
              />
              <path
                d="M263.5 58.6C262.395 58.6 261.5 57.7046 261.5 56.6C261.5 55.4954 262.395 54.6 263.5 54.6C264.605 54.6 265.5 55.4954 265.5 56.6C265.5 57.7046 264.605 58.6 263.5 58.6Z"
                fill="white"
              />
              <path
                d="M258 54.9C256.895 54.9 256 54.0046 256 52.9C256 51.7954 256.895 50.9 258 50.9C259.105 50.9 260 51.7954 260 52.9C260 54.0046 259.105 54.9 258 54.9Z"
                fill="white"
              />
            </g>
            <g id="Saleiro" className={`${step >= 4 ? "block" : "hidden"}`}>
              <path
                d="M268.025 35.0082C268.125 34.0082 268.725 33.3082 269.425 33.0082C276.625 26.4082 279.925 17.3082 284.525 8.90816C286.225 5.70816 288.525 1.10816 292.425 0.408163C294.925 -0.0918368 297.825 0.00816327 300.325 0.00816327C302.825 0.00816327 303.825 1.30816 305.525 3.00816C307.325 4.90816 309.225 6.80816 311.325 8.40816C313.125 9.70816 314.325 10.7082 315.325 12.7082C317.125 16.4082 316.625 20.7082 314.625 24.3082C312.125 28.7082 307.925 30.2082 303.625 32.0082C300.625 33.2082 297.825 34.8082 295.025 36.2082C292.325 37.5082 288.925 38.7082 286.725 40.8082C284.925 42.5082 283.825 45.0082 281.325 46.0082C279.225 46.8082 276.825 46.3082 274.825 45.4082C270.125 43.5082 267.725 39.9082 268.025 35.0082ZM278.725 41.9082C280.225 41.7082 280.725 40.4082 281.625 39.4082C281.925 39.0082 282.225 38.7082 282.625 38.4082C280.725 36.4082 278.725 34.5082 277.125 32.3082C276.125 31.0082 278.125 29.8082 279.225 30.7082C281.325 32.5082 283.425 34.3082 285.425 36.2082C288.325 34.3082 291.725 33.2082 294.825 31.8082C297.325 30.7082 299.825 29.5082 302.425 28.4082C305.025 27.3082 307.925 26.5082 309.825 24.3082C311.625 22.2082 313.025 18.9082 312.325 16.1082C311.825 13.9082 310.525 12.9082 308.825 11.7082C306.825 10.2082 305.125 8.40816 303.525 6.50816C302.825 5.60816 302.025 4.10816 301.025 3.40816C299.725 2.50816 297.925 3.00816 296.425 3.00816C294.925 3.00816 292.925 2.80816 291.625 3.60816C290.425 4.30816 289.425 5.80816 288.625 6.90816C287.325 8.70816 286.125 10.5082 285.025 12.5082C280.925 19.7082 278.525 28.6082 272.425 34.6082C272.425 34.7082 272.425 34.9082 272.425 35.0082C272.325 37.6082 272.825 39.1082 275.125 40.6082C276.025 41.2082 277.625 42.1082 278.725 41.9082Z"
                fill="yellow"
              />

              <path
                d="M292.925 8.00817C293.125 6.90817 294.325 5.90817 295.525 6.70817C300.125 9.90817 304.425 14.1082 307.525 18.8082C308.025 19.6082 307.725 20.9082 306.825 21.3082C302.525 23.4082 298.225 25.7082 294.025 28.0082C293.325 28.4082 292.325 28.3082 291.725 27.7082C289.725 25.7082 287.025 23.6082 285.625 21.1082C285.325 20.5082 285.325 19.8082 285.625 19.2082C288.025 15.4082 290.325 11.5082 292.925 8.00817ZM293.525 24.0082C296.725 22.3082 300.025 20.6082 303.325 19.0082C301.025 15.9082 298.125 13.1082 295.125 10.8082C293.425 14.0082 291.525 17.0082 289.625 20.1082C290.525 21.2082 292.225 22.8082 293.525 24.0082Z"
                fill="yellow"
              />
            </g>
            <g
              id="limão e folhas"
              className={`${step >= 5 ? "block" : "hidden"}`}
            >
              <path
                d="M311.797 51.1044C306.297 53.4044 298.097 57.7044 300.397 65.1044C300.497 65.4044 300.697 65.5044 300.997 65.6044C300.797 66.1044 300.697 66.7044 300.597 67.2044C300.297 69.9044 302.697 70.2044 304.697 69.7044C307.597 69.0044 310.197 67.1044 311.697 64.5044C313.797 61.0044 313.097 56.9044 313.797 53.1044C313.997 52.0044 312.997 50.6044 311.797 51.1044ZM309.297 61.3044C308.497 63.5044 306.597 65.4044 304.297 66.1044C304.697 65.4044 305.197 64.5044 305.297 64.3044C305.997 63.1044 306.897 62.1044 307.997 61.1044C309.497 59.8044 307.297 57.6044 305.797 58.9044C304.497 60.1044 302.897 61.9044 301.797 63.7044C302.097 58.8044 305.697 55.9044 310.197 54.6044C309.997 57.0044 310.097 59.2044 309.297 61.3044Z"
                fill="yellow"
              />
              <path
                d="M216.99 39.5623C217.39 38.9623 218.19 38.7623 218.79 39.3623C223.89 44.2623 228.59 49.9623 232.99 55.4623C234.19 55.8623 234.39 57.9623 232.89 58.2623C227.69 59.1623 220.99 60.2623 216.69 55.9623C212.49 51.4623 213.69 44.0623 216.99 39.5623ZM230.69 55.7623C229.09 54.2623 227.69 52.6623 226.19 51.0623C226.09 51.6623 225.99 52.2623 225.99 52.8623C225.89 53.9623 225.89 55.3623 225.59 56.4623C227.29 56.4623 229.09 56.1623 230.69 55.7623ZM218.19 41.9623C217.59 43.0623 217.09 44.4623 216.69 45.7623C218.69 45.8623 220.69 46.1623 222.59 46.8623C221.19 45.1623 219.69 43.5623 218.19 41.9623ZM219.29 54.8623C220.49 55.6623 221.69 56.0623 222.89 56.3623C222.89 55.1623 223.29 53.7623 223.49 52.6623C223.69 51.6623 223.79 50.6623 223.99 49.6623C222.19 51.2623 219.89 52.4623 217.79 53.6623C218.29 54.0623 218.79 54.4623 219.29 54.8623ZM217.09 52.1623C218.89 50.7623 220.89 49.3623 222.99 48.3623C220.79 48.0623 218.59 47.9623 216.39 47.7623C216.29 49.3623 216.49 50.8623 217.09 52.1623Z"
                fill="yellow"
              />
              <path
                d="M248.91 68.896C248.41 70.696 246.51 71.896 244.61 71.296C242.51 70.696 241.91 68.496 242.01 66.496C242.21 64.096 244.41 63.796 246.51 64.096C249.41 64.596 249.21 67.696 248.91 68.896ZM244.21 66.996C243.81 67.596 243.91 68.396 244.01 68.696C244.11 69.196 244.81 69.696 245.41 69.796C246.61 69.996 247.81 68.796 247.61 67.696C247.31 66.196 244.91 65.796 244.21 66.996Z"
                fill="yellow"
              />
            </g>
            <g
              id="ultimas folhas"
              className={`${step >= 6 ? "block" : "hidden"}`}
            >
              <path
                d="M278.506 58.6761C280.006 58.0761 281.506 58.1761 283.106 58.2761C286.006 58.5761 288.406 58.3761 290.806 56.3761C291.906 55.4761 293.806 56.2761 293.306 57.8761C291.906 62.3761 289.606 66.8761 285.306 69.3761C281.906 71.3761 276.406 72.2761 273.606 68.9761C273.506 68.8761 273.506 68.7761 273.406 68.6761C272.506 68.5761 271.706 67.9761 272.106 66.9761C273.506 63.6761 275.006 60.0761 278.506 58.6761ZM280.106 68.3761C282.006 68.1761 283.806 67.3761 285.206 66.0761C286.906 64.6761 288.106 62.7761 289.006 60.7761C287.806 61.1761 286.506 61.4761 285.106 61.3761C283.106 61.3761 281.106 60.4761 279.106 61.4761C278.006 61.9761 277.306 62.8761 276.606 63.8761C278.506 63.1761 280.506 62.8761 282.706 62.8761C284.806 62.8761 284.506 66.1761 282.306 65.7761C279.706 65.1761 277.206 66.1761 275.206 67.6761C276.906 67.9761 278.406 68.4761 280.106 68.3761Z"
                fill="yellow"
              />
              <path
                d="M188.128 68.4993C186.028 64.9993 186.728 60.9993 186.028 57.0993C185.828 56.0993 186.728 54.5993 188.028 55.0993C193.528 57.3993 201.728 61.6993 199.428 69.0993C199.328 69.3993 199.128 69.4993 198.828 69.5993C199.028 70.0993 199.128 70.6993 199.228 71.1993C199.528 73.8993 197.128 74.1993 195.128 73.6993C192.228 72.9993 189.628 70.9993 188.128 68.4993ZM194.028 62.9993C195.328 64.1993 196.928 65.9993 198.028 67.7993C197.728 62.8993 194.128 59.9993 189.628 58.6993C189.828 60.8993 189.728 63.1993 190.528 65.1993C191.328 67.3993 193.228 69.2993 195.528 69.9993C195.128 69.2993 194.628 68.3993 194.528 68.1993C193.828 66.9993 192.928 65.9993 191.828 64.9993C190.328 63.8993 192.528 61.6993 194.028 62.9993Z"
                fill="yellow"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
