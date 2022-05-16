import React, { useEffect } from 'react'
import { Form, Tab, Tabs } from 'react-bootstrap'
import {createGlobalStyle }from 'styled-components'
import Howitworks from '../components/Howitworks'


const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgba(36, 55, 115, 0.1);
  }

  @media (min-width: 992px){
      body{
          background-color: #E7F4FB;
      }
  }
`



const sell_car = () => {


  return (
      <body>
          <GlobalStyle />
      <div className='sell_car_container'>
    <div className='sell_car_header'>
        <div className='sell_car_title'>
            <h1>Sell Your Car Here</h1>
            <p>Get instant cash offer and vehicle pickup on your schedule.</p>
        </div>
       
        <div className='tab-Div'>
        <Tabs id="uncontrolled-tab-example" className="sell_car_vehicle_info mb-3 ">
        <Tab eventKey="vin" title="VIN">
         <div className='vin-container'>
            <h2>Enter Your Vehicle Information</h2>

            <a href="#link">Where is my VIN?</a>

            <form className='vin-form' action='/vehicle_info'>
                <label htmlFor="vin">VIN</label>
                <input type="text" name="vin" placeholder='Ex:1GCCW8H7CR161832' />
                <button>Proceed</button>
            </form>
         </div>
        </Tab>
        <Tab eventKey="license-plate" title="License Plate">
        <div className='license-plate-container'>
            <h2>Enter Your Vehicle Information</h2>
            <form className='license-plate-form' action='/vehicle_info'>
                <label htmlFor="plate_number">Plate Number</label>
                <input type="text" name="plate_number" placeholder='Ex: KJA-012-AB' />
                <label htmlFor="registered_state">Registered State</label>
      
                <button>Proceed</button>
            </form>
         </div>
        </Tab>
        <Tab eventKey="make_model" title="Make / Model" >
        <div className='make_model-container'>
            <h2>Enter Your Vehicle Information</h2>
            <p>We recommend entering your VIN or Plate number. with that, 
                we can give you an instant cash offer in most case</p>
            <form className='make_model-form' action='/vehicle_info'>
                <label htmlFor="make">Make</label>
               {/* add more states if u want */}
                <Form.Select id="make_model_select" name='make'>
                <option></option>
                <option value="lexus">Lexus</option>
                <option value="toyota">Toyota</option>
                <option value="benz">Benz</option>
                <option value="acura">Acura</option>
                <option value="honda">Honda</option>
                <option value="ford">Ford</option>
                <option value="peugeot">Peugeot</option>
                <option value="landrover">Landrover</option>
                <option value="mazda">Mazda</option>
                </Form.Select>
                <label htmlFor="model">Model</label>
               {/* add more states if u want */}
                <Form.Select id="make_model_select" name='model'>
                {/* list of lexus car models, change if needed */}
                <option></option>
                <option value="lexus_is">Lexus IS</option>
                <option value="lexus_es">Lexus ES</option>
                <option value="lexus_gs">Lexus GS</option>
                <option value="lexus_gsf">Lexus GS F</option>
                <option value="lexus_ls">Lexus LS</option>
                <option value="lexus_ux">Lexus UX</option>
                <option value="lexus_nx">Lexus NX</option>
                <option value="lexus_rx">Lexus RX</option>
                <option value="lexus_gx">Lexus GX</option>
                <option value="lexus_lx">Lexus LX</option>
                <option value="lexus_rc">Lexus RC</option>
                <option value="lexus_rcf">Lexus RC F</option>
                <option value="lexus_lc">Lexus LC</option>
                {/* list of toyota car models, change if needed */}
                <option value="toyota_avalon">Toyota Avalon</option>
                <option value="toyota_camry">Toyota Camry</option>
                <option value="toyota_corolla">Toyota Corolla</option>
                <option value="toyota_prius">Toyota Prius</option>
                <option value="toyota_yaris">Toyota Yaris</option>
                <option value="toyota_86">Toyota 86</option>
                <option value="toyota_sienna">Toyota Sienna</option>
                <option value="toyota_chr">Toyota C-HR</option>
                <option value="toyota_rav4">Toyota RAV4</option>
                <option value="toyota_highlander">Toyota Highlander</option>
                <option value="toyota_4runner">Toyota 4Runner</option>
                <option value="toyota_tacoma">Toyota Tacoma</option>
                <option value="toyota_tundra">Toyota Tundra</option>
                {/* list of benz car models, change if needed */}
                <option value="mercedes-benz_gla">Mercedes-Benz GLA</option>
                <option value="mercedes-benz_Cclass">Mercedes-Benz C-Class</option>
                <option value="mercedes-benz_Eclass">Mercedes-Benz E-Class</option>
                <option value="mercedes-benz_glc">Mercedes-Benz GLC</option>
                <option value="mercedes-benz_Sclass">Mercedes-Benz S-Class</option>
                <option value="mercedes-benz_gls">Mercedes-Benz GLS</option>
                <option value="mercedes-benz_amgG63">Mercedes-Benz AMG G 63</option>
                <option value="mercedes-benz_amgGT">Mercedes-Benz AMG GT</option>
                <option value="mercedes-benz_gle">Mercedes-Benz GLE</option>
                <option value="mercedes-benz_aclass_limousine">Mercedes-Benz A-Class Limousine</option>
                <option value="mercedes-benz_vclass">Mercedes-Benz V-Class</option>
                <option value="mercedes-benz_maybach-sclass">Mercedes-Benz Maybach S-Class</option>
                <option value="mercedes-benz_gclass">Mercedes-Benz G-Class</option>
                <option value="mercedes-benz_amggle63S">Mercedes-Benz AMG GLE 63 S</option>
                <option value="mercedes-benz_eqc">Mercedes-Benz EQC</option>
                <option value="mercedes-benz_amggle53">Mercedes-Benz AMG GLE 53</option>
                <option value="mercedes-benz_amgc43">Mercedes-Benz AMG C 43</option>
                <option value="mercedes-benz_cls">Mercedes-Benz CLS</option>
                <option value="mercedes-benz_amga35">Mercedes-Benz AMG A 35</option>
                <option value="mercedes-benz_amga45S">Mercedes-Benz AMG A 45 S</option>
                <option value="mercedes-benz_amgc63">Mercedes-Benz AMG C 63</option>
                <option value="mercedes-benz_amge53">Mercedes-Benz AMG E 53</option>
                <option value="mercedes-benz_amge63">Mercedes-Benz AMG E 63</option>
                <option value="mercedes-benz_amggla35">Mercedes-Benz AMG GLA 35</option>
                <option value="mercedes-benz_amgglc43">Mercedes-Benz AMG GLC 43</option>
                <option value="mercedes-benz_amggt4door">Mercedes-Benz AMG GT 4-Door</option>
                <option value="mercedes-benz_glccoupe">Mercedes-Benz GLC Coupe</option>
                {/* list of acura car models, change if needed */}
                <option value="acura_mdx">Acura MDX</option>
                <option value="acura_rdx">Acura RDX</option>
                <option value="acura_tlx">Acura TLX</option>
                <option value="acura_ilx">Acura ILX</option>
                <option value="acura_rlx">Acura RLX</option>
                <option value="acura_nsx">Acura NSX</option>
                <option value="acura_integra_sedan">Acura Integra Sedan</option>
                <option value="acura_cl">Acura CL</option>
                <option value="acura_csx">Acura CSX</option>
                <option value="acura_el">Acura EL</option>
                <option value="acura_integra_coupe">Acura Integra Coupe</option>
                <option value="acura_legend">Acura Legend</option>
                <option value="acura_legend_coupe">Acura Legend Coupe</option>
                <option value="acura_rl">Acura RL</option>
                <option value="acura_rsx">Acura RSX</option>
                <option value="acura_rsxtypes">Acura RSX Type S</option>
                <option value="acura_slx">Acura SLX</option>
                <option value="acura_tl">Acura TL</option>
                <option value="acura_tsx">Acura TSX</option>
                <option value="acura_zdx">Acura ZDX</option>
                {/* list of honda car models, change if needed */}
                <option value="honda_fit">Honda Fit</option>
                <option value="honda_accord">Honda Accord</option>
                <option value="honda_civic_hybrid">Honda Civic Hybrid</option>
                <option value="honda_crv">Honda CR-V</option>
                <option value="honda_odyssey">Honda Odyssey</option>
                <option value="honda_element">Honda Element</option>
                <option value="honda_insight">Honda Insight</option>
                <option value="honda_crz">Honda CR-Z</option>
                <option value="honda_civic">Honda Civic</option>
                <option value="honda_accord_hybrid">Honda Accord Hybrid</option>
                <option value="honda_pilot">Honda Pilot</option>
                <option value="honda_s2000">Honda S2000</option>
                <option value="honda_civic_type_r">Honda Civic Type R</option>
                <option value="honda_fcx_clarity">Honda FCX Clarity</option>
                <option value="honda_ridgeline">Honda Ridgeline</option>
                <option value="honda_life">Honda Life</option>
                <option value="honda_passport">Honda Passport</option>
                <option value="honda_prelude">Honda Prelude</option>
                <option value="honda_stream">Honda Stream</option>
                <option value="honda_acty">Honda Acty</option>
                <option value="honda_nsx">Honda NSX</option>
                <option value="honda_frv">Honda FR-V</option>
                <option value="honda_legend">Honda Legend</option>
                <option value="honda_s800">Honda S800</option>
                <option value="honda_mobilio_spike">Honda Mobilio Spike</option>
                <option value="honda_ascot">Honda Ascot</option>
                <option value="honda_beat">Honda Beat</option>
                <option value="honda_city">Honda City</option>
                <option value="honda_inspire">Honda Inspire</option>
                <option value="honda_s500">Honda S500</option>
                <option value="honda_1300">Honda 1300</option>
                <option value="honda_mobilio">Honda Mobilio</option>
                <option value="honda_crossroad">Honda Crossroad</option>
                <option value="honda_domani">Honda Domani</option>
                <option value="honda_concerto">Honda Concerto</option>
                <option value="honda_l700">Honda L700</option>
                <option value="honda_freed">Honda Freed</option>
                <option value="honda_logo">Honda Logo</option>
                <option value="honda_n360">Honda N360</option>
                <option value="honda_t360">Honda T360</option>
                <option value="honda_thats">Honda That's</option>
                <option value="honda_airwave">Honda Airwave</option>
                <option value="honda_today">Honda Today</option>
                <option value="honda_stepwgn">Honda Stepwgn</option>
                <option value="honda_z600">Honda Z600</option>
                <option value="honda_zest">Honda Zest</option>
                <option value="honda_capa">Honda Capa</option>
                <option value="honda_quint">Honda Quint</option>
                <option value="honda_hrv">Honda HR-V</option>
                <option value="honda_integra">Honda Integra</option>
                <option value="honda_s600">Honda S600</option>
                <option value="honda_lifedunk">Honda Life Dunk</option>
                <option value="honda_s360">Honda S360</option>
                <option value="honda_orthia">Honda Orthia</option>
                <option value="honda_avancier">Honda Avancier</option>
                <option value="honda_evplus">Honda EV Plus</option>
                <option value="honda_z">Honda Z</option>
                <option value="honda_ballade">Honda Ballade</option>
                <option value="honda_civic_gx">Honda Civic GX</option>
                <option value="honda_elysion">Honda Elysion</option>
                <option value="honda_crxdelsol">Honda CR-X del Sol</option>
                <option value="honda_crx">Honda CR-X</option>
                <option value="honda_smx">Honda S-MX</option>
                <option value="honda_vamos">Honda Vamos</option>
                <option value="honda_torneo">Honda Torneo</option>
                <option value="honda_fcx">Honda FCX</option>
                <option value="honda_crvlimitededition">Honda CR-V Limited Edition</option>
                <option value="honda_civicgti">Honda Civic GTi</option>
                <option value="honda_remix">Honda Remix</option>
                <option value="honda_crosstour">Honda Crosstour</option>
                 {/* list of ford car models, change if needed */}
                 <option value="ford_focuswagon">Ford Focus Wagon</option>
                 <option value="ford_wildtrak">Ford Wildtrak</option>
                 <option value="ford_rangerdoublecab">Ford Ranger Double Cab</option>
                 <option value="ford_expedition">Ford Expedition</option>
                 <option value="ford_fiesta5doors">Ford Fiesta 5 Doors</option>
                 <option value="ford_f150raptor">Ford F-150 Raptor</option>
                 <option value="ford_focusst5doors">Ford Focus ST 5 doors</option>
                 <option value="ford_focus5doors">Ford Focus 5 Doors</option>
                 <option value="ford_focusfiestaSt">Ford Fiesta ST</option>
                 <option value="ford_focusf150supercrew">Ford F-150 Super Crew</option>
                 <option value="ford_explorer">Ford Explorer</option>
                 <option value="ford_escape">Ford Escape</option>
                 <option value="ford_gt">Ford GT</option>
                 <option value="ford_smax">Ford S-Max</option>
                 <option value="ford_galaxy">Ford Galaxy</option>
                 <option value="ford_kuga">Ford Kuga</option>
                 <option value="ford_tourneo">Ford Tourneo</option>
                 <option value="ford_figo">Ford Figo</option>
                 <option value="ford_mondeowagon">Ford Mondeo Wagon</option>
                 <option value="ford_kaplus">Ford Ka+</option>
                 <option value="ford_fusionnorthamerican">Ford Fusion North American</option>
                 <option value="ford_edge">Ford Edge</option>
                 <option value="ford_mustang">Ford Mustang</option>
                 <option value="ford_mustangconvertible">Ford Mustang Convertible</option>
                 <option value="ford_fiesta3doors">Ford Fiesta 3 Doors</option>
                 <option value="ford_ecosport">Ford Ecosport</option>
                 <option value="ford_rangersupercab">Ford Ranger Super Cab</option>
                 <option value="ford_rangerregularcab">Ford Ranger Regular Cab</option>
                 <option value="ford_f150regularcab">Ford F-150 Regular Cab</option>
                 <option value="ford_f150supercab">Ford F-150 Super Cab</option>
                 <option value="ford_focusrs">Ford Focus RS</option>
                 <option value="ford_puma">Ford Puma</option>
                 <option value="ford_bronco">Ford Bronco</option>
                 <option value="ford_territory">Ford Territory</option>
                 <option value="ford_mustangmach1">Ford Mustang Mach 1</option>
                 <option value="ford_mustangmache">Ford Mustang Mach-E</option>
                 <option value="ford_focusstwagon">Ford Focus ST Wagon</option>
                 <option value="ford_transitconnectwagon">Ford Transit Connect Wagon</option>
                 <option value="ford_maverick">Ford Maverick</option>
                 <option value="ford_superduty">Ford Super Duty</option>
                 <option value="ford_raptorranger">Ford Raptor Ranger</option>
                 <option value="ford_kaplusactive">Ford Ka+ Active</option>
                 <option value="ford_edgest">Ford Edge ST</option>
                 <option value="ford_transitcustom">Ford Transit Custom</option>
                 <option value="ford_pumast">Ford Puma ST</option>
                 <option value="ford_anglia100e">Ford Anglia 100E</option>
                 <option value="ford_anglia105e">Ford Anglia 105E</option>
                 <option value="ford_bmax">Ford B-Max</option>
                 <option value="ford_cmax">Ford C-Max</option>
                 <option value="ford_capri">Ford Capri</option>
                 <option value="ford_consul">Ford Consul</option>
                 <option value="ford_contourmondoe">Ford Contour/Mondeo</option>
                 <option value="ford_corsair">Ford Corsair</option>
                 <option value="ford_cortina">Ford Cortina</option>
                 <option value="ford_cougar">Ford Cougar</option>
                 <option value="ford_crestliner">Ford Crestliner</option>
                 <option value="ford_crownvictoria">Ford Crown Victoria</option>
                 <option value="ford_deluxe">Ford Deluxe</option>
                 <option value="ford_econovan">Ford Econovan</option>
                 <option value="ford_escort3doors">Ford Escort 3 Doors</option>
                 <option value="ford_escort4doors">Ford Escort 4 Doors</option>
                 <option value="ford_escort5doors">Ford Escort 5 Doors</option>
                 <option value="ford_escortcabrio">Ford Escort Cabrio</option>
                 <option value="ford_escortclipper">Ford Escort Clipper</option>
                 <option value="ford_escortwagon">Ford Escort Wagon</option>
                 <option value="ford_everest">Ford Everest</option>
                 <option value="ford_excursion">Ford Excursion</option>
                 <option value="ford_explorersport">Ford Explorer Sport</option>
                 <option value="ford_explorersporttrac">Ford Explorer Sport Trac</option>
                 <option value="ford_fiestasedan">Ford Fiesta Sedan</option>
                 <option value="ford_fivehundred">Ford Five Hundred</option>
                 <option value="ford_flex">Ford Flex</option>
                 <option value="ford_focus3doors">Ford Focus 3 Doors</option>
                 <option value="ford_focuscc">Ford Focus CC</option>
                 <option value="ford_focussedan">Ford Focus Sedan</option>
                 <option value="ford_focusus">Ford Focus US</option>
                 <option value="ford_freestar">Ford Freestar</option>
                 <option value="ford_freestyle">Ford Freestyle</option>
                 <option value="ford_fusioneuropean">Ford Fusion European</option>
                 <option value="ford_grandcmax">Ford Grand C-MAX</option>
                 <option value="ford_ka">Ford Ka</option>
                 <option value="ford_mavericklwb">Ford Maverick LWB</option>
                 <option value="ford_maverickswb">Ford Maverick SWB</option>
                 <option value="ford_modela">Ford Model A</option>
                 <option value="ford_modelt">Ford Model T</option>
                 <option value="ford_mondeohatchback">Ford Mondeo Hatchback</option>
                 <option value="ford_mondeosedan">Ford Mondeo Sedan</option>
                 <option value="ford_orion">Ford Orion</option>
                 <option value="ford_pinto">Ford Pinto</option>
                 <option value="ford_probe">Ford Probe</option>
                 <option value="ford_scorpiosedan">Ford Scorpio Sedan</option>
                 <option value="ford_scorpiowagon">Ford Scorpio Wagon</option>
                 <option value="ford_sierra3doors">Ford Sierra 3 Doors</option>
                 <option value="ford_sierra5doors">Ford Sierra 5 Doors</option>
                 <option value="ford_sierrasedan">Ford Sierra Sedan</option>
                 <option value="ford_sportka">Ford SportKa</option>
                 <option value="ford_streetka">Ford StreetKa</option>
                 <option value="ford_taunus">Ford Taunus</option>
                 <option value="ford_taunuscabrio">Ford Taunus Cabrio</option>
                 <option value="ford_taurus">Ford Taurus</option>
                 <option value="ford_taurussho">Ford Taurus SHO</option>
                 <option value="ford_tauruswagon">Ford Taurus Wagon</option>
                 <option value="ford_taurusx">Ford Taurus X</option>
                 <option value="ford_thunderbird">Ford Thunderbird</option>
                 <option value="ford_windstar">Ford Windstar</option>
                 <option value="ford_zodiac">Ford Zodiac</option>
                    {/* list of peugeot car models, change if needed */}
                <option value="peugeot_208">Peugeot 208</option>
                <option value="peugeot_308">Peugeot 308</option>
                <option value="peugeot_301">Peugeot 301</option>
                <option value="peugeot_408">Peugeot 408</option>
                <option value="peugeot_508">Peugeot 508</option>
                <option value="peugeot_2008">Peugeot 2008</option>
                <option value="peugeot_3008">Peugeot 3008</option>
                <option value="peugeot_5008">Peugeot 5008</option>
                <option value="peugeot_rifter">Peugeot Rifter</option>
                <option value="peugeot_traveller">Peugeot Traveller</option>
                <option value="peugeot_boxer">Peugeot Boxer</option>
                <option value="peugeot_expert">Peugeot Expert</option>
                <option value="peugeot_partner">Peugeot Partner</option>
                <option value="peugeot_landtrek">Peugeot Landtrek</option>
                <option value="peugeot_206/206sd">Peugeot 206/206 SD</option>
                <option value="peugeot_207/207sd">Peugeot 207/207 SD</option>
                <option value="peugeot_404slx">Peugeot 405 SLX</option>
                <option value="peugeot_pars">Peugeot Pars</option>
                <option value="peugeot_104">Peugeot 104</option>
                <option value="peugeot_106">Peugeot 106</option>
                <option value="peugeot_107">Peugeot 107</option>
                <option value="peugeot_108">Peugeot 108</option>
                <option value="peugeot_206">Peugeot 206</option>
                <option value="peugeot_207">Peugeot 207</option>
                <option value="peugeot_305">Peugeot 305</option>
                <option value="peugeot_309">Peugeot 309</option>
                <option value="peugeot_306">Peugeot 306</option>
                <option value="peugeot_307">Peugeot 307</option>
                <option value="peugeot_406">Peugeot 406</option>
                <option value="peugeot_407">Peugeot 407</option>
                <option value="peugeot_504">Peugeot 504</option>
                <option value="peugeot_505">Peugeot 505</option>
                <option value="peugeot_605">Peugeot 605</option>
                <option value="peugeot_607">Peugeot 607</option>
                <option value="peugeot_806">Peugeot 806</option>
                <option value="peugeot_807">Peugeot 807</option>
                <option value="peugeot_1007">Peugeot 1007</option>
                <option value="peugeot_4007">Peugeot 4007</option>
                <option value="peugeot_4008">Peugeot 4008</option>
                <option value="peugeot_rcz">Peugeot RCZ</option>
                <option value="peugeot_iOn">Peugeot iOn</option>
                <option value="peugeot_hoggar">Peugeot Hoggar</option>
                <option value="peugeot_j9">Peugeot J9</option>
                <option value="peugeot_p4">Peugeot P4</option>
                <option value="peugeot_bipper">Peugeot Bipper</option>
                <option value="peugeot_bippertepee">Peugeot Tepee</option>
                 {/* list of landrover car models, change if needed */}
                 <option value="landrover_rangeroversport">Landrover Range Rover Sport</option>
                 <option value="landrover_rangerover">Landrover Range Rover</option>
                 <option value="landrover_defender90">Landrover Defender 90</option>
                 <option value="landrover_discoverysport">Landrover Discovery Sport</option>
                 <option value="landrover_rangeroverevoque">Landrover Range Rover Evoque</option>
                 <option value="landrover_rangeroverphev">Landrover Range Rover PHEV</option>
                 <option value="landrover_rangeroversportsvr">Landrover Range Rover Sport SVR</option>
                 <option value="landrover_defender110">Landrover Defender 110</option>
                 <option value="landrover_discovery">Landrover Discovery</option>
                 <option value="landrover_rangeroverevoqueconvertible">Landrover Range Rover Evoque Convertible</option>
                 <option value="landrover_rangeroverl">Landrover Range Rover L</option>
                 <option value="landrover_rangeroversportphev">Landrover Range Rover Sport PHEV</option>
                 <option value="landrover_discoverysvx">Landrover Discovery SVX</option>
                 <option value="landrover_rangerovervelar">Landrover Range Rover Velar</option>
                 <option value="landrover_freelander">Landrover Freelander</option>
                 <option value="landrover_rangerover3doors">Landrover Range Rover 3 Doors</option>
                  {/* list of mazda car models, change if needed */}
                <option value="mazda_2demio">Mazda 2/Demio</option>
                <option value="mazda_6atenzasedan">Mazda 6/Atenza Sedan</option>
                <option value="mazda_6axelasedan">Mazda 6/Axela Sedan</option>
                <option value="mazda_6axelahatchback">Mazda 6/Axela Hatchback</option>
                <option value="mazda_cx3">Mazda CX-3</option>
                <option value="mazda_cx5">Mazda CX-5</option>
                <option value="mazda_cx9">Mazda CX-9</option>
                <option value="mazda_mx5miata">Mazda MX-5/Miata</option>
                <option value="mazda_6atenzawagon">Mazda 6/Atenza Wagon</option>
                <option value="mazda_5premacy">Mazda 5/Premacy</option>
                <option value="mazda_cx60">Mazda CX-60</option>
                <option value="mazda_biante">Mazda Biante</option>
                <option value="mazda_cx8">Mazda CX-8</option>
                <option value="mazda_flair">Mazda Flair</option>
                <option value="mazda_cx50">Mazda CX-50</option>
                <option value="mazda_mx30">Mazda MX-30</option>
                <option value="mazda_cx30">Mazda CX-30</option>
                <option value="mazda_verisa">Mazda Verisa</option>
                <option value="mazda_121">Mazda 121</option>
                <option value="mazda_2demio3doors">Mazda 2/Demio-3 doors</option>
                <option value="mazda_2demiosedan">Mazda 2/Demio-Sedan</option>
                <option value="mazda_3mpsmazdaspeed3">Mazda 3 MPS/MazdaSpeed 3</option>
                <option value="mazda_323hatchback">Mazda 323 Hatchback</option>
                <option value="mazda_323sedan">Mazda 323 Sedan</option>
                <option value="mazda_323stationwagon">Mazda 323 Station Wagon</option>
                <option value="mazda_6atenzahatchback">Mazda 6/Atenza Hatchback</option>
                <option value="mazda_626hatchback">Mazda 626 Hatchback</option>
                <option value="mazda_626sedan">Mazda 626 Sedan</option>
                <option value="mazda_626stationwagon">Mazda 626 Station Wagon</option>
                <option value="mazda_bseriesbravodualcab">Mazda B Series/Bravo Dual Cab</option>
                <option value="mazda_bseriesbravofreestylecab">Mazda B Series/Bravo Freestyle Cab</option>
                <option value="mazda_bt50">Mazda BT-50</option>
                <option value="mazda_cx7">Mazda CX-7</option>
                <option value="mazda_flairwagon">Mazda Flairwagon</option>
                <option value="mazda_mx3">Mazda MX-3</option>
                <option value="mazda_mx6">Mazda MX-6</option>
                <option value="mazda_rx7">Mazda RX-7</option>
                <option value="mazda_rx8">Mazda RX-8</option>
                <option value="mazda_tribute">Mazda Tribute</option>
                <option value="mazda_xedos6">Mazda Xedos 6</option>
                <option value="mazda_xedos9">Mazda Xedos 9</option>
                </Form.Select>
                <label htmlFor="year">Year</label>
               {/* add more states if u want */}
                <Form.Select id="make_model_select" name='year'>
                <option></option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                </Form.Select>
                <label htmlFor="trim">Trim</label>
               {/* add more states if u want */}
                <Form.Select id="make_model_select" name='trim'>
                <option></option>
                <option value="base">Base</option>
                <option value="mid">Mid</option>
                <option value="highend">High-End</option>
                </Form.Select>
                <button>Proceed</button>
            </form>
         </div>
        </Tab>
        </Tabs>        
</div>
<div className='sell_instruction-container'>
        <Howitworks 
        lgAd="https://res.cloudinary.com/grootretro/image/upload/v1652535165/carpadi-website/lg_buy_sell_blue_ad_a0o6hg.png"
        />

    </div>
    </div>
  
    </div>
    </body>
  )
}

export default sell_car