/* eslint-disable */
import { Box, Typography, Grid } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import { motion } from "framer-motion";

const features = [
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />,
    title: "Licensed & Insured",
    desc: "We are fully certified, insured, and trusted by hundreds of homeowners. Your property is protected and your satisfaction is guaranteed.",
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
    title: "Lightning-Fast Response",
    desc: "Get a quote in minutes and service within days. We know your time is valuable, so we act fast—without sacrificing quality.",
  },
  {
    icon: <PlaceIcon sx={{ fontSize: 40 }} />,
    title: "Local Irvine Experts",
    desc: "We live and work in Irvine. Our team knows the unique needs of local homes and is committed to our community.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring" },
  }),
};

const AboutSection = () => (
  <motion.section
    id="about"
    className="py-16 bg-[#fff]"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <Box maxWidth="md" mx="auto" px={2}>
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        sx={{ color: "#EAAA00", mb: 2 }}
      >
        Why Irvine Chooses Us
      </Typography>
      <Typography
        align="center"
        sx={{ color: "#222", fontSize: 22, mb: 6, fontWeight: 500 }}
      >
        <span className="font-bold text-[#EAAA00]">
          Trust. Speed. Local Expertise.
        </span>{" "}
        <br />
        We don't just fix roofs - we protect your home, your family, and your
        peace of mind. Discover why more Irvine homeowners choose us for their
        roofing needs.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((f, i) => (
          <Grid item xs={12} md={4} key={i}>
            <motion.div
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="h-full"
            >
              <div className="flex flex-col items-center text-center bg-[#EAAA00] rounded-2xl shadow-lg p-8 h-full">
                <div
                  className="bg-white rounded-full p-3 mb-3 flex items-center justify-center"
                  style={{ width: 64, height: 64 }}
                >
                  {f.icon}
                </div>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "#222", mb: 1 }}
                >
                  {f.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#222" }}>
                  {f.desc}
                </Typography>
              </div>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      <Typography
        align="center"
        sx={{ color: "#222", fontSize: 20, mt: 8, fontWeight: 600 }}
      >
        <span className="text-[#EAAA00] font-bold">
          Ready for a roof you can trust?
        </span>{" "}
        <br />
        <span className="font-bold">
          Get your free, no-obligation estimate today.
        </span>
      </Typography>
    </Box>
  </motion.section>
);

export default AboutSection;
