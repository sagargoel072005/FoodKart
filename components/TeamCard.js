import React from "react";
import { motion } from "framer-motion";

const TeamCard = ({ member }) => {
  return (
    <motion.div
      className="team-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1, rotate: 3 }}
    >
      <img src={member.image} alt={member.name} loading="lazy" />
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </motion.div>
  );
};

export default TeamCard;