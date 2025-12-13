import { Box, Typography, Divider, Avatar, Paper, Stack } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import StarIcon from "@mui/icons-material/Star";
import PaperLikeButton from "../components/PaperLikeButton";
import { RuleTypes } from "./components/MainRules";
import { AmenitieTypes } from "./components/Amenities";
import KeyIcon from "@mui/icons-material/Key";
import Feedback from "./components/Feedback";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { EventBusyOutlined, ShieldSharp } from "@mui/icons-material";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section5 from "./components/Section5";
import ShowMoreButton from "./components/ShowMoreButton";
import Section3 from "./components/Section3";

type userData = {
  icon?: string;
  name: string;
  time: string;
  rate: number;
  date: string;
  amount: string;
  message: string;
  id: number;
};

type OwnerType = {
  ownerName: string;
  ownerAmount: number;
  ownerIcon: null | string;
  allFeedbacks: number;
  averageRate: number;
  workingTimeAmount: number;
  profession: string;
  bestHobbie: string;
  shortDescription: string;
  isSuper: boolean;
  answerSpeedPercentage: number;
  answerInfo: string;
};

type PageDataType = {
  apartmentTitle: string;
  apartmentLocation: string;
  apartmentDescription: string;
  details: string[];
  rate: number;
  feedbackAmount: number;
  guestChoise: boolean;
  owner: OwnerType;
  ruleTypes: RuleTypes[];
  additionalSubSectionText?: string;
  amenities: AmenitieTypes[];
  disableDates?: string[];
  price: number;
  rating: {
    clean: number;
    accuracy: number;
    arriving: number;
    communication: number;
    location: number;
    quality: number;
    stats: {
      5: number;
      4: number;
      3: number;
      2: number;
      1: number;
    };
  };
  feedbacks: userData[];
  importantInfo: {
    1: {
      title: string;
      description: string[] | string;
    };
    2: {
      title: string;
      description: string[] | string;
    };
    3: {
      title: string;
      description: string[] | string;
    };
  };
  position: [number, number];
  locationDescription: string;
};

const pageData: PageDataType = {
  apartmentTitle: "Апартаменти Scandi Group №18",
  apartmentLocation: "Варшава, Польща",
  apartmentDescription: "Варшава, Польща: Помешкання для оренди цілком",
  details: ["2 гостя", "1 спальня", "1 ліжко", "1 ванна кімната"],
  rate: 4.98,
  feedbackAmount: 30,
  guestChoise: true,
  owner: {
    ownerName: "Arnold",
    ownerAmount: 3,
    ownerIcon: null,
    allFeedbacks: 9856,
    averageRate: 4.56,
    workingTimeAmount: 14,
    profession: "Оренда помешкань KyivApts",
    bestHobbie: "Подорожі",
    shortDescription:
      "Привіт! Мене звати Арнольд, і я керую провідним агентством з короткострокової та довгострокової оренди – з дивовижним персоналом професіоналів, що базуються в",
    isSuper: true,
    answerSpeedPercentage: 100,
    answerInfo: "Відповідає протягом години",
  },
  ruleTypes: ["sharedBathroom", "commonRoom", "multiplePeople"],
  additionalSubSectionText:
    "Капсульна кімната - це приватний вільний простір, який дозволить вам відпочити й почуватися комфортно. У номері є ортопедичний матрац, кондиціонер, Wi-Fi, шафка для речей. Ванна кімната розташована на підлозі.",
  amenities: [
    "bath",
    "hotWater",
    "conditioner",
    "dishes",
    "hangers",
    "heater",
    "heating",
    "independentArrival",
    "iron",
    "kitchen",
    "longLive",
    "luggage",
    "parking",
    "refridgerator",
    "tv",
    "wifi",
  ],
  disableDates: ["2025/12/10", "2025/12/15", "2025/12/17"],
  price: 1234,
  rating: {
    clean: 4.7,
    accuracy: 4.5,
    arriving: 4.3,
    communication: 4.2,
    location: 4.8,
    quality: 4.9,
    stats: {
      5: 87,
      4: 5,
      3: 3,
      2: 2,
      1: 2,
    },
  },
  feedbacks: [
    {
      id: 1,
      name: "Olivia",
      time: "4 роки на Airbnb",
      rate: 5,
      date: "1 день тому",
      amount: "2 ночі",
      message:
        "Чудове місце! Дуже чисто, затишно та сучасно. Локація ідеальна — усе поруч. Господар швидко відповідав і дав чудові поради щодо району.",
    },
    {
      id: 2,
      name: "Jonathan",
      time: "6 років на Airbnb",
      rate: 4,
      date: "5 днів тому",
      amount: "тиждень",
      message:
        "Квартира повністю відповідає опису. Тихий будинок, комфортне ліжко, швидкий Wi-Fi. Лише хотілося б трохи більше кухонного приладдя.",
    },
    {
      id: 3,
      name: "Maria",
      time: "1 рік на Airbnb",
      rate: 5,
      date: "2 тижні тому",
      amount: "3 ночі",
      message:
        "Перебування було чудовим! Дуже просторна квартира з приємним ароматом і стильним інтер’єром. Особливо сподобався вигляд із вікна.",
    },
    {
      id: 4,
      name: "Dmitro",
      time: "3 роки на Airbnb",
      rate: 4,
      date: "3 тижні тому",
      amount: "вихідні",
      message:
        "Господар уважний та ввічливий. Квартира чиста, хоч і не дуже велика. Розташування — супер, поруч зупинка та магазини.",
    },
    {
      id: 5,
      name: "Alicia",
      time: "9 років на Airbnb",
      rate: 5,
      date: "1 місяць тому",
      amount: "5 ночей",
      message:
        "Фантастичне перебування. Дуже тихо вночі, що рідкість для центру міста. Ліжко зручне, інтер’єр затишний. Обов’язково повернуся!",
    },
    {
      id: 6,
      name: "Robert",
      time: "7 років на Airbnb",
      rate: 3,
      date: "1 місяць тому",
      amount: "кілька ночей",
      message:
        "Квартира нормальна, але не ідеальна. Трохи холодно ввечері, хоча господар швидко приніс обігрівач. Загалом непоганий варіант за таку ціну.",
    },
    {
      id: 7,
      name: "Sofia",
      time: "2 роки на Airbnb",
      rate: 5,
      date: "півтора місяці тому",
      amount: "тиждень",
      message:
        "Усе сподобалося! Дуже чисто, пральна машина працює прекрасно, кухня повністю укомплектована. Ідеально для роботи та відпочинку.",
    },
    {
      id: 8,
      name: "Leon",
      time: "5 років на Airbnb",
      rate: 4,
      date: "2 місяці тому",
      amount: "4 ночі",
      message:
        "Апартаменти затишні, є все необхідне. Єдине — трохи шумно ввечері через сусідній бар, але в берушах спалося добре.",
    },
    {
      id: 9,
      name: "Emily",
      time: "8 років на Airbnb",
      rate: 5,
      date: "2 місяці тому",
      amount: "вихідні",
      message:
        "Все ідеально. Господар навіть залишив невеликий подарунок на кухні — дуже приємний жест. Чистота на висоті.",
    },
    {
      id: 10,
      name: "Oleh",
      time: "10 років на Airbnb",
      rate: 4,
      date: "3 місяці тому",
      amount: "1 ніч",
      message:
        "Добре місце для короткого перебування. Зручне ліжко, швидке заселення. Трішки тісна ванна кімната, але чисто.",
    },
  ],
  importantInfo: {
    1: {
      title: "Правила скасування бронювання",
      description:
        "Додайте дати подорожі, щоб дізнатися подробиці скасування цієї подорожі.",
    },
    2: {
      title: "Правила дому",
      description: [
        "Прибуття: після 14:00",
        "Виїзд: до 11:00",
        "Максимальна кількість гостей: 2",
      ],
    },
    3: {
      title: "Правила безпеки в помешканні",
      description: [
        "Немає датчика диму",
        "Детектор чадного газу не потрібен",
        "Необхідно підніматись сходами",
      ],
    },
  },
  position: [51.505, -0.09],
  locationDescription:
    "Ще один із наших улюблених районів - регіон навколо Золотих воріт. Це найкращий старий Київ, який пропонує велике поєднання модних ресторанів, кафе та інших розважальних закладів. Розташований в основному в самому центрі історичного Києва, цей район забезпечить вам легкий пішохідний доступ до всіх історичних пам 'яток Києва. Ви також можете дістатися до Незалежної площі та головної вулиці Крещатика за 5",
};

export default function Rooms() {
  return (
    <>
      <Box>
        <Header withNavigation={false} />
        <Stack
          alignItems={"center"}
          px={5}
          sx={{
            backgroundColor: "background.default",
            pt: 5,
          }}
        >
          <Stack
            sx={{
              backgroundColor: "background.default",
              maxWidth: "1200px",
            }}
            spacing={2}
          >
            <Section1 apartmentTitle={pageData.apartmentTitle} />
            <Section2
              apartmentDescription={pageData.apartmentDescription}
              price={pageData.price}
              details={pageData.details}
              rate={pageData.rate}
              feedbackAmount={pageData.feedbackAmount}
              ownerIcon={pageData.owner.ownerIcon}
              ownerName={pageData.owner.ownerName}
              ownerAmount={pageData.owner.ownerAmount}
              disableDates={pageData.disableDates}
              ruleTypes={pageData.ruleTypes}
              apartmentLocation={pageData.apartmentLocation}
              amenities={pageData.amenities}
              additionalSubSectionText={pageData.additionalSubSectionText}
            />

            <Divider />
            {/*******************section3*********************/}
            <Section3
              rate={pageData.rate}
              feedbackAmount={pageData.feedbackAmount}
              rating={pageData.rating}
            />
            <Divider />
            {/*******************section4*********************/}
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack spacing={4}>
                {pageData.feedbacks.slice(0, 3).map((feedback) => (
                  <Feedback
                    key={feedback.id}
                    name={feedback.name}
                    message={feedback.message}
                    rate={feedback.rate}
                    amount={feedback.amount}
                    date={feedback.date}
                    desc={feedback.time}
                  />
                ))}
              </Stack>
              <Stack spacing={4}>
                {pageData.feedbacks.slice(3, 6).map((feedback) => (
                  <Feedback
                    key={feedback.id}
                    name={feedback.name}
                    message={feedback.message}
                    rate={feedback.rate}
                    amount={feedback.amount}
                    date={feedback.date}
                    desc={feedback.time}
                  />
                ))}
              </Stack>
            </Stack>
            <Box display={"flex"} gap={3} alignItems={"center"}>
              <PaperLikeButton
                sx={{
                  width: "120px",
                  display: "inline-flex",
                }}
              >
                Показати всі {pageData.feedbacks.length} відгуків
              </PaperLikeButton>
              <Typography
                component={"a"}
                fontWeight={600}
                fontSize={12}
                color="text.secondary"
                sx={{
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Для чого потрібні відгуки
              </Typography>
            </Box>
            <Divider />
            <Section5
              position={pageData.position}
              location={pageData.apartmentLocation}
              locationDescription={pageData.locationDescription}
            />
            <Divider />
            {/*******************section5*********************/}
            <Stack spacing={3}>
              <Typography color="text.primary" fontSize={24} fontWeight={700}>
                Познайомтеся з господарем
              </Typography>
              <Stack direction={"row"} gap={8} alignItems="flex-start">
                <Paper
                  sx={{
                    p: 2,
                    borderRadius: 5,
                    boxShadow: 3,
                    backgroundColor: "background.default",
                    display: "flex",
                    height: "auto",
                  }}
                >
                  <Stack
                    mx={10}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Avatar
                      sx={{
                        height: "100px",
                        width: "100px",
                      }}
                      src={
                        pageData.owner.ownerIcon ? pageData.owner.ownerIcon : ""
                      }
                    >
                      {pageData.owner.ownerName.slice(0, 2).toUpperCase()}
                    </Avatar>
                    <Typography
                      color="text.primary"
                      fontSize={26}
                      fontWeight={700}
                    >
                      {pageData.owner.ownerName}
                    </Typography>
                    {pageData.owner.isSuper && (
                      <Typography
                        display={"flex"}
                        alignItems={"center"}
                        color="text.secondary"
                        fontSize={14}
                      >
                        <WorkspacePremiumIcon fontSize="small" /> Супергосподар
                      </Typography>
                    )}
                  </Stack>
                  <Stack divider={<Divider />} spacing={1}>
                    <Stack>
                      <Typography
                        color="text.primary"
                        fontWeight={700}
                        fontSize={24}
                      >
                        {pageData.owner.allFeedbacks}
                      </Typography>
                      <Typography color="text.primary" fontSize={13}>
                        Відгуки
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        color="text.primary"
                        fontWeight={700}
                        fontSize={24}
                        display={"flex"}
                        alignItems={"center"}
                      >
                        {pageData.owner.averageRate} <StarIcon />
                      </Typography>
                      <Typography color="text.primary" fontSize={13}>
                        Рейтинг
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        color="text.primary"
                        fontWeight={700}
                        fontSize={24}
                      >
                        {pageData.owner.workingTimeAmount}
                      </Typography>
                      <Typography color="text.primary" fontSize={13}>
                        років прийому гостей
                      </Typography>
                    </Stack>
                  </Stack>
                </Paper>
                <Stack spacing={3} maxWidth={"60%"}>
                  <Stack spacing={2}>
                    <Typography
                      color="text.primary"
                      display={"flex"}
                      gap={2}
                      alignItems={"center"}
                    >
                      <WorkOutlineIcon /> Моя професія:{" "}
                      {pageData.owner.profession}
                    </Typography>
                    <Typography
                      color="text.primary"
                      display={"flex"}
                      gap={2}
                      alignItems={"center"}
                    >
                      <FavoriteBorderIcon /> Найбільше захоплення:{" "}
                      {pageData.owner.bestHobbie}
                    </Typography>
                  </Stack>
                  <Stack spacing={2}>
                    <Typography color="text.primary">
                      {pageData.owner.shortDescription}
                    </Typography>
                    <ShowMoreButton href="" arrowed />
                  </Stack>
                  {pageData.owner.isSuper && (
                    <Stack spacing={1}>
                      <Typography color="text.primary" fontWeight={1000}>
                        {pageData.owner.ownerName} - супергосподар
                      </Typography>
                      <Typography color="text.primary">
                        Супергосподарі – це досвідчені господарі з високим
                        рейтингом, які роблять все можливе для комфорту своїх
                        гостей.
                      </Typography>
                    </Stack>
                  )}
                  <Box>
                    <PaperLikeButton>Написати господарю</PaperLikeButton>
                  </Box>
                  <Stack>
                    <Typography color="text.primary">
                      Швидкість відповіді:{" "}
                      {pageData.owner.answerSpeedPercentage}%
                    </Typography>
                    <Typography color="text.primary">
                      {pageData.owner.answerInfo}
                    </Typography>
                  </Stack>
                  <Typography
                    display={"flex"}
                    gap={2}
                    alignItems={"center"}
                    color="text.secondary"
                    fontSize={13}
                  >
                    <ShieldSharp color="primary" />
                    Щоб захистити свої платежі, для надсилання грошей та
                    спілкування з господарями користуйтеся лише платформою
                    Airbnb.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Divider />
            {/*******************section6*********************/}
            <Stack spacing={3}>
              <Typography color="text.primary" fontSize={24} fontWeight={700}>
                Важлива інформація
              </Typography>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Stack width={"33%"} color={"text.primary"}>
                  <EventBusyOutlined
                    color="inherit"
                    fontSize="large"
                    sx={{ mb: 3 }}
                  />
                  <Typography color="text.primary" fontWeight={600}>
                    {pageData.importantInfo[1].title}
                  </Typography>
                  <Typography color="text.secondary" maxWidth={"70%"}>
                    {pageData.importantInfo[1].description}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Додати дати
                  </Typography>
                </Stack>
                <Stack width={"33%"} color={"text.primary"}>
                  <KeyIcon color="inherit" fontSize="large" sx={{ mb: 3 }} />
                  <Typography color="text.primary" fontWeight={600}>
                    {pageData.importantInfo[2].title}
                  </Typography>
                  {Array.isArray(pageData.importantInfo[2].description) ? (
                    pageData.importantInfo[2].description.map((desc) => (
                      <Typography
                        key={desc}
                        color="text.secondary"
                        maxWidth={"70%"}
                      >
                        {desc}
                      </Typography>
                    ))
                  ) : (
                    <Typography color="text.secondary" maxWidth={"70%"}>
                      {pageData.importantInfo[2].description}
                    </Typography>
                  )}
                  <Typography
                    color="text.secondary"
                    sx={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Докладніше
                  </Typography>
                </Stack>
                <Stack width={"33%"} color={"text.primary"}>
                  <ShieldSharp
                    color="inherit"
                    fontSize="large"
                    sx={{ mb: 3 }}
                  />
                  <Typography color="text.primary" fontWeight={600}>
                    {pageData.importantInfo[3].title}
                  </Typography>
                  {Array.isArray(pageData.importantInfo[3].description) ? (
                    pageData.importantInfo[3].description.map((desc) => (
                      <Typography
                        key={desc}
                        color="text.secondary"
                        maxWidth={"70%"}
                      >
                        {desc}
                      </Typography>
                    ))
                  ) : (
                    <Typography color="text.secondary" maxWidth={"70%"}>
                      {pageData.importantInfo[3].description}
                    </Typography>
                  )}
                  <Typography
                    color="text.secondary"
                    sx={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Докладніше
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Footer />
    </>
  );
}
