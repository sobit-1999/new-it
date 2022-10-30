import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card, Divider, Drawer, Grid, Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { CallOutlined, Instagram, Telegram } from "@mui/icons-material";
import { padding } from "@mui/system";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 18,
    maxWidth: 'none',
    padding: 0
  },
}));


export default function Header() {
  console.log(tooltipClasses);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ padding: "20px 10%", background: "#fff", color: "black" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={3} textAlign="left">
            logo
          </Grid>
          <Grid
            item
            xs={7}
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
            }}
          >
            {Category.map((item, i) => {
              return (
                <LightTooltip
                key={i}
                  title={
                    <Card sx={{display: 'flex',
                    flexWrap: "wrap",
                    
                    
                    }}>
                      {item.catalog.map((item2, i2) => {
                        return (
                          <Box key={i2}
                          sx={{margin: "20px 50px"}}
                          >
                            <Divider sx={{mb: 1}}/>
                            <Typography 
                            component="div"
                            variant="h6"
                            sx={{mb: 4}}
                            >{item2.catalogName}</Typography>
                            {item2.catalogLink.map((item3, i3) => {return(
                                <Typography 
                                component="div"
                                variant="p"
                                key={i3}
                            sx={{my: 1}}
                                >
                                    <Link to={item3.link}>
                            {item3.name}
                                    </Link>
                                </Typography>
                            )})}
                          </Box>
                        );
                      })}
                    </Card>
                  }
                >
                  <Typography
                    sx={{ mx: 2 }}
                    key={i}
                    component="div"
                    variant="h5"
                  >
                    {item.categoryName}
                  </Typography>
                </LightTooltip>
              );
            })}
          </Grid>
          <Grid item xs={2} textAlign="right">
            <LightTooltip title={
                <Card 
                sx={{paddingX: 3, boxShadow: 4}}
                >
                    {contact.map((item, i) => {return(
                        <Box 
                        key={i}
                        sx={{display: "flex",
                    my: 2
                    }}
                        >
                        {item.icon}
                        <Typography
                        component="div"
                        variant="p"
                        sx={{ml: 3}}
                        >
                        {item.name}
                        </Typography>
                        </Box>
                    )})}
                </Card>
            }>
              <Typography component="div" variant="h6">
                Contact
              </Typography>
            </LightTooltip>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}
const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;
const contact = [
    {name: "Telefon", icon: <CallOutlined sx={{color: "rgb(0, 255, 255)"}}/>, link: "telefon"},
    {name: "Telegram", icon: <Telegram sx={{color: "rgb(0, 255, 255)"}} />, link: "telegram"},
    {name: "Instagram", icon: <Instagram sx={{color: "rgb(0, 255, 255)"}} />, link: "instagram"},
]
const Category = [
  {
    categoryName: "Web-site quruvchi",
    catalog: [
      {
        catalogName: "Dizayni",
        catalogLink: [
          { name: `Umumiy ko'rinish`, link: "umumiy-korinish" },
          { name: `Matin va shiriftlar`, link: "matin-shiriftlar" },
          { name: `Rasim`, link: "rasim" },
          { name: `Veb - sayt vidio va audiolar`, link: "vidio-audio" },
          { name: `Mobil muharrir`, link: "mobil-muharrir" },
        ],
      },
    ],
  },
  {
    categoryName: "Mahsulotlar",
    catalog: [
      {
        catalogName: "Veb-saytlar",
        catalogLink: [
          { name: `Dizayn shablonlar`, link: "dizayn-shablonlar" },
          { name: `Blog yurutish`, link: "blog-yurutish" },
          { name: `Veb-sayt tahlili`, link: "veb-sayt-tahlili" },
          { name: `Mutahasisni yo'llash`, link: "mutahasisni-yo'llash" },
        ],
      },
      {
        catalogName: `Online do'kon`,
        catalogLink: [
          { name: `Mahsulotni sotish`, link: "mahsulotni-sotish" },
          {
            name: `onlayn d'kon shablonlari`,
            link: "online-do'kon-shablonlari",
          },
          {
            name: `Hisob-kitob, yetkazib berish+olib ketish`,
            link: "Hisob-kitob-yetkazib-berish+olib-ketish",
          },
        ],
      },
      {
        catalogName: "Restaranlar",
        catalogLink: [
          {
            name: `Restaran veb-saytni yaratamiz`,
            link: "Restaran veb-saytni yaratamiz",
          },
          { name: `Restaran shablonlar`, link: "restaran-shablonlar" },
          {
            name: `restaran marketing vositalari`,
            link: "restaran-marketing-vositalari",
          },
        ],
      },
      {
        catalogName: "Ko'p tilli",
        catalogLink: [
          {
            name: `Ko'p tilli tarkibni moslashtiramiz`,
            link: "ko'p-tilli-tarkibni-moslashtiramiz",
          },
          { name: `Kop tilli shablonlar`, link: "kop-tilli-shablonlar" },
          { name: `Ko'p tilli navigatsiya`, link: "Ko'-tilli-navigatsiya" },
        ],
      },
    ],
  },
];
