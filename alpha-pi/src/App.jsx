import './App.css'
import Application from './components/biz-owners/Application.jsx'
import HomePage from './components/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BusinessProfiles from './components/investors/BusinessProfiles'
import Dashboard from './components/biz-owners/Dashboard'
import News from './components/News.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import BusinessProfile from './components/investors/BusinessProfile.jsx'
import allProfiles from './data/BusinessProfilesData.json'
import Login from './components/Login.jsx'
import SuccessfulMessage from './components/SuccessfulMessage.jsx'
import PossibleLocations from './components/biz-owners/PossibleLocations.jsx'
import SearchMentors from './components/biz-owners/SearchMentors.jsx'
import MyContacts from './components/biz-owners/MyContacts.jsx'
import BizGuides from './components/biz-owners/BizGuides.jsx'
import AddLocation from './components/biz-owners/AddLocation.jsx'
import NotFound from './components/NotFound.jsx'
import AddContact from './components/biz-owners/AddContact.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/application" element={<Application />} />
          <Route path="/business-profiles" element={<BusinessProfiles />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/business-profiles/:name" element={<BusinessProfile allProfiles={allProfiles}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="contact/successful" element={<SuccessfulMessage />} />
          <Route path="/dashboard/:username" element={<Dashboard />} />

          <Route path="/dashboard/possible-locations/:username" element={<PossibleLocations />} />
          <Route path="/dashboard/search-for-mentors/:username" element={<SearchMentors />} />
          <Route path="/dashboard/my-contacts/:username" element={<MyContacts />} />
          <Route path="/dashboard/business-guidelines/:username" element={<BizGuides />} />
          
          <Route path="/dashboard/possible-locations/:username/add-location" element={<AddLocation />} />
          <Route path="/dashboard/my-contacts/:username/add-contact" element={<AddContact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
