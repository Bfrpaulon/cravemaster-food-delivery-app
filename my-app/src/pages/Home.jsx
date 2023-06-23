import React from "react";
import AppNavbar from '../components/AppBar';
import SearchBar from '../components/SearchBar';
import HeroSection from '../components/HeroSection';
import CardSection from '../components/CardSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
        <AppNavbar />
        <SearchBar />
        <HeroSection/>
        <CardSection/>
        <Footer/>
    </>
  )
}

