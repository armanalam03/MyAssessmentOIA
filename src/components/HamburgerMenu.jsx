import React, {useState, useEffect} from 'react'
import Tab from './Tab'
import '../styles/HamBurgerMenu.css'
import CrossIcon from '../assets/icons/cross-icon-grey.png'

function HamburgerMenu({isShown, setIsShown}) {

  const [selectedTab, setSelectedTab] = useState(1);

  const tabs = [
    {
      path: "M2.53991 0H5.91991C7.32991 0 8.45991 1.15 8.45991 2.561V5.97C8.45991 7.39 7.32991 8.53 5.91991 8.53H2.53991C1.13991 8.53 -9.15527e-05 7.39 -9.15527e-05 5.97V2.561C-9.15527e-05 1.15 1.13991 0 2.53991 0ZM2.53991 11.4697H5.91991C7.32991 11.4697 8.45991 12.6107 8.45991 14.0307V17.4397C8.45991 18.8497 7.32991 19.9997 5.91991 19.9997H2.53991C1.13991 19.9997 -9.15527e-05 18.8497 -9.15527e-05 17.4397V14.0307C-9.15527e-05 12.6107 1.13991 11.4697 2.53991 11.4697ZM17.46 0H14.08C12.67 0 11.54 1.15 11.54 2.561V5.97C11.54 7.39 12.67 8.53 14.08 8.53H17.46C18.86 8.53 20 7.39 20 5.97V2.561C20 1.15 18.86 0 17.46 0ZM14.08 11.4697H17.46C18.86 11.4697 20 12.6107 20 14.0307V17.4397C20 18.8497 18.86 19.9997 17.46 19.9997H14.08C12.67 19.9997 11.54 18.8497 11.54 17.4397V14.0307C11.54 12.6107 12.67 11.4697 14.08 11.4697Z",
      name: "Dashboard",
    },
    {
      path: "M5.33003 0H14.669C18.07 0 19.99 2.1243 20 5.86962V16.1552C20 19.8994 18.07 22.0248 14.669 22.0248H5.33003C1.92903 22.0248 3.05176e-05 19.8994 3.05176e-05 16.1552V5.86962C3.05176e-05 2.1243 1.92903 0 5.33003 0ZM10.049 17.4657C10.48 17.4657 10.839 17.1133 10.879 16.6398V5.41811C10.919 5.07672 10.77 4.73424 10.5 4.54813C10.219 4.36092 9.87903 4.36092 9.61003 4.54813C9.33903 4.73424 9.19003 5.07672 9.21903 5.41811V16.6398C9.27003 17.1133 9.62903 17.4657 10.049 17.4657ZM14.65 17.4657C15.07 17.4657 15.429 17.1133 15.48 16.6398V13.0277C15.509 12.6742 15.36 12.3449 15.089 12.1577C14.82 11.9705 14.48 11.9705 14.2 12.1577C13.929 12.3449 13.78 12.6742 13.82 13.0277V16.6398C13.86 17.1133 14.219 17.4657 14.65 17.4657ZM6.21902 16.6398C6.17902 17.1133 5.82002 17.4657 5.38902 17.4657C4.95902 17.4657 4.59902 17.1133 4.56002 16.6398V9.03018C4.53002 8.6877 4.67902 8.34741 4.95002 8.1602C5.21902 7.97299 5.56002 7.97299 5.83002 8.1602C6.09902 8.34741 6.25002 8.6877 6.21902 9.03018V16.6398Z",
      name: "Upload",
    },
    {
      path: "M19.7872 7.47423C19.6518 7.61908 19.4681 7.70185 19.2747 7.70185C18.559 7.70185 17.9787 8.32263 17.9787 9.07792C17.9787 9.83838 18.5522 10.4561 19.2611 10.4643C19.6605 10.4685 20 10.7664 20 11.1938V13.8476C20 16.0814 18.3075 17.893 16.2186 17.893H13.0658C12.7398 17.893 12.4758 17.6106 12.4758 17.2619V15.0271C12.4758 14.5925 12.1567 14.2511 11.7505 14.2511C11.354 14.2511 11.0251 14.5925 11.0251 15.0271V17.2619C11.0251 17.6106 10.7611 17.893 10.4362 17.893H3.78143C1.70213 17.893 0 16.0824 0 13.8476V11.1938C0 10.7664 0.339458 10.4685 0.738878 10.4643C1.44874 10.4561 2.02128 9.83838 2.02128 9.07792C2.02128 8.34333 1.46035 7.78462 0.725339 7.78462C0.531915 7.78462 0.348162 7.70185 0.212766 7.557C0.0773694 7.41215 0 7.21557 0 7.00865V4.32894C0 2.09826 1.706 0.273159 3.7911 0.273159H10.4362C10.7611 0.273159 11.0251 0.555615 11.0251 0.904288V3.55296C11.0251 3.97716 11.354 4.32894 11.7505 4.32894C12.1567 4.32894 12.4758 3.97716 12.4758 3.55296V0.904288C12.4758 0.555615 12.7398 0.273159 13.0658 0.273159H16.2186C18.3075 0.273159 20 2.08377 20 4.31859V6.92587C20 7.1328 19.9226 7.32938 19.7872 7.47423ZM11.7505 12.2439C12.1567 12.2439 12.4758 11.8921 12.4758 11.4679V7.32938C12.4758 6.90518 12.1567 6.55341 11.7505 6.55341C11.354 6.55341 11.0251 6.90518 11.0251 7.32938V11.4679C11.0251 11.8921 11.354 12.2439 11.7505 12.2439Z",
      name: "Invoice",
    },
    {
      path: "M4.81 0.475647H13.191C16.28 0.475647 18 2.43586 18 5.79464V17.1705C18 20.5843 16.28 22.5005 13.191 22.5005H4.81C1.77 22.5005 0 20.5843 0 17.1705V5.79464C0 2.43586 1.77 0.475647 4.81 0.475647ZM5.07999 5.60743V5.59642H8.06899C8.49999 5.59642 8.84999 5.98185 8.84999 6.45429C8.84999 6.93993 8.49999 7.32537 8.06899 7.32537H5.07999C4.64899 7.32537 4.29999 6.93994 4.29999 6.4664C4.29999 5.99287 4.64899 5.60743 5.07999 5.60743ZM5.07999 12.303H12.92C13.35 12.303 13.7 11.9176 13.7 11.444C13.7 10.9705 13.35 10.5839 12.92 10.5839H5.07999C4.64899 10.5839 4.29999 10.9705 4.29999 11.444C4.29999 11.9176 4.64899 12.303 5.07999 12.303ZM5.07999 17.3357H12.92C13.319 17.2916 13.62 16.9161 13.62 16.4767C13.62 16.0252 13.319 15.6508 12.92 15.6067H5.07999C4.77999 15.5737 4.48999 15.7278 4.32999 16.0142C4.16999 16.2895 4.16999 16.6529 4.32999 16.9392C4.48999 17.2145 4.77999 17.3797 5.07999 17.3357Z",
      name: "Schedule",
    },
    {
      path: "M13.4109 1.75186L13.4119 2.57738C16.1665 2.81513 17.9862 4.88222 17.9891 8.05221L18 17.331C18.0039 20.7872 16.0322 22.9137 12.8718 22.9192L5.15188 22.9302C2.01119 22.9346 0.0148166 20.7575 0.0108673 17.2914L6.64975e-06 8.12155C-0.00394266 4.93065 1.75153 2.86906 4.50617 2.59059L4.50518 1.76507C4.5042 1.28076 4.83001 0.916435 5.26444 0.916435C5.69886 0.915335 6.02468 1.27856 6.02567 1.76287L6.02666 2.53335L11.8914 2.52454L11.8904 1.75406C11.8894 1.26976 12.2152 0.906529 12.6497 0.905429C13.0742 0.904328 13.4099 1.26756 13.4109 1.75186ZM1.52146 8.46166L16.4696 8.43965V8.05441C16.4272 5.68792 15.349 4.44634 13.4138 4.26143L13.4148 5.10896C13.4148 5.58226 13.0801 5.95759 12.6556 5.95759C12.2211 5.95869 11.8943 5.58446 11.8943 5.11116L11.8933 4.2196L6.02862 4.22841L6.0296 5.11887C6.0296 5.59326 5.70477 5.9675 5.27035 5.9675C4.83592 5.9686 4.50912 5.59547 4.50912 5.12107L4.50813 4.27354C2.58284 4.48597 1.51751 5.73195 1.52048 8.11935L1.52146 8.46166ZM12.2399 13.4643V13.4764C12.2498 13.9827 12.625 14.3669 13.0801 14.3559C13.5244 14.3438 13.8789 13.9244 13.869 13.4181C13.8483 12.9338 13.4918 12.5386 13.0485 12.5397C12.5943 12.5507 12.2389 12.958 12.2399 13.4643ZM13.0554 18.4064C12.6013 18.3954 12.235 17.9782 12.234 17.4719C12.2241 16.9656 12.5884 16.5462 13.0426 16.5341H13.0525C13.5165 16.5341 13.8927 16.9513 13.8927 17.4686C13.8937 17.9859 13.5185 18.4053 13.0554 18.4064ZM8.17211 13.4819C8.19186 13.9882 8.56803 14.3834 9.0222 14.3614C9.4665 14.3382 9.82095 13.92 9.80121 13.4137C9.79035 12.9184 9.42503 12.5331 8.98074 12.5342C8.52657 12.5562 8.17113 12.9756 8.17211 13.4819ZM9.02614 18.3569C8.57197 18.3789 8.19678 17.9837 8.17605 17.4774C8.17605 16.9711 8.5305 16.5528 8.98467 16.5297C9.42897 16.5286 9.79527 16.9139 9.80514 17.4081C9.82587 17.9155 9.47044 18.3338 9.02614 18.3569ZM4.1043 13.5204C4.12405 14.0268 4.50022 14.423 4.95439 14.3999C5.39869 14.3779 5.75314 13.9585 5.73241 13.4522C5.72253 12.9569 5.35722 12.5716 4.91194 12.5727C4.45777 12.5948 4.10332 13.0141 4.1043 13.5204ZM4.95836 18.3624C4.50419 18.3855 4.12901 17.9892 4.10827 17.4829C4.10728 16.9766 4.46272 16.5572 4.91689 16.5352C5.36119 16.5341 5.72749 16.9194 5.73736 17.4147C5.7581 17.921 5.40365 18.3404 4.95836 18.3624Z",
      name: "Calendar",
    },
    {
      path: "M15.7071 7.81964C15.7071 9.20272 16.039 10.0179 16.7695 10.9574C17.3231 11.6495 17.5 12.5379 17.5 13.5017C17.5 14.4644 17.2128 15.3784 16.6373 16.1204C15.884 17.0099 14.8215 17.5778 13.7372 17.6765C12.1659 17.824 10.5937 17.9482 9.0005 17.9482C7.40634 17.9482 5.83505 17.8739 4.26375 17.6765C3.17846 17.5778 2.11602 17.0099 1.36367 16.1204C0.78822 15.3784 0.5 14.4644 0.5 13.5017C0.5 12.5379 0.677901 11.6495 1.23049 10.9574C1.98384 10.0179 2.29392 9.20272 2.29392 7.81964V7.35048C2.29392 5.49823 2.71333 4.28706 3.577 3.1014C4.86106 1.37227 6.91935 0.335236 8.95577 0.335236H9.04522C11.1254 0.335236 13.2502 1.42218 14.5125 3.22563C15.3314 4.38688 15.7071 5.54703 15.7071 7.35048V7.81964ZM6.07367 20.2246C6.07367 19.67 6.53582 19.416 6.96318 19.3073C7.46309 19.1909 10.5093 19.1909 11.0092 19.3073C11.4365 19.416 11.8987 19.67 11.8987 20.2246C11.8738 20.7525 11.5926 21.2206 11.204 21.5178C10.7001 21.9504 10.1087 22.2243 9.49057 22.323C9.14868 22.3718 8.81275 22.3729 8.48279 22.323C7.86361 22.2243 7.27227 21.9504 6.76937 21.5167C6.37978 21.2206 6.09852 20.7525 6.07367 20.2246Z",
      name: "Notification",
    },
    {
      path: "M18.4023 13.5175C18.7599 13.7268 19.0359 14.0572 19.23 14.3875C19.6082 15.0703 19.5775 15.9072 19.2096 16.6451L18.4942 17.9666C18.1161 18.6714 17.411 19.1119 16.6854 19.1119C16.3277 19.1119 15.9291 19.0017 15.6021 18.7815C15.3364 18.5943 15.0298 18.5282 14.7028 18.5282C13.691 18.5282 12.8428 19.4422 12.8121 20.5325C12.8121 21.7989 11.8719 22.79 10.6967 22.79H9.30683C8.12136 22.79 7.18116 21.7989 7.18116 20.5325C7.16072 19.4422 6.3125 18.5282 5.30076 18.5282C4.96351 18.5282 4.65693 18.5943 4.40144 18.7815C4.07441 19.0017 3.66563 19.1119 3.31816 19.1119C2.58235 19.1119 1.8772 18.6714 1.49908 17.9666L0.793928 16.6451C0.415804 15.9293 0.395365 15.0703 0.773489 14.3875C0.937002 14.0572 1.24359 13.7268 1.59106 13.5175C1.8772 13.3634 2.06116 13.1101 2.23489 12.8128C2.74587 11.8657 2.43928 10.6213 1.57062 10.0596C0.558878 9.43194 0.231852 8.03336 0.814367 6.94313L1.49908 5.64367C2.09181 4.55344 3.35904 4.168 4.381 4.80672C5.2701 5.33532 6.42491 4.98292 6.94611 4.04687C7.10962 3.73852 7.2016 3.40815 7.18116 3.07777C7.16072 2.64829 7.27314 2.24083 7.46731 1.91046C7.84543 1.22769 8.53015 0.787192 9.27617 0.765167H10.7171C11.4734 0.765167 12.1581 1.22769 12.5362 1.91046C12.7202 2.24083 12.8428 2.64829 12.8121 3.07777C12.7917 3.40815 12.8837 3.73852 13.0472 4.04687C13.5684 4.98292 14.7232 5.33532 15.6225 4.80672C16.6343 4.168 17.9117 4.55344 18.4942 5.64367L19.1789 6.94313C19.7717 8.03336 19.4447 9.43194 18.4227 10.0596C17.554 10.6213 17.2474 11.8657 17.7686 12.8128C17.9322 13.1101 18.1161 13.3634 18.4023 13.5175ZM7.10962 11.7886C7.10962 13.5176 8.40751 14.8941 10.012 14.8941C11.6165 14.8941 12.8837 13.5176 12.8837 11.7886C12.8837 10.0597 11.6165 8.67209 10.012 8.67209C8.40751 8.67209 7.10962 10.0597 7.10962 11.7886Z",
      name: "Settings",
    },
  ]

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const handleHamburgerClose = (e) => {
    e.target.closest('.hamburger-menu-container').style.left = '-300px';
    setIsShown();
  };

 useEffect(() => {
  if (isShown) {
    document.querySelector('.hamburger-menu-container').style.left = '0';
  }
 }, [isShown]);

  return (
    <section className="hamburger-menu-container">
      {/* <img src={LogoAndCompany} alt="Base" className="logo-and-company" /> */}
      <svg width="111" height="42" viewBox="0 0 111 42" fill="none" xmlns="http://www.w3.org/2000/svg" className='logo-and-company' >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M41.9998 21.0966L42 21C42 9.40202 32.598 0 21 0C10.1757 0 1.26409 8.18954 0.123364 18.7105L11.79 24.4142C12.3617 23.6184 13.2953 23.1 14.35 23.1C15.2427 23.1 16.0487 23.4714 16.6219 24.068L25.9002 16.4134C25.9198 14.6906 27.3225 13.3 29.05 13.3C30.6572 13.3 31.9833 14.5037 32.1759 16.0587L41.9998 21.0966ZM17.4857 25.9482L26.5994 18.4294C27.1769 19.1434 28.0601 19.6 29.05 19.6C30.1912 19.6 31.1907 18.9931 31.7433 18.0845L41.8775 23.2815C40.7404 33.8063 31.8271 42 21 42C9.40202 42 0 32.598 0 21C0 20.9588 0.000118391 20.9177 0.000354851 20.8766L11.2016 26.3528C11.2559 28.0449 12.6447 29.4 14.35 29.4C16.0897 29.4 17.5 27.9897 17.5 26.25C17.5 26.1482 17.4952 26.0475 17.4857 25.9482Z" fill="#605BFF" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M41.9998 21.0966L42 21C42 9.40202 32.598 0 21 0C10.1757 0 1.26409 8.18954 0.123364 18.7105L11.79 24.4142C12.3617 23.6184 13.2953 23.1 14.35 23.1C15.2427 23.1 16.0487 23.4714 16.6219 24.068L25.9002 16.4134C25.9198 14.6906 27.3225 13.3 29.05 13.3C30.6572 13.3 31.9833 14.5037 32.1759 16.0587L41.9998 21.0966ZM17.4857 25.9482L26.5994 18.4294C27.1769 19.1434 28.0601 19.6 29.05 19.6C30.1912 19.6 31.1907 18.9931 31.7433 18.0845L41.8775 23.2815C40.7404 33.8063 31.8271 42 21 42C9.40202 42 0 32.598 0 21C0 20.9588 0.000118391 20.9177 0.000354851 20.8766L11.2016 26.3528C11.2559 28.0449 12.6447 29.4 14.35 29.4C16.0897 29.4 17.5 27.9897 17.5 26.25C17.5 26.1482 17.4952 26.0475 17.4857 25.9482Z" fill="#605BFF" />
        <path d="M68.928 20.288C69.904 20.56 70.656 21.048 71.184 21.752C71.728 22.456 72 23.336 72 24.392C72 25.848 71.496 26.984 70.488 27.8C69.496 28.6 68.104 29 66.312 29H60.192C59.808 29 59.504 28.896 59.28 28.688C59.072 28.464 58.968 28.168 58.968 27.8V13.28C58.968 12.912 59.072 12.624 59.28 12.416C59.504 12.192 59.808 12.08 60.192 12.08H66.048C67.792 12.08 69.152 12.472 70.128 13.256C71.12 14.024 71.616 15.104 71.616 16.496C71.616 17.392 71.376 18.168 70.896 18.824C70.432 19.48 69.776 19.968 68.928 20.288ZM61.392 19.4H65.664C68.032 19.4 69.216 18.504 69.216 16.712C69.216 15.816 68.92 15.152 68.328 14.72C67.752 14.288 66.864 14.072 65.664 14.072H61.392V19.4ZM66.048 27.008C67.28 27.008 68.184 26.784 68.76 26.336C69.336 25.888 69.624 25.192 69.624 24.248C69.624 23.288 69.328 22.576 68.736 22.112C68.16 21.632 67.264 21.392 66.048 21.392H61.392V27.008H66.048ZM79.8656 17C81.4176 17 82.5696 17.392 83.3216 18.176C84.0896 18.96 84.4736 20.152 84.4736 21.752V27.968C84.4736 28.336 84.3696 28.624 84.1616 28.832C83.9536 29.024 83.6656 29.12 83.2976 29.12C82.9456 29.12 82.6656 29.016 82.4576 28.808C82.2496 28.6 82.1456 28.32 82.1456 27.968V27.08C81.8416 27.752 81.3856 28.272 80.7776 28.64C80.1856 28.992 79.4896 29.168 78.6896 29.168C77.9216 29.168 77.2176 29.016 76.5776 28.712C75.9536 28.392 75.4576 27.96 75.0896 27.416C74.7216 26.872 74.5376 26.256 74.5376 25.568C74.5216 24.704 74.7376 24.032 75.1856 23.552C75.6336 23.056 76.3616 22.704 77.3696 22.496C78.3776 22.272 79.7776 22.16 81.5696 22.16H82.1216V21.464C82.1216 20.568 81.9376 19.92 81.5696 19.52C81.2016 19.12 80.6096 18.92 79.7936 18.92C79.2336 18.92 78.7056 18.992 78.2096 19.136C77.7136 19.28 77.1696 19.488 76.5776 19.76C76.1456 20 75.8416 20.12 75.6656 20.12C75.4256 20.12 75.2256 20.032 75.0656 19.856C74.9216 19.68 74.8496 19.456 74.8496 19.184C74.8496 18.944 74.9136 18.736 75.0416 18.56C75.1856 18.368 75.4096 18.184 75.7136 18.008C76.2736 17.704 76.9296 17.464 77.6816 17.288C78.4336 17.096 79.1616 17 79.8656 17ZM79.1216 27.368C80.0016 27.368 80.7216 27.072 81.2816 26.48C81.8416 25.872 82.1216 25.096 82.1216 24.152V23.528H81.6896C80.4416 23.528 79.4816 23.584 78.8096 23.696C78.1376 23.808 77.6576 24 77.3696 24.272C77.0816 24.528 76.9376 24.904 76.9376 25.4C76.9376 25.976 77.1456 26.448 77.5616 26.816C77.9776 27.184 78.4976 27.368 79.1216 27.368ZM91.8694 29.168C90.2374 29.168 88.9014 28.832 87.8614 28.16C87.5734 27.984 87.3654 27.8 87.2374 27.608C87.1254 27.416 87.0694 27.2 87.0694 26.96C87.0694 26.704 87.1414 26.488 87.2854 26.312C87.4294 26.136 87.6134 26.048 87.8374 26.048C88.0454 26.048 88.3734 26.176 88.8214 26.432C89.3014 26.688 89.7654 26.896 90.2134 27.056C90.6774 27.216 91.2534 27.296 91.9414 27.296C92.7094 27.296 93.3094 27.16 93.7414 26.888C94.1734 26.616 94.3894 26.232 94.3894 25.736C94.3894 25.416 94.3014 25.16 94.1254 24.968C93.9654 24.776 93.6774 24.608 93.2614 24.464C92.8454 24.304 92.2294 24.136 91.4134 23.96C90.0054 23.656 88.9894 23.248 88.3654 22.736C87.7574 22.208 87.4534 21.496 87.4534 20.6C87.4534 19.912 87.6534 19.296 88.0534 18.752C88.4534 18.192 89.0054 17.76 89.7094 17.456C90.4134 17.152 91.2134 17 92.1094 17C92.7494 17 93.3734 17.088 93.9814 17.264C94.5894 17.424 95.1254 17.664 95.5894 17.984C96.1174 18.336 96.3814 18.744 96.3814 19.208C96.3814 19.464 96.3014 19.68 96.1414 19.856C95.9974 20.032 95.8214 20.12 95.6134 20.12C95.4694 20.12 95.3254 20.088 95.1814 20.024C95.0374 19.96 94.8454 19.856 94.6054 19.712C94.1734 19.456 93.7654 19.256 93.3814 19.112C93.0134 18.968 92.5494 18.896 91.9894 18.896C91.3174 18.896 90.7734 19.04 90.3574 19.328C89.9574 19.616 89.7574 20.008 89.7574 20.504C89.7574 20.952 89.9414 21.304 90.3094 21.56C90.6934 21.8 91.4054 22.032 92.4454 22.256C93.5174 22.48 94.3574 22.736 94.9654 23.024C95.5734 23.312 96.0054 23.672 96.2614 24.104C96.5334 24.52 96.6694 25.056 96.6694 25.712C96.6694 26.752 96.2294 27.592 95.3494 28.232C94.4854 28.856 93.3254 29.168 91.8694 29.168ZM108.536 26.048C108.76 26.048 108.944 26.136 109.088 26.312C109.232 26.488 109.304 26.712 109.304 26.984C109.304 27.448 109.016 27.84 108.44 28.16C107.88 28.48 107.264 28.728 106.592 28.904C105.936 29.08 105.304 29.168 104.696 29.168C102.84 29.168 101.376 28.632 100.304 27.56C99.2315 26.472 98.6955 24.992 98.6955 23.12C98.6955 21.92 98.9275 20.856 99.3915 19.928C99.8715 19 100.536 18.28 101.384 17.768C102.248 17.256 103.224 17 104.312 17C105.88 17 107.12 17.504 108.032 18.512C108.944 19.52 109.4 20.88 109.4 22.592C109.4 23.232 109.112 23.552 108.536 23.552H101.12C101.28 26.032 102.472 27.272 104.696 27.272C105.288 27.272 105.8 27.192 106.232 27.032C106.664 26.872 107.12 26.664 107.6 26.408C107.648 26.376 107.776 26.312 107.984 26.216C108.208 26.104 108.392 26.048 108.536 26.048ZM104.36 18.776C103.432 18.776 102.688 19.072 102.128 19.664C101.568 20.256 101.232 21.088 101.12 22.16H107.312C107.264 21.072 106.984 20.24 106.472 19.664C105.976 19.072 105.272 18.776 104.36 18.776Z" fill="#030229" />
      </svg>
      <div className="tabs-container">
        {tabs.map((tab, index) => (
          <Tab key={index} index={index} path={tab.path} isSelected={index===selectedTab} name={tab.name} handleTabClick={handleTabClick} />
        ))}
      </div>
      <img src={CrossIcon} alt="close" className='close-icon' onClick={(e) => handleHamburgerClose(e)} />
    </section>
  )
}

export default HamburgerMenu