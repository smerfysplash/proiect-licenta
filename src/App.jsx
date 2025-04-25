import React, { useState } from "react";
import "./App.css";
import "./arata.css";

const organOptions = [
  "Creier",
  "Ochiul",
  "Urechea",
  "Nasul și sinusurile",
  "Laringele",
  "Plamanii",
  "Canale faringiene",
  "Cavitatea bucală și faringele",
  "Tiroidă",
  "Esofag",
  "Stomac și duoden",
  "Ficat și vezica biliară",
  "Pancreas",
  "Intestine și rect",
  "Rinichi și vezică urinară",
  "Organe sexuale masculine",
  "Organe sexuale feminine",
  "Sân feminine",
  "Piele",
  "Muschi scheletici",
  "Tesut conjunctiv",
  "Tesut adipos",
  "Oase si articulatii",
  "Periost",
  "Dinti si maxilar",
  "Sistem limfatic",
  "Vase de sânge",
  "Inimă",
];

const diagnosticOptions = {
  Creier: [
    "Glanda pituitară (sau hipofiza)",
    "Glanda pineală (sau epifiza)",
    "Talamus",
    "Plex coroid",
    "Teaca de mielină",
    "Meninge",
  ],
  Ochiul: [
    "Glande lacrimale",
    "Canale lacrimale",
    "Glande ale pleoapei",
    "Canale ale glandelor pleoapei",
    "Pielea pleoapei",
    "Mușchii pleoapei",
    "Conjunctivă / Cornee / Cristalin (lentilă cristalină)",
    "Coroidă / Corp ciliar / Iris",
    "Mușchii pupilei",
    "Mușchi ciliari netezi",
    "Mușchi ciliari striați",
    "Mușchii extraoculari",
    "Retină",
    "Corp vitros (sau umoare vitroasă)",
  ],
  Urechea: [
    "Urechea medie",
    "Trompe lui Eustachio",
    "Mușchiul Stapedius",
    "Urechea internă - Cohleea",
    "Urechea internă - Sistem vestibular",
    "Urechea externă",
    "Canal auditiv",
    "Cartilajul urechii",
  ],
  "Nasul și sinusurile": [
    "Mucoasa nazală",
    "Sinusuri paranazale",
    "Nervi olfactivi",
  ],
  Laringele: ["Mucoasa laringiană", "Mușchii laringieni"],
  Plamanii: [
    "Alveole pulmonare",
    "Celule caliciforme",
    "Mucoasa bronșică",
    "Trahee",
    "Mușchii bronșici",
    "Pleură",
    "Diafragm",
  ],
  "Cavitatea bucală și faringele": [
    "Submucoasa cavității bucale și faringelui",
    "Mucoasa superficială a cavității bucale și faringelui",
    "Canale ale glandelor salivare",
    "Mușchii limbii",
  ],
  Tiroidă: ["Glanda tiroidă", "Glandele paratiroide", "Canale tiroidiene"],
  Esofag: [
    "Esofag (treimea inferioară)",
    "Esofag (primele două treimi)",
    "Mușchii esofagieni",
  ],
  "Stomac și duoden": [
    "Stomac (curbura mare)",
    "Duoden",
    "Stomac (curbura mică)",
    "Pilor și Bulb duodenal",
  ],
  "Ficat și vezica biliară": [
    "Parenchim hepatic",
    "Canale biliare / Vezica biliară",
  ],
  Pancreas: ["Glanda pancreatică", "Canale pancreatice", "Celule insulare"],
  "Intestine și rect": [
    "Intestin subțire",
    "Colon",
    "Colon sigmoid",
    "Mușchii intestinali",
    "Peritoneul",
    "Submucoasa rectului",
    "Mucoasa de suprafață a rectului",
    "Canale perianale",
    "Mușchii rectali (partea superioară a rectului)",
    "Mușchii rectali (partea inferioară a rectului) / Sfincterul extern",
    "Sfincter rectal intern",
  ],
  "Rinichi și vezică urinară": [
    "Tuburi colectoare renale",
    "Tuburile colectoare",
    "Măduva suprarenalei",
    "Cortex suprarenal",
    "Parenchimul renal",
    "Bazinet renal / Uretere",
    "Submucoasa vezicii urinare – Trigon",
    "Uretră / Mucoasă vezicală",
    "Mușchiul vezicii / Sfincterul extern vesical",
    "Sfincter vezical intern",
  ],
  "Organe sexuale masculine": [
    "Glandă prostatică",
    "Canale prostatice",
    "Canale ejaculatoare",
    "Celule germinale (masculine)",
    "Testicule",
    "Tunica vaginală a testiculului (învelișul testiculului)",
    "Glande secretante de smegmă (glandele Tyson)",
    "Corpul penisului (corpi cavernoși, țesutul erectil al penisului)",
    "Glandul penisului",
  ],
  "Organe sexuale feminine": [
    "Uter / Trompe uterine (Fallopian tubes)",
    "Mușchii uterului",
    "Celule germinale (feminine)",
    "Ovare",
    "Col uterin",
    "Mușchii colului uterin / Sfincterul cervical",
    "Glandele Bartholin",
    "Mucoasă vaginală",
    "Mușchi vaginali",
    "Glandele clitorisului",
  ],
  "Sân feminine": ["Glande mamare", "Canale mamare"],
  Piele: [
    "Coriu (dermul profund)",
    "Glande sebacee",
    "Glande sudoripare",
    "Epiderm",
  ],
  "Oase și articulații": [
    "Oase și articulații",
    "Cartilaj",
    "Ligament",
    "Tendoane",
  ],
  "Dinți și maxilar": [
    "Dentină și oasele maxilarului",
    "Smalț dentar",
    "Mușchii maxilarului",
  ],
  "Sistem limfatic": ["Vase limfatice și ganglioni limfatici", "Splină"],
  "Vase de sânge": ["Artere și vene"],
  Inimă: [
    "Miocard (ventricule)",
    "Endocard și valvele cardiace",
    "Pericard",
    "Artere și vene coronare",
    "Aortă și artere carotid",
    "Sinus carotidian",
  ],
};

const lateralDiagnoses = [
  "Glanda pituitară (sau hipofiza)",
  "Glanda pineală (sau epifiza)",
  "Talamus",
  "Plex coroid",
  "Glande lacrimale",
  "Coroidă / Corp ciliar / Iris",
  "Urechea medie",
  "Submucoasa cavității bucale și faringelui",
  "Glanda tiroidă",
  "Glandele paratiroide",
];

const treatmentInfo = {
  "Glanda pituitară (sau hipofiza)": {
    dreapta: {
      conflict: [
        "Conflict legat de înghițirea unei bucăți - se face referire simbolică la ceva ce „nu putem înghiți” sau „nu putem elimina”.",
        "Partea dreaptă: neputința de a apuca sau obține o bucățică (de mâncare, oportunitate etc.) pentru că individul este prea mic.",
      ],
      exemple: [
        "Copil care nu poate atinge raftul cu dulciuri.",
        "Student care simte că nu poate obține o bursă importantă.",
      ],
    },
    stanga: {
      conflict: [
        "Conflict de respingere a unei bucăți - ceva nedorit care a fost forțat asupra individului.",
        "Partea stângă: neputința de a respinge ceva ce nu dorește.",
      ],
      exemple: [
        "Femeie forțată să accepte o responsabilitate nedorită.",
        "Copil obligat să mănânce ceva ce nu îi place.",
      ],
    },
  },
  "Glanda pineală (sau epifiza)": {
    dreapta: {
      conflict: [
        "Conflict de a nu putea percepe soluția, speranța, adevărul.",
        "Partea dreaptă: nu pot vedea lumina, nu o pot „apuca”.",
      ],
      exemple: [
        "Un adolescent care se simte pierdut în viață, fără sens sau scop → „nu pot vedea drumul”.",
        "Cineva aflat într-o situație de viață imposibilă (divorț, datorii, pierderi) → simte că „nu mai are nicio ieșire”, „nu mai vede lumina de la capătul tunelului”.",
      ],
    },
    stanga: {
      conflict: [
        "Conflict de a rămâne blocat într-o stare negativă, dureroasă, de suferință.",
        "Partea stângă: nu pot scăpa de întuneric.",
      ],
      exemple: [
        "O persoană cu depresie cronică, care spune „de ani de zile e ca și cum trăiesc în întuneric”.",
        "Un copil care trăiește într-o atmosferă foarte negativă acasă (certuri, violență) și simte că nu poate ieși din acel „întuneric emoțional”.",
      ],
    },
  },
  Talamus: {
    dreapta: {
      conflict: [
        "Conflict de pierdere a valorii personale și a controlului - centrat pe disperare profundă și pe percepția de a fi o țintă.",
        "Partea dreaptă:Conflict trăit ca o umilire venită din exterior, respingere, lipsă de respect sau validare socială. Persoana simte că este „lovită din afară”.",
      ],
      exemple: [
        "Individul este desconsiderat sau simte că alții îl desconsideră.",
        "O adolescentă care este hărțuită online, batjocorită sau exclusă din grupuri → simte că e „lovită” constant din exterior.",
        "Un angajat umilit public de șef în fața colegilor → percepe un atac direct asupra valorii lui.",
      ],
    },
    stanga: {
      conflict: [
        "Conflict de pierdere a valorii personale și a controlului - centrat pe disperare profundă și pe percepția de a fi o țintă.",
        "Partea stângă:Conflict trăit din interior, ca o auto-judecată dură, vină, rușine sau sentiment că „nu merit”, „nu valorez nimic”. Persoana devine propriul ei dușman.",
      ],
      exemple: [
        "Un individ care se desconsideră pe sine însuși.",
        "O persoană religioasă care simte că „a păcătuit grav” și nu mai este vrednică de iubirea divină → trăiește o ruptură profundă cu propria valoare.",
        "O mamă care își reproșează constant că nu a fost „suficient de bună” și că a greșit față de copilul ei → se acuză intern.",
      ],
    },
  },
  "Plex coroid": {
    dreapta: {
      conflict: [
        "Conflict legat de înghițirea unei bucăți",
        "Partea dreaptă:neputința de a lăsa o „bucățică” să „curgă înăuntru” - nu pot primi, nu pot integra, nu pot „înghiți” ceva – fie hrană, fie o informație sau o experiență",
      ],
      exemple: [
        "O persoană așteaptă să primească un loc de muncă sau o moștenire, dar totul se amână sau i se refuză — „nu pot să primesc ce mi se cuvine”.",
        "Cineva află o veste despre partenerul său (infidelitate, minciună) și nu poate accepta realitatea — „nu pot să înghit ce am aflat”.",
      ],
    },
    stanga: {
      conflict: [
        "Conflict legat de înghițirea unei bucăți",
        "Partea stângă:neputința de a lăsa o „bucățică” să „curgă afară” - nu pot elimina, nu pot da afară, nu pot scăpa de ceva ce am „înghițit” deja",
      ],
      exemple: [
        "O persoană a fost trădată de cineva apropiat și nu reușește să ierte sau să uite — „nu pot să dau afară durerea asta”.",
        "Un pacient a fost diagnosticat greșit, i s-a dat un tratament greșit și acum trăiește cu furia acumulată — „nu pot elimina greșeala”.",
        "Cineva este forțat să trăiască într-un mediu toxic (acasă, la serviciu) și simte că nu poate ieși din situație — „nu pot să scap de mediul ăsta”.",
      ],
    },
  },
  "Teaca de mielină": {
    conflict: [
      "Conflict legat de atingere - Acest tip de conflict apare atunci când atingerea fizică este dorită, respinsă sau trăită ca dureroasă, fie la nivel real, fie percepută simbolic.",
    ],
    exemple: [
      "O femeie aflată într-o relație rece și distantă își dorește tandrețe și apropiere, dar nu o primește – simte „nevoia de atingere” neîmplinită.",
      "Un bărbat în vârstă este îngrijit de asistente, dar simte că e atins cu dezgust sau fără respect – atingerea este percepută ca jignitoare.",
      "Un adolescent este agresat la școală (împins, lovit, ironizat fizic) – corpul lui „învață” că atingerea este periculoasă.",
    ],
  },
  Meninge: {
    conflict: [
      "Conflict de teamă de atac asupra capului sau creierului - conflictul specific este legat de teama de a fi atacat în zona capului sau a creierului (centrul de comandă al corpului), ceea ce poate însemna o frică intensă față de pericole fizice sau psihologice care afectează gândirea și controlul mental.",
    ],
    exemple: [
      "Frica intensă de a fi atacat sau de a-ți pierde controlul mental.",
      "Grijile legate de sănătatea capului sau creierului, ca un atac la sistemul nervos central.",
      "Frica de a „înnebuni” sau de a „pierde controlul minții”.",
    ],
  },
  "Glande lacrimale": {
    dreapta: {
      conflict: [
        "Conflict legat de o bucățică vizuală",
        "Partea dreaptă:neputința de a captura o bucățică vizuală - nu pot percepe sau înțelege o informație vizuală importantă - În acest caz, persoana simte că nu poate înțelege sau nu poate reține o imagine, o scenă sau un detaliu important pe care l-a văzut.",
      ],
      exemple: [
        "O mamă își pierde copilul în mulțime și, deși se uită în toate direcțiile, nu reușește să-l mai vadă – conflict de neputință de a capta imaginea copilului.",
        "O persoană primește un act important (contract, factură, poză), dar nu apucă să-l vadă clar sau îl pierde – „am ratat ceva esențial”.",
        "Cineva observă o expresie ciudată pe fața partenerului (posibilă infidelitate), dar nu poate înțelege exact ce a văzut – conflict de neînțelegere a semnalului vizual.",
        "Un om asistă la un accident dar nu reușește să vadă clar detaliile (numele de pe mașină, fața vinovatului) – „nu pot capta imaginea care conta”.",
      ],
    },
    stanga: {
      conflict: [
        "Conflict legat de o bucățică vizuală",
        "Partea stângă:neputința de a elimina o bucățică vizualănu pot scăpa de o imagine, un detaliu vizual sau o imagine care mă obsedează - Aici, conflictul apare atunci când o persoană este obsedată sau traumatizată de o imagine sau un detaliu pe care nu îl poate elimina din mintea sa.",
      ],
      exemple: [
        "O mamă își surprinde copilul într-o situație periculoasă (căzând, plângând etc.) și imaginea îi rămâne întipărită în minte.",
        "O persoană vede o poză tulburătoare pe internet (război, cruzime față de animale) și nu o poate uita – conflict cu imagine vizuală traumatică.",
        "O persoană asistă la un accident grav sau la o scenă violentă, iar imaginea îi revine obsesiv în minte – „nu pot să uit ce am văzut”.",
      ],
    },
  },
  "Canale lacrimale": {
    conflict: [
      "Conflictul este dorința de a fi văzut, dorința de a nu fi văzut - Acest conflict se referă la o dublă opoziție internă: persoana simte o nevoie profundă de a fi recunoscută și văzută, dar în același timp simte o teamă sau o reticență față de această expunere.",
    ],
    exemple: [
      "“Dorința de a fi văzut”: Aceasta sugerează o nevoie de validare, recunoaștere, sau apreciere din partea celorlalți. Poate fi vorba de dorința de a fi remarcat(ă) sau de a fi acceptat(ă) într-o comunitate, într-o relație, sau într-un context social. La nivel biologic, acest conflict poate reflecta o nevoie de conexiune socială esențială pentru supraviețuire, în special în contextul evolutiv.",
      "“Dorința de a nu fi văzut”: Acesta reprezintă o rezistență față de expunere sau o teamă de a fi judecat sau criticizat. •	Poate semnifica o auto-protecție, în care persoana vrea să evite atenția, pentru că simte că nu este suficient de bună sau că ar putea fi rănită sau respinsă. Acest conflict ar putea reflecta o teamă de vulnerabilitate sau excludere socială.",
    ],
  },
  "Glande ale pleoapei": {
    conflict: [
      "Conflict de desfigurare, atac împotriva ochiului - Acest conflict este legat de un atac fizic sau simbolic asupra ochiului sau a aspectului fizic al feței (mai ales a ochilor), care poate implica o percepție de perdere de frumusețe, integritate sau identitate vizuală. ",
    ],
    exemple: [
      "„Atac împotriva ochiului”: Acest conflict poate apărea atunci când o persoană simte că nu mai poate „vedea clar” o situație sau o persoană importantă. Se referă la o distrugere sau amenințare a vederii sau la o rănire a ochiului, ce poate fi văzută fie în sens fizic (un atac direct asupra ochilor), fie simbolic (percepția că vederea sau claritatea gândurilor sunt amenințate).",
      "„Conflict de desfigurare”: Este legat de teama de a pierde frumusețea sau de a deveni neîngrijit(ă) sau neplăcut(ă) din punct de vedere estetic. Poate fi asociat cu o percepție de umilință sau rușine legată de cum arată persoana în ochii altora. •	Poate reflecta o percepție profundă de respingere legată de aspectul fizic sau de o schimbare majoră în aspectul unei persoane (de exemplu, un accident sau o boală care afectează fața).",
    ],
  },
  "Canale ale glandelor pleoapei": {
    conflict: [
      "Conflict de separare vizuală - Acest conflict este legat de o separare percepută vizual sau de dificultatea de a percepe sau păstra o legătură vizuală cu ceva sau cineva. Este asociat cu sentimentul de distanțare sau îndepărtare din punct de vedere vizual și emoțional.",
    ],
    exemple: [
      "Pierdere de vedere a unui obiect, a unei persoane sau a unei situații importante.",
      "Separare de un punct de referință vizual (de exemplu, un loc sau o persoană la care persoana se uită frecvent sau de care depinde).",
      "Pericolul de a nu mai vedea un copil sau un membru al familiei (de exemplu, în cazuri de dispariție sau separare).",
      "Frica de a pierde din vedere o oportunitate importantă – ca și cum ceva esențial este scăpat din câmpul vizual.",
    ],
  },
  "Pielea pleoapei": {
    conflict: [
      "Conflictul biologic legat de pielea pleoapelor - Acest conflict este legat de separarea vizuală, și mai specific, de pierderea contactului vizual cu o persoană în timp ce ochii sunt închiși. Aceasta poate include situații în care cineva a pierdut vederea unei persoane importante într-un moment în care ochii erau închiși, precum moartea unei persoane iubite sau plecarea acesteia în timp ce persoana respectivă dormea. De asemenea, poate implica situația în care mama a pierdut vederea bebelușului ei în timp ce adormea, ceea ce creează un conflict emoțional profund legat de teama de separare și pierdere.",
    ],
    exemple: [
      "Pierdere vizuală legată de pleoape: Acest conflict este legat de dificultatea de a menține contactul vizual cu o persoană sau de pierderea unui obiect de valoare vizuală într-un moment în care ochii erau închiși. De exemplu, o persoană care a dormit și a pierdut contactul vizual cu cineva drag care a plecat sau a decedat brusc.",
      "Pielea pleoapelor și pierderea contactului fizic: Pielea pleoapelor (epidermul) este asociată și cu pierdere fizică de contact cu ochii sau cu cineva care obișnuia să aibă un contact vizual și fizic cu această zonă. De exemplu, nu mai este sărutat pe pleoape (un gest de afecțiune) sau nu mai este privit în ochi. Poate reflecta și dorința de separare de un stimul neplăcut care implică ochii, cum ar fi un sărut nedorit pe pleoape, faptul de a fi legat la ochi, sau aplicarea unui machiaj „toxic” sau iritant la nivelul ochilor.",
    ],
  },
  "Mușchii pleoapei": {
    conflict: [
      "Levator palpebrae: Mușchiul ridicător al pleoapei superioare - neputința de a ține ochii deschiși. Conflictul asociat cu acest mușchi poate apărea atunci când o persoană simte că nu poate să înfrunte realitatea sau că este forțată să se confrunte cu lucruri incomode sau dureroase la care nu vrea să se expună.",
      "Orbicularis oculi: Mușchiul orbicular al ochiului - neputința de a închide ochii. Conflictul legat de acest mușchi apare atunci când cineva simte că nu poate închide ochii, adică nu poate să se protejeze de stimuli externi sau nu poate să se împiedice să vadă lucruri pe care le consideră insuportabile.",
    ],
    exemple: [
      "Neputința de a ține ochii deschiși: O persoană care se confruntă cu o situație de negare sau care refuză să vadă anumite lucruri dureroase, dar este forțată să le confrunte. Levator palpebrae este mușchiul care ridică pleoapele, permițând ochilor să rămână deschiși. Poate reflecta un conflict emoțional în care individul nu vrea să vadă sau să accepte o situație, dar se simte forțat să o observe. Poate fi vorba de teama de a înfrunta adevărul sau de frica de a nu face față unei situații stresante.",
      "Neputința de a închide ochii: O persoană care simte că nu poate evita o situație stresantă sau nu poate să se protejeze mental de o problemă care îi provoacă anxietate sau suferință. Orbicularis oculi este mușchiul care închide pleoapele. Aceasta poate reflecta o dorință de a închide ochii față de o situație care provoacă stres sau anxietate – de exemplu, o dificultate de a înfrunta o realitate dureroasă sau de a închide ochii față de o problemă la care nu se dorește o soluționare imediată.",
    ],
  },
  "Conjunctivă / Cornee / Cristalin (lentilă cristalină)": {
    conflict: [
      "Conflict de desfigurare, atac împotriva ochiului - Acest conflict este legat de un atac fizic sau simbolic asupra ochiului sau a aspectului fizic al feței (mai ales a ochilor), care poate implica o percepție de perdere de frumusețe, integritate sau identitate vizuală. ",
    ],
    exemple: [
      "Un adolescent este tachinat sau agresat pentru faptul că poartă ochelari groși — trăiește o rușine sau o durere legată de imaginea ochilor săi.",
      "Un bărbat suferă o leziune la ochi într-un accident de muncă și percepe trauma ca pe o pierdere a integrității personale.",
      "O persoană este operată la ochi (ex. cataractă, glaucom) și suferă din cauza ideii că „ochiul meu nu mai e la fel” – conflict de desfigurare.",
      "O persoană este martoră la un eveniment extrem de șocant (un accident, o scenă violentă) și simte că „ochii i-au fost pătați” de ce a văzut — perceput ca un atac simbolic asupra ochilor.",
    ],
  },
  "Coroidă / Corp ciliar / Iris": {
    dreapta: {
      conflict: [
        "Conflict legat de o bucățică vizuală (morsel vizual) - descrie ceva ce organismul percepe ca fiind „ceva de dorit” sau „ceva ce nu poate fi digerat” — în mod figurativ. Un „morsel vizual” ar însemna ceva ce vezi și fie vrei să obții (să „prinzi”), fie vrei să scapi de el (să-l „elimini”).",
        "Partea dreaptă: corelată adesea cu aspecte masculine, acțiune, exterior",
      ],
      exemple: [
        "„Nu pot prinde ce văd” – adică vezi ceva dorit, dar nu îl poți avea, nu îl poți atinge sau obține (poate fi o persoană, un obiect, o oportunitate).",
      ],
    },
    stanga: {
      conflict: [
        "Conflict legat de o bucățică vizuală (morsel vizual) - descrie ceva ce organismul percepe ca fiind „ceva de dorit” sau „ceva ce nu poate fi digerat” — în mod figurativ. Un „morsel vizual” ar însemna ceva ce vezi și fie vrei să obții (să „prinzi”), fie vrei să scapi de el (să-l „elimini”).",
        "Partea stângă: mai mult legată de latura feminină, receptivă, interioară",
      ],
      exemple: [
        "„Nu pot elimina ce văd” – adică vezi ceva deranjant, traumatizant sau nedorit, și nu poți scăpa de imaginea respectivă.",
      ],
    },
  },
  "Mușchii pupilei": {
    conflict: [
      "Conflict legat de o „bucățică” asociată cu lumina sau conflict legat de un stimul vizual asociat cu lumina - se referă, la un element vizual care implică lumina – adică ceva ce este perceput prin lumină și are o importanță emoțională/psihologică pentru persoană.",
    ],
    exemple: [
      "Poate fi vorba despre lumini puternice, orbitoare (care deranjează). - Un martor care a văzut ceva șocant într-o clipă luminată brusc (ex: un accident noaptea, iluminat de faruri) → lumina e parte din trauma vizuală.",
      "Sau despre lipsa luminii (nu poți „vedea” ce ai nevoie).",
      "Sau despre o imagine luminată într-un anumit fel care declanșează o reacție emoțională.",
    ],
  },
  "Mușchi ciliari netezi": {
    conflict: [
      "Conflictul poate fi: „Nu pot vedea ce se întâmplă chiar sub ochii mei” sau „Nu-mi dau seama de ce face cineva apropiat”.",
    ],
    exemple: [
      "Nu poți înțelege sau accepta ceva ce e foarte aproape de tine (ex: o problemă personală, o persoană dragă care suferă, un adevăr incomod).",
    ],
  },
  "Mușchi ciliari striați": {
    conflict: [
      "Conflictul poate fi: „Nu știu încotro mă îndrept”, „Nu pot vedea ce urmează”, sau „Îmi e frică de ce va veni”.",
    ],
    exemple: [
      "Nu poți anticipa viitorul, nu vezi ce te așteaptă, îți lipsește „viziunea” sau claritatea în legătură cu un scop.",
    ],
  },
  "Mușchii extraoculari": {
    conflict: [
      "Conflict interior, fie fizic, fie emoțional, legat de evitarea intenționată sau inconștientă a privirii într-o anumită direcție.",
    ],
    exemple: [
      "Nu vreau să văd ce face persoana X (care stă mereu la dreapta mea).” - O persoană a asistat la un accident dureros văzut din colțul drept al privirii - poate dezvolta o evitare inconștientă a privirii spre dreapta.",
      "Un copil care s-a simțit respins de mama (aflată simbolic în stânga) poate evita privirea spre stânga.",
      "„Nu vreau să accept viitorul (care simbolic vine din față).”",
      "„Refuz să mă uit la trecut (care poate fi simbolizat în spate sau lateral).”",
    ],
  },
  Retină: {
    conflict: [
      "Conflict : frică de care nu te poți scutura sau frică persistentă / frică care nu te părăsește - se referă la un conflict interior puternic, în care o persoană trăiește o frică constantă, obsesivă sau copleșitoare, care rămâne „lipită” de ea, indiferent de ceea ce face.",
    ],
    exemple: [
      "Frică de boală, frică de moarte, frică de a pierde pe cineva — chiar dacă nu există un pericol real în prezent.",
      "Un copil care a crescut într-un mediu instabil și simte mereu că „ceva rău urmează”.",
      "Persoană care a fost victima unui accident sau a unei agresiuni și de atunci trăiește cu frica „că se va întâmpla din nou”.",
    ],
  },
  "Corp vitros (sau umoare vitroasă)": {
    conflict: [
      "Conflict : frica de un prădător – se refera la un conflict profund, ancestral, declanșat de frica de a fi atacat, urmărit sau devorat de un „prădător”.În zilele noastre, „prădătorul” nu mai este neapărat un animal, ci poate fi simbolic, reprezentând orice persoană, situație sau forță pe care o percepem ca o amenințare directă la supraviețuire.",
    ],
    exemple: [
      "Un copil care simte că un adult „periculos” îl amenință → dezvoltă un conflict de frică de prădător.",
      "Un adult care simte că „viața e pe cale să-l doboare” (datorii, boală, stres) → trăiește același conflict, dar modernizat.",
    ],
  },
  "Urechea medie": {
    dreapta: {
      conflict: [
        "Conflict legat de o „bucățică sonoră” - adică un sunet, o voce, un cuvânt sau un mesaj care are un impact emoțional.",
        "Partea dreaptă: a nu putea „prinde”/percepe o informație sonoră",
      ],
      exemple: [
        "Nu înțelegi ce a spus cineva.",
        "Ai ratat o informație importantă (ex: diagnosticul medicului, ceva ce ți-a zis cineva drag).",
      ],
    },
    stanga: {
      conflict: [
        "Conflict legat de o „bucățică sonoră” - adică un sunet, o voce, un cuvânt sau un mesaj care are un impact emoțional.",
        "Partea stângă: a nu putea „elimina”/scăpa de o informație sonoră",
      ],
      exemple: [
        "Un sunet sau o voce îți revine obsesiv în minte.",
        "O ceartă, o insultă, o frază traumatizantă sau un zgomot deranjant constant.",
      ],
    },
  },
  "Trompe lui Eustachio (sau trompe auditive)": {
    dreapta: {
      conflict: [
        "Conflict legat de o „bucățică sonoră” – adică un sunet, o voce, un cuvânt sau un mesaj care are un impact emoțional",
        "Partea dreaptă: dificultatea de a „prinde” sau percepe o informație sonoră importantă",
      ],
      exemple: [
        "Nu ai reușit să auzi clar o discuție crucială (ex: în timpul unui apel telefonic important, semnalul a fost slab și ai pierdut o parte esențială).",
        "Ai fost prezent fizic, dar sunetul a fost acoperit de altceva (ex: în timpul unui discurs emoționant, cineva a făcut zgomot și ai ratat momentul-cheie).",
      ],
    },
    stanga: {
      conflict: [
        "Conflict legat de o „bucățică sonoră” – adică un sunet, o voce, un cuvânt sau un mesaj care are un impact emoțional",
        "Partea stângă: imposibilitatea de a „elimina” sau de a scăpa de o informație sonoră deranjantă",
      ],
      exemple: [
        "Ți se repetă în cap în mod obsesiv un comentariu răutăcios pe care cineva l-a făcut despre tine (ex: o remarcă despre vocea ta sau felul în care ai vorbit).",
        "Ai fost expus constant la un zgomot enervant (ex: un vecin care repară zilnic, la ore fixe, iar sunetul îți provoacă o tensiune psihică).",
      ],
    },
  },
  "Mușchiul stapedius": {
    conflict: [
      "Conflict legat de zgomot - Apare când o persoană este expusă sau afectată de un zgomot perceput ca amenințător, enervant sau agresiv. ",
    ],
    exemple: [
      "Un sunet brusc (ex: o explozie).",
      "Un zgomot constant (ex: trafic, țipete, muzică tare).",
    ],
  },
  "Urechea internă - Cohleea": {
    conflict: [
      "Conflict legat de auz - Se referă la conflicte emoționale legate de ce auzi sau nu auzi.",
    ],
    exemple: [
      "Ceva ce NU vrei să auzi (vești proaste, certuri, insulte).",
      "Ceva ce AI VREA să auzi, dar nu se întâmplă (ex: cuvinte de afecțiune, susținere).",
    ],
  },
  "Urechea internă - Sistem vestibular": {
    conflict: ["Conflict legat de echilibru, conflict de cădere"],
    exemple: [
      "Apare când o persoană simte că își pierde echilibrul în viață, fie fizic (boală vestibulară, amețeli), fie simbolic (instabilitate emoțională, lipsa siguranței).",
      "Frica de a cădea, pierderea controlului, „a nu avea pe ce te sprijini” - toate pot declanșa conflicte de acest gen.",
    ],
  },
  "Urechea externă": {
    conflict: [
      "Conflictul legat de nevoia de a controla realitatea emoțională prin sunet și comunicare, în fața fricii de respingere, durere sau abandon - Acest conflict implică mai multe dimensiuni, inclusiv frica de a auzi lucruri dureroase, teama de a nu fi înțeles sau ascultat, și nevoia de a proteja sinele emoțional de sunete și cuvinte periculoase. Este vorba despre un conflict intern între dorința de conexiune (prin comunicare) și teama de a fi rănit sau respins",
    ],
    exemple: [
      "„Mă simt despărțită de ceva, de cineva, prin ceea ce aud.” - În acest caz, sunetul este simbolic pentru distanțarea emoțională. Persoana simte că nu mai este conectată la ceilalți din cauza a ceea ce aude. Poate fi vorba de o ceartă, o separare fizică, sau o pierdere emoțională (ex: un partener care spune „nu te mai iubesc”).",
      "„Îmi lipsesc cuvintele lui/ei.” - Aici, lipsa sunetului (adică absența cuvintelor unui anumit om) creează o mărturie a separării. Acesta poate fi un simptom al unei pierderi emoționale, fie că vorbim despre o despărțire, moarte sau distanțare într-o relație.",
      "„Tăcerea lui/ei mă înnebunește.” - Tăcerea devine o formă de comunicare negativă. Absența sunetului poate fi percepută ca o amenințare emoțională sau un semn de neînțelegere și îngrijorare. Aceasta poate reflecta un conflict în comunicare, unde lipsa de sunet devine un semnal de pericol psihologic sau de abandon.",
    ],
  },
  "Canal auditiv (sau conduct auditiv extern)": {
    conflict: [
      "Conflict auditiv de neînțelegere sau comunicare deficitară",
      "Conflict legat de teama de a auzi lucruri dureroase",
    ],
    exemple: [
      "Persoana se simte neînțeleasă sau neascultată de ceilalți. De asemenea, acest conflict poate include teama că nu este auzită corect, ceea ce poate duce la dificultăți de comunicare.",
      "Persoana simte o teama intensă de a auzi ceva care ar putea fi rănitor sau traumatic (ex: vești proaste, critici). Acesta poate fi un conflict legat de o evitare inconștientă a unor sunete percepute ca periculoase.",
    ],
  },
  "Cartilajul urechii": {
    conflict: ["Conflict de autodevalorizare"],
    exemple: [
      "Persoana se simte insuficientă, incapabilă, „mai puțin” decât ceilalți.",
      "Apare după eșecuri, critici, rușine, comparații, umilințe.",
    ],
  },
  "Mucoasa nazală": {
    conflict: [
      "Conflict legat de miros, conflict legat de „ceva ce miroase urât” - Acest tip de conflict apare atunci când cineva simte că este expus (simbolic sau real) la ceva „care nu-i miroase bine” — adică ceva deranjant, periculos sau „toxic” într-un sens simbolic. Poate fi vorba de o persoană, o situație sau un mediu perceput ca respingător.",
    ],
    exemple: [
      "Un copil care nu suportă mirosul părinților care fumează în casă.",
      "Persoană care simte că „ceva nu e în regulă” la locul de muncă - simțul mirosului e legat de intuiție și siguranță biologică.",
    ],
  },
  "Sinusuri paranazale": {
    conflict: [
      "Conflict legat de miros – percepția că „ceva miroase urât” - Acest conflict apare atunci când o persoană se simte expusă la ceva perceput ca fiind deranjant, „toxic” sau periculos – fie la nivel real (olfactiv), fie la nivel simbolic. Poate fi o situație, un loc sau o persoană care „nu inspiră încredere” sau „nu miroase a bine”.",
    ],
    exemple: [
      "Un adolescent care se mută într-un internat unde simte că atmosfera este ostilă și greu de suportat – simte că „nu se simte bine aici, parcă ceva e în neregulă”.",
      "O femeie care lucrează într-un birou unde atmosfera este tensionată, iar ea simte că „plutește ceva în aer” – o presiune nespusă, dar intensă.",
    ],
  },
  "Nervi olfactivi": {
    conflict: [
      "Nu pot să mai simt mirosul a ceva sau cuiva - Se referă la un conflict în care cineva suferă pentru că a pierdut „mirosul” (fizic sau simbolic) al unei persoane, locuri sau situații. Poate însemna o deconectare de cineva drag sau o situație în care simțul olfactiv este afectat din cauza unui stres puternic legat de o pierdere.",
    ],
    exemple: [
      "După moartea unei persoane dragi, cineva poate să își piardă simțul mirosului.",
      "Cineva mutat brusc din casa copilăriei poate suferi o ruptură olfactivă simbolică: „nu mai pot simți acel loc”.",
    ],
  },

  "Mucoasa laringiană": {
    conflict: [
      "Conflict de sperietură sau teamă teritorială - Acest conflict apare în situații în care o persoană se simte amenințată brusc sau simte că teritoriul său (acasă, la muncă, într-o relație) este invadat. Reacția biologică este de a proteja zona de „intrare a aerului” (laringele), ca un fel de mecanism de apărare.",
    ],
    exemple: [
      "Persoană care este martora unui accident și simte frică puternică, dar nu poate reacționa.",
      "Cineva care simte că „i-a fost invadat spațiul” (de ex., partenerul e infidel, părinții se ceartă acasă etc.).",
    ],
  },

  "Mușchii laringieni": {
    conflict: [
      "Conflict de sperietură sau teamă teritorială - Similar cu mucoasa laringiană, dar implică și mușchii — adică o reacție mai „activă” a corpului. De exemplu, poate duce la dificultăți de vorbire, răgușeală sau chiar pierderea vocii în situații de șoc sau frică intensă.",
    ],
    exemple: [
      "Un copil care asistă la un eveniment înfricoșător și nu poate spune nimic.",
      "Persoană care se simte amenințată, dar nu poate „spune adevărul” din cauza fricii.",
    ],
  },
  "Alveole pulmonare": {
    conflict: [
      "Conflict de frică de moarte - Apare în situații percepute ca fiind cu pericol iminent de moarte.",
    ],
    exemple: [
      "Diagnostic brusc de cancer.",
      "Experiență de aproape-moarte (accident, atac, sufocare).",
      "Frica intensă că cineva drag va muri.",
    ],
  },

  "Celule caliciforme": {
    conflict: [
      "Frica de sufocare - Simbolic sau real, această frică activează protecția biologică prin creșterea producției de mucus.",
    ],
    exemple: [
      "Persoană care are un atac de panică și simte că nu mai poate respira.",
      "Pacienți cu COVID-19 în faze inițiale – frica intensă de sufocare.",
      "Copil care s-a înecat cu mâncare și a fost traumatizat.",
    ],
  },

  "Mucoasa bronșică": {
    conflict: [
      "Frica teritorială sau sperietură bruscă - Senzația că ești în pericol acolo unde ar trebui să te simți în siguranță.",
    ],
    exemple: [
      "Femeie care este amenințată în propria casă.",
      "Un copil care simte tensiune/violență acasă.",
      "Cineva care e concediat brusc.",
    ],
  },

  Trahee: {
    conflict: [
      "Conflict de „nu primesc suficient aer” - Senzația de sufocare, limitare, constrângere.",
    ],
    exemple: [
      "Atac de panică, sentiment de „strângere în gât”.",
      "Mediu toxic, spațiu aglomerat, mască permanentă.",
      "Presiune constantă psihologică („nu mai pot respira în acest loc!”).",
    ],
  },

  "Mușchii bronșici": {
    conflict: [
      "Frica teritorială sau sperietură bruscă - Mușchii se contractă în semn de protecție/defensivă.",
    ],
    exemple: [
      "Copil care trăiește într-un mediu haotic (divorț, ceartă).",
      "Adult sub presiune profesională extremă, „sufocat” psihic.",
      "Persoane cu frică de spații închise.",
    ],
  },

  Pleură: {
    conflict: ["Atac asupra pieptului – real sau perceput simbolic."],
    exemple: [
      "Intervenție chirurgicală la nivel toracic.",
      "Lovitură în piept sau senzație că cineva ți-a „frânt inima”.",
      "Diagnostic grav legat de plămâni.",
    ],
  },

  Diafragm: {
    conflict: [
      "Conflicte de sufocare și epuizare fizică extremă - Simțul că nu poți respira destul, că „te trage în jos”.",
    ],
    exemple: [
      "Sportiv suprasolicitat.",
      "Om în burnout profund.",
      "Pacient în stare de anxietate severă, cu hiperventilație.",
    ],
  },
  "Canale Faringiene": {
    conflict: [
      "Conflict de frica din față (frontal fear) sau senzație de neputință totală - Când cineva e „luat prin surprindere” și nu se poate apăra.",
    ],
    exemple: [
      "Copil care se simte complet neajutorat în fața unui adult abuziv.",
      "Om prins într-un conflict brusc și nu are timp să reacționeze.",
      "Persoană hărțuită și fără posibilitate de „a înghiți” situația.",
    ],
  },
  "Submucoasa cavității bucale și faringelui": {
    dreapta: {
      conflict: [
        "Conflict de morsel = legat de o “bucățică” pe care vrei s-o prinzi sau s-o elimini.",
        "Partea dreaptă: nu poți prinde „bucățica” (ceva dorit: bani, o relație, un job).",
      ],
      exemple: [
        "În copilărie, nu ți se permite să mănânci ceva dorit și simți frustrare.",
        "Nu reușești să semnezi un contract important (de muncă, de vânzare).",
        "Vezi pe cineva mâncând ceva ce tu nu poți avea (dieta strictă).",
      ],
    },
    stanga: {
      conflict: [
        "Conflict de morsel = legat de o “bucățică” pe care vrei s-o prinzi sau s-o elimini.",
        "Partea stângă: nu poți scăpa de ceva (o situație neplăcută, un partener, o datorie).",
      ],
      exemple: [
        "Ai fost jignit și „nu poți uita” ce s-a spus.",
        "Ai acceptat o situație umilitoare și „ți-a rămas în gât”.",
        "Persoană care nu poate renunța la o relație toxică.",
        "Ții în tine un secret sau o minciună și simți că „nu poți să o dai afară”.",
      ],
    },
  },
  "b)	Mucoasa superficială a cavității bucale și faringelui": {
    conflict: [
      "Conflict oral - ceva pe care „nu-l pot gusta”, „nu-l suport în gură” sau verbalizare blocată.",
    ],
    exemple: [
      "Copil forțat să mănânce ceva respingător.",
      "Adult care „nu poate să spună” ceva din cauza fricii.",
    ],
  },
  "Canale ale glandelor salivare": {
    conflict: [
      "Nu pot sau nu am voie să mănânc - Frustrare alimentară sau simbolică.",
    ],
    exemple: [
      "Regim strict, post forțat.",
      "Copil pedepsit și lăsat fără mâncare.",
      "„Îmi e interzis ceva ce-mi place.”",
    ],
  },
  "Mușchii limbii": {
    conflict: [
      "Nu pot să-mi trag limba = blocaj în exprimare, neputință verbală, șoc de a fi redus la tăcere.",
    ],
    exemple: [
      "Persoană abuzată verbal și redusă la tăcere.",
      "Copil căruia i se spune să „nu vorbească”.",
    ],
  },
  "Glanda tiroidă": {
    dreapta: {
      conflict: [
        "Morsel conflict legat de rapiditate - conflictul are o componentă de timp: simți că nu ești suficient de rapid să prinzi bucățica, sau nu ești suficient de rapid să scapi de ea.",
        "Partea dreaptă: nu sunt destul de rapid să prind oportunitatea.",
      ],
      exemple: [
        "Un tânăr care pierde o oportunitate de afacere „pentru că a stat pe gânduri”.",
        "Ai vrut să cumperi ceva important (o casă, o ofertă limitată), dar altcineva a fost mai rapid.",
        "Un sportiv care ratează o calificare pentru că a reacționat prea târziu.",
        "Eșec la un examen sau interviu.",
      ],
    },
    stanga: {
      conflict: [
        "Morsel conflict legat de rapiditate - conflictul are o componentă de timp: simți că nu ești suficient de rapid să prinzi bucățica, sau nu ești suficient de rapid să scapi de ea.",
        "Partea stângă: nu sunt suficient de rapid să scap de ceva.",
      ],
      exemple: [
        "Ai fost prins într-un accident sau eveniment neașteptat și te învinovățești că „n-ai reacționat suficient de repede”.",
        "Ai rămas într-un loc unde ai fost abuzat verbal, și „n-ai plecat la timp”.",
        "Ai acceptat un angajament pe care acum îl regreți, dar simți că „e prea târziu”.",
        "Relație toxică din care nu poți ieși.",
      ],
    },
  },
  "Glandele paratiroide": {
    dreapta: {
      conflict: [
        "Morsel conflict – un conflict biologic primitiv legat de „bucățica”, adică ceva ce: vrei să prinzi (să obții), vrei să înghiți (să integrezi în viața ta), sau vrei să scapi de (să elimini, să refuzi).",
        "Partea dreaptă: nu pot obține.",
      ],
      exemple: [
        "Cineva care aplică pentru un job dorit enorm și e refuzat.",
        "Un student care pierde o bursă la limită.",
        "Nu poți obține o moștenire.",
        "Persoană care vede un partener ideal, dar „nu poate să-l aibă”.",
      ],
    },
    stanga: {
      conflict: [
        "Morsel conflict – un conflict biologic primitiv legat de „bucățica”, adică ceva ce: vrei să prinzi (să obții), vrei să înghiți (să integrezi în viața ta), sau vrei să scapi de (să elimini, să refuzi).",
        "Partea stângă: nu pot elimina.",
      ],
      exemple: [
        "Nu poți scăpa de o obligație dureroasă.",
        "Un loc de muncă stresant, dar „nu poți pleca pentru că ai rate”.",
        "Relație toxică din care simți că nu mai poți ieși.",
        "Persoană care simte că duce „o povară de viață” de care nu se poate elibera.",
      ],
    },
  },
  "Canale tiroidiene": {
    conflict: [
      "Frica din față / neputință completă - senzația că nu poți face nimic pentru a te proteja.",
    ],
    exemple: [
      "„Sunt prins în fața unui tren și nu pot face nimic.”",
      "Persoană atacată frontal (verbal sau fizic).",
    ],
  },
  "Esofag (treimea inferioară)": {
    conflict: [
      "Nu pot sau nu am voie să înghit “bucățica” - O oportunitate refuzată sau ceva ce nu poți accepta.",
    ],
    exemple: [
      "Ofertă de job refuzată de alții.",
      "Relație dorită, dar imposibilă.",
    ],
  },
  "Esofag (primele două treimi)": {
    conflict: [
      "Nu vreau să înghit “bucățica” - Situație impusă pe care o respingi.",
    ],
    exemple: [
      "Obligat să accepți ceva ce respingi complet.",
      "Ordin nedrept la muncă.",
    ],
  },
  "Mușchii esofagieni": {
    conflict: [
      "Nu pot să regurgitez “bucățica” - Simți că ai înghițit ceva greșit și vrei să scapi de el.",
    ],
    exemple: [
      "Relație de care vrei să scapi dar „ai înghițit-o” deja.",
      "Situație rușinoasă pe care ai acceptat-o și regreți.",
    ],
  },
  "Stomac (curbura mare)": {
    conflict: [
      "Conflict cu o „bucată de mâncare” imposibil de digerat - Se referă simbolic la o situație sau problemă „prea mare” sau „prea greu de digerat”, adică imposibil de acceptat sau procesat. Poate fi o veste, o trădare, o pierdere etc.",
    ],
    exemple: [
      "Primești o veste șocantă despre cineva drag – de exemplu, că a fost diagnosticat cu o boală gravă sau a murit brusc",
      "Ai aflat că partenerul te-a înșelat. E o informație „grea”, șocantă, pe care nu o poți accepta",
    ],
  },
  Duoden: {
    conflict: [
      "Conflict cu o „bucată de mâncare” imposibil de digerat - Se referă simbolic la o situație sau problemă „prea mare” sau „prea greu de digerat”, adică imposibil de acceptat sau procesat. Poate fi o veste, o trădare, o pierdere etc.",
    ],
    exemple: [
      "Un prieten apropiat te trădează – îți ia o idee de proiect și o prezintă ca fiind a lui - E un „șoc greu de digerat”, o trădare care îți stă „ca un nod în stomac”",
    ],
  },
  "Stomac (curbura mică)": {
    conflict: [
      "Furie teritorială – sentiment de mânie legat de propriul spațiu (acasă, loc de muncă etc.)",
      "Conflict de identitate – criză de identitate, sentimentul de „nu mai știu cine sunt” sau „unde îmi e locul”",
    ],
    exemple: [
      "Te-ai trezit că un coleg ți-a ocupat biroul fără să te întrebe și șeful nu ia măsuri",
      "Te întorci acasă și descoperi că cineva a mutat lucruri personale din camera ta fără acord - Te simți invadat, furios că cineva a pătruns în „teritoriul” tău",
      "După o despărțire dureroasă, simți că nu mai știi cine ești fără cealaltă persoană - E un conflict de identitate",
      "Ai fost concediat după mulți ani, și nu mai știi ce să faci cu viața ta – te simți „fără rol”",
    ],
  },
  "Pilor și Bulb duodenal": {
    conflict: [
      "Furie teritorială – sentiment de mânie legat de propriul spațiu (acasă, loc de muncă etc.)",
      "Conflict de identitate – criză de identitate, sentimentul de „nu mai știu cine sunt” sau „unde îmi e locul”",
    ],
    exemple: [
      "Te-ai trezit că un coleg ți-a ocupat biroul fără să te întrebe și șeful nu ia măsuri",
      "Un nou coleg e pus să-ți „supravegheze” munca, deși tu ai mai multă experiență - Te simți atacat în spațiul tău profesional",
      "Ai fost concediat după mulți ani, și nu mai știi ce să faci cu viața ta – te simți „fără rol”",
      "Ai fost crescut pentru o carieră (ex: medic), dar descoperi că nu e ceea ce vrei - Ai un conflict profund între cine „ar trebui” să fii și cine simți că ești",
    ],
  },
  "Parenchim hepatic": {
    conflict: [
      "Conflict de înfometare – teama de a nu avea suficient (hrană, resurse, bani etc.), senzația de „nu supraviețuiesc” sau „nu primesc ce am nevoie”",
    ],
    exemple: [
      "Ți-e frică că îți pierzi sursa de venit și nu o să poți întreține familia - Corpul reacționează ca și cum ar trebui să „acumuleze” sau să „compenseze” lipsa resurselor",
    ],
  },
  "Canale biliare / vezica biliară": {
    conflict: [
      "Furie teritorială – sentiment de mânie față de cineva care îți invadează spațiul",
      "Conflict de identitate – criză personală legată de cine ești și care e locul tău",
    ],
    exemple: [
      "Te simți atacat sau înlocuit în propria casă (de exemplu, când vine cineva nou și domină spațiul)",
      "Ai fost forțat să renunți la o carieră care definea cine ești",
    ],
  },
  "Glanda pancreatică": {
    conflict: [
      "Conflict cu o „bucată de mâncare” imposibil de digerat - Asemănător cu stomacul mare: o situație extrem de frustrantă, poate chiar legată de familie sau moștenire (pentru că pancreasul este văzut simbolic ca fiind legat de „dulce” – adică emoții calde, familiale).",
    ],
    exemple: [
      "Ești martorul unei dispute urâte în familie (de exemplu, părinți care se ceartă urât) și nu poți să o „înghiți” sau să o înțelegi - Pancreasul este afectat ca răspuns la acest conflict familial, în special dacă este perceput ca „nedrept” sau „toxic”.",
    ],
  },
  "Canale pancreatice": {
    conflict: [
      "Furie teritorială sau conflict de identitate - Repetă tema legată de spațiul personal sau criza de identitate.",
    ],
    exemple: [
      "Ai fost umilit sau scos dintr-un grup în care te simțeai „acasă” (de exemplu, colegi de echipă sau prieteni apropiați) - Apare afectarea canalelor pancreatice, deoarece pierzi sentimentul de apartenență.",
    ],
  },
  "Celule insulare": {
    conflict: [
      "Conflict de frică-dezgust sau rezistență – Frică-dezgust: o reacție viscerală la ceva considerat „dezgustător” sau profund respingător.",
      "Conflict de rezistență: lupta împotriva unei situații sau unei persoane pe care nu o poți accepta, dar nici evita.",
    ],
    exemple: [
      "Ești obligat să ai contact cu o persoană sau situație pe care o consideri toxică, murdară, dezgustătoare.",
      "Simți că „te sufoci” într-o relație sau situație de care nu poți scăpa, dar nici nu poți accepta - Pot apărea dezechilibre în producția de insulină.",
    ],
  },
  "Intestin subțire": {
    conflict: [
      "Conflict: „Nu pot digera/absorbi o bucată” - Reprezintă neputința de a procesa mental sau emoțional o situație, în special ceva ce „ar fi trebuit să fie bun”, dar nu a fost, o situație pe care nu o poți înțelege sau accepta (nu o poți „asimila”).",
    ],
    exemple: [
      "Un cadou sau o oportunitate care s-a dovedit a fi o dezamăgire.",
      "Veste care părea bună la început, dar s-a transformat în ceva greu de acceptat.",
      "Primești o promovare, dar simți că nu ești pregătit – nu poți „asimila” responsabilitatea.",
    ],
  },
  Colon: {
    conflict: [
      "Conflict: „Bucată indigestibilă” - Un eveniment sau o situație pe care o percepi ca fiind toxică, jenantă, murdară, dar pe care nu reușești să o elimini din mintea ta sau din viața ta.",
    ],
    exemple: [
      "„Gânduri negre” care te macină zilnic.",
      "Trădare personală pe care nu o poți ierta.",
      "Rușine publică pe care nu o poți uita – o „toxina” emoțională ce rămâne în tine.",
    ],
  },
  "Colon sigmoid": {
    conflict: [
      "Conflict de „fecale” - Simți că ți se reproșează sau ți se asociază ceva „murdar”. Poate fi legat de vină, rușine, responsabilități nedorite.",
    ],
    exemple: [
      "„E vina ta că s-a stricat tot.”",
      "Te acuză cineva că ai „lăsat un haos” (fizic sau emoțional).",
    ],
  },
  "Mușchii intestinali": {
    conflict: [
      "Conflict: „Nu pot elimina bucata” - Ești prins într-o situație din care nu poți scăpa, nici măcar simbolic. Te simți blocat, incapabil să „împingi afară” problema.",
    ],
    exemple: [
      "Ai o datorie sau o obligație care te sufocă.",
      "Vrei să pleci dintr-o relație sau loc de muncă, dar simți că „nu poți”.",
      "Ai făcut o greșeală gravă, dar nu ai curajul să o recunoști sau să „o scoți” afară.",
    ],
  },
  Peritoneul: {
    conflict: [
      "Conflict: „Atac asupra abdomenului” - Este un conflict de agresiune percepută asupra zonei abdominale, în sens real (ex: intervenții chirurgicale, accidente), sau simbolic (emoții intense legate de vulnerabilitate).",
    ],
    exemple: [
      "Ai o frică puternică de operație, injecții sau boli în zona abdominală.",
      "Ai fost operat și ai trăit intervenția ca un „atac”.",
      "Ți se reproșează constant că nu ești suficient de bun – te simți „străpuns”.",
    ],
  },
  "Submucoasa rectului": {
    conflict: [
      "Conflict de „fecale” - Simți că ți se reproșează sau ți se asociază ceva „murdar”. Poate fi legat de vină, rușine, responsabilități nedorite.",
    ],
    exemple: [
      "Ți se atribuie o greșeală pe care n-ai făcut-o, dar trebuie să o „înghiți”.",
      "Ești implicat într-un scandal rușinos care îți afectează reputația.",
      "Ți se reproșează că ai „lăsat mizerie în urmă” – metaforic vorbind (poate într-o relație sau proiect).",
    ],
  },
  "Mucoasa de suprafață a rectului": {
    conflict: [
      "Conflict de identitate, teritoriu sau decizie - Confruntare cu o decizie dificilă, o confuzie legată de cine ești sau unde aparții. Poate include și sentimentul că cineva îți invadează spațiul sau controlul asupra vieții tale.",
    ],
    exemple: [
      "„Nu știu dacă să rămân în relația asta.”",
      "Ești presat să alegi între două drumuri importante (ex: carieră vs. familie).",
      "„Simt că nu mai sunt cine eram.”",
    ],
  },
  "Canale perianale": {
    conflict: [
      "Conflict: „Nu pot elimina suficient de repede fecalele” - Ai senzația de presiune – trebuie să scapi de ceva, să finalizezi, dar ești blocat. De multe ori e legat de stres extrem sau de urgențe.",
    ],
    exemple: [
      "Ai un termen limită și nu reușești să predai proiectul.",
      "Ți se cere să rezolvi o problemă gravă la muncă „peste noapte”.",
      "Trebuie să închei o relație, dar nu știi cum să o faci fără durere.",
    ],
  },
  "Muschii rectali (partea superioară a rectului)": {
    conflict: [
      "Conflict de fecale - Ții în tine lucruri rușinoase sau emoțional grele. E un conflict de neeliberare.",
    ],
    exemple: [
      "Nu poți să spui „adevărul gol-goluț” într-o situație tensionată.",
      "Ții un secret toxic despre cineva apropiat.",
      "Ți se reproșează constant greșelile, dar tu încerci să le ignori – le ții „în tine”.",
    ],
  },
  "Mușchii rectali (partea inferioară a rectului) / Sfincterul extern": {
    conflict: [
      "Conflict de marcare teritorială - Simți că nu poți „marca” cine ești – că nu ai autoritate, respect sau locul tău. Poate fi în familie, relație, muncă.",
    ],
    exemple: [
      "În casă, deciziile importante sunt luate fără tine – simți că nu mai ai autoritate.",
      "Nimeni nu te ascultă în casă, deși tu ești „șeful familiei”.",
      "Ai idei bune la job, dar ești ignorat sau „păcălit”.",
    ],
  },
  "Sfincter rectal intern": {
    conflict: [
      "Conflict de reținere - Frica de a pierde controlul, teama de a ceda, mai ales în situații tensionate sau umilitoare.",
    ],
    exemple: [
      "Ești pus sub presiune extremă și simți că poți „scăpa de sub control”.",
      "Te temi că nu te vei putea controla la un interviu sau în fața unei autorități.",
      "Ai o frică bruscă de a fi umilit în public, ca și cum „ai pierde controlul”.",
    ],
  },
  "Tuburi colectoare renale": {
    conflict: [
      "Conflict de abandon - Se referă la senzația profundă că ești părăsit sau neglijat.",
      "Conflict de existență - Frica de a nu mai putea supraviețui (psihic, fizic, financiar etc.).",
      "Conflict de refugiat - Sentimentul că ești „izgonit” din casa ta sau că ai pierdut „terenul sigur”.",
      "Conflict de spitalizare - Senzația că ești izolat sau „prizonier” într-un mediu rece, controlat, lipsit de iubire.",
    ],
    exemple: [
      "Un copil mic care se simte singur în spital fără părinți.",
      "Cineva care își pierde brusc locul de muncă și simte că viața sa se prăbușește.",
      "Persoană care trebuie să plece de urgență din țară din cauza unui război sau dezastre naturale.",
      "Apare adesea la cei internați în spital pentru perioade lungi sau care trăiesc spitalizarea ca pe o traumă.",
    ],
  },
  "Tuburile colectoare": {
    conflict: [
      "Conflict legat de lupta pentru existență, în contextul în care persoana a pierdut totul - Persoana simte că viața sa nu mai are niciun sprijin sau fundament – a pierdut casa, familia, stabilitatea, siguranța. E o luptă disperată pentru supraviețuire.",
    ],
    exemple: [
      "„Am pierdut tot, nu știu cum o să supraviețuiesc. Nu mai am nimic.” - Un om care și-a pierdut casa, familia, locul de muncă și este nevoit să plece într-o țară străină, fără bani, fără acte, fără siguranță.",
      "„Viața mea s-a terminat. Nimeni nu mă mai ajută. Trebuie să lupt ca să mănânc.” - Cineva care și-a pierdut casa din cauza datoriilor sau unui incendiu, a rămas fără job, și doarme acum în frig, pe stradă.",
      "„Sunt singură, fără bani, fără familie. Nu mai are rost nimic.” - O persoană în vârstă care își pierde partenerul de viață, copiii sunt plecați sau o ignoră, și pensia nu îi ajunge pentru traiul de zi cu zi.",
    ],
  },
  "Măduva suprarenalei": {
    conflict: [
      "Conflict de stres intens insuportabil - Măduva suprarenalei produce adrenalină și noradrenalină, implicate în răspunsul „luptă sau fugi”.",
    ],
    exemple: [
      "Cineva prins într-un accident, sau un sportiv înainte de un meci decisiv cu presiune enormă.",
      "Persoană care e implicată într-un accident rutier grav și trăiește un șoc.",
      "Un elev sau student care suferă un atac de panică înainte de un examen extrem de important.",
    ],
  },
  "Cortex suprarenal": {
    conflict: [
      "Alegerea unui drum greșit în viață - Conflictul apare atunci când cineva simte că a luat o decizie majoră greșită, cu consecințe dureroase.",
    ],
    exemple: [
      "Cineva care intră într-o relație distructivă, apoi își dă seama că a fost o alegere greșită.",
      "Persoană care a acceptat un job prost plătit, cu șefi toxici, și regretă decizia.",
      "Cineva care a ales să emigreze, dar se simte singur, rupt de familie, nefericit.",
    ],
  },
  "Parenchimul renal": {
    conflict: [
      "Conflict legat de apă sau lichide - Conflictul apare când e vorba de pierderea sau lipsa apei (reală sau simbolică).",
    ],
    exemple: [
      "Cineva care aproape se îneacă, sau care pierde o proprietate de valoare (ex. teren, casă – „pământul meu” e legat de „apa mea”).",
      "Simbolic: o mamă care ”pierde” copilul, considerându-l „parte din apele ei” (lichidele din sarcină).",
      "Persoană care a fost foarte deshidratată în timpul unei excursii și a simțit că își pierde viața.",
    ],
  },
  "Bazinet renal / Uretere": {
    conflict: [
      "Conflict de marcare a teritoriului - Apare când cineva simte că i se invadează spațiul personal sau că trebuie să își apere „teritoriul”. Similar cu comportamentul animal care urinează pentru a-și marca zona.",
    ],
    exemple: [
      "Cineva deranjat că cineva străin locuiește în casa sa.",
      "Un bărbat căruia i se mută un coleg nou la birou, pe vechiul său loc.",
      "Un frate care simte că fratele mai mic i-a ”furat” camera sau spațiul personal.",
      "Femeie care simte că altcineva încearcă să-i ”fure” partenerul sau casa.",
    ],
  },
  "Submucoasa vezicii urinare – Trigon": {
    conflict: [
      "Conflict legat de „o îmbucătură urâtă, murdară” - Ceva ce vrei să elimini, dar e prea murdar, rușinos sau greu de „înghițit”.",
    ],
    exemple: [
      "Cineva care a fost acuzat pe nedrept sau trăiește o umilință profundă.",
      "Femeie care află că soțul ei a avut o aventură – și simte trădarea ca pe „ceva murdar”.",
      "Un copil care a fost abuzat verbal sau sexual – o experiență murdară și rușinoasă.",
    ],
  },
  "Uretră / Mucoasă vezicală": {
    conflict: [
      "Conflict de marcare a teritoriului - Apare când cineva nu își mai poate apăra locul, poziția socială, casa etc.",
    ],
    exemple: [
      "Un angajat care simte că altcineva îi ia locul la muncă.",
      "Mamă al cărei copil este influențat de altcineva și simte că „își pierde controlul asupra teritoriului matern”.",
      "Un copil care merge la grădiniță și simte că alt copil i-a luat jucăria preferată.",
    ],
  },
  "Mușchiul vezicii / Sfincterul extern vesical": {
    conflict: [
      "Imposibilitatea de a-ți marca suficient teritoriul - Persoana simte că nu are suficientă putere sau drepturi să se afirme, să-și susțină poziția.",
    ],
    exemple: [
      "Cineva care trăiește cu părinți dominatori și nu are „spațiu propriu”.",
      "Un angajat care este ignorat constant de colegi și șef, deși are idei bune.",
      "Persoană într-o relație în care nu i se permite să se exprime sau să decidă.",
    ],
  },
  "Sfincter vezical intern": {
    conflict: [
      "Imposibilitatea de a ține urina - Legat de frica de a pierde controlul, a fi umilit, a „lăsa ceva să iasă” (fizic sau emoțional).",
    ],
    exemple: [
      "Poate apărea după traume sau rușini legate de urinare, mai ales la copii sau bătrâni.",
      "Un copil care s-a udat pe el la școală și a fost ridiculizat – trăiește un conflict puternic de control și rușine.",
      "Persoană care nu mai reușește să-și „țină în frâu” emoțiile și are o „scurgere” emoțională (simbolic).",
    ],
  },
  "Glandă prostatică": {
    conflict: [
      "Conflict legat de fertilitate, performanță sexuală sau identitate masculină.",
    ],
    exemple: [
      "Un bărbat care încearcă să conceapă un copil, dar partenera nu rămâne însărcinată – se simte „defect”.",
      "Un bărbat care simte că nu mai e „bărbat adevărat” din cauza andropauzei.",
      "Cineva care suferă de impotență sau e ridiculizat pentru performanța sexuală.",
    ],
  },
  "Canale prostatice": {
    conflict: [
      "Conflict de marcare a teritoriului - Simți că nu-ți mai poți apăra sau controla teritoriul ca bărbat (casa, familia, relația).",
    ],
    exemple: [
      "Soția începe o relație extraconjugală și bărbatul simte că „și-a pierdut femeia”.",
      "Un bărbat divorțează și este nevoit să-și părăsească casa – simte că și-a pierdut teritoriul.",
      "Se mută altcineva în „camera lui” sau în „poziția lui” (la muncă, în familie).",
    ],
  },
  "Canale ejaculatoare": {
    conflict: [
      "Conflict de marcare a teritoriului cu o nuanță sexuală sau „calitate de prostată”. De asemenea, implică un conflict de ejaculare: „nu pot, nu am voie sau nu vreau să ejaculez.” - adică un conflict de marcare a teritoriului, dar aici este accentuat de un context sexual sau legat de masculinitate. Aceste conflicte apar când bărbatul simte că nu mai are control asupra spațiului său sexual, relațional sau familial. În același timp, conflictul poate fi și despre blocarea expresiei sexuale: „nu pot ejacula”, „mi-e frică să ejaculez”, „nu am voie”.",
    ],
    exemple: [
      "„Nu mai pot să-mi revendic spațiul de tată și bărbat.” - Un bărbat divorțat a cărui fostă soție nu-i permite să-și vadă copiii.",
      "„Mi-a fost invadat teritoriul intim.” - Bărbatul află că soția lui are o relație cu alt bărbat care doarme în patul lor.",
      "„Nu pot controla ejacularea, nu sunt suficient de bărbat.” - Un tânăr suferă de ejaculare precoce și se simte rușinat și stresat înaintea fiecărui act sexual.",
    ],
  },
  "Celule germinale (masculine)": {
    conflict: [
      "Conflict de pierdere profundă - Simți că ai pierdut ceva fundamental pentru viitorul tău – copil, identitate, sens.",
    ],
    exemple: [
      "Moartea unui copil propriu sau al unei rude foarte apropiate.",
      "Aflarea infertilității – bărbatul simte că nu mai poate „duce mai departe” neamul.",
      "Pierderea unei relații în care își imagina o viață de familie.",
    ],
  },
  Testicule: {
    conflict: [
      "Conflict de pierdere - Pierdere cu impact emoțional puternic (persoană dragă, funcție, identitate).",
    ],
    exemple: [
      "Pierderea unei funcții de conducere (ex: director → subaltern).",
      "Soția pleacă din relație după 20 de ani – pierdere dureroasă și profund personală.",
      "Moartea tatălui sau a unui frate.",
    ],
  },
  "Tunica vaginală a testiculului (învelișul testiculului)": {
    conflict: [
      "Atac împotriva testiculelor - Simți că ai fost rănit, amenințat sau umilit la nivelul virilității tale.",
    ],
    exemple: [
      "Glumă umilitoare despre organele genitale, în public.",
      "Intervenție medicală dură (ex: biopsie testiculară sau hernie inghinală) resimțită ca o „agresiune”.",
      "Lovitură fizică în zona testiculelor.",
    ],
  },
  "Glande secretante de smegmă (glandele Tyson)": {
    conflict: [
      "Conflict legat de intimitate sexuală dificilă sau imposibilă, rușinoasă.",
    ],
    exemple: [
      "Încercări sexuale eșuate din cauza lipsei de lubrifiere (posibilă respingere).",
      "Relație tensionată unde sexul devine chinuitor sau imposibil.",
      "Un adolescent care nu poate consuma prima relație sexuală din cauza emoției.",
    ],
  },
  "Corpul penisului (corpi cavernoși, țesutul erectil al penisului)": {
    conflict: [
      "Conflict de autodevalorizare - Sentiment că nu ești destul de bun ca bărbat, mai ales sexual.",
    ],
    exemple: [
      "Bărbatul nu reușește să aibă erecție și se simte „defect”.",
      "Partenera face comparații cu alți bărbați.",
      "Gânduri repetitive: „Sunt slab, nu mai pot, nu sunt dorit.”",
    ],
  },
  "Glandul penisului": {
    conflict: [
      "Conflict de separare sau conflict legat de penis - Ruptură emoțională sau fizică resimțită la nivel genital.",
    ],
    exemple: [
      "Parteneră care evită complet orice formă de intimitate – bărbatul simte respingere dureroasă.",
      "Trauma emoțională după o circumcizie (în cazul copiilor).",
      "Femeie îl părăsește brusc, iar bărbatul simte că „i-a fost tăiat accesul” la iubire și sexualitate.",
    ],
  },
  "Uter / Trompe uterine (Fallopian tubes)": {
    conflict: [
      "Conflict de procreare, implantare, gen - Dificultate în a concepe, a păstra o sarcină sau în identitatea de femeie.",
    ],
    exemple: [
      "Femeie încearcă să rămână însărcinată, dar nu reușește.",
      "Sarcina pierdută (avort spontan sau voluntar) provoacă un șoc emoțional.",
      "Femeie care se simte „incompletă” pentru că nu a avut copii.",
    ],
  },
  "Mușchii uterului": {
    conflict: [
      "Nu poate ține fătul - Sentimentul că nu poate proteja sau susține o sarcină.",
    ],
    exemple: [
      "Femeia a pierdut mai multe sarcini și se teme că „nu poate ține copilul”.",
      "Presiunea externă: „Dacă pierd și această sarcină, nu mai pot.”",
      "Frică intensă în sarcină că fătul nu e bine.",
    ],
  },
  "Celule germinale (feminine)": {
    conflict: [
      "Pierdere profundă - O pierdere devastatoare resimțită la nivel profund, legată de „viitor” sau de maternitate.",
    ],
    exemple: [
      "Intervenție chirurgicală care duce la infertilitate.",
      "Pierderea unui copil la naștere.",
      "Încetarea brutală a unei relații cu planuri de familie.",
    ],
  },
  Ovare: {
    conflict: [
      "Conflict de pierdere - Pierdere a unei persoane apropiate sau a unei funcții esențiale (feminitate, maternitate).",
    ],
    exemple: [
      "Pierderea unei mame, a unui copil, sau a unei sarcini.",
      "Sentimentul de inutilitate după menopauză.",
      "Separarea de partenerul de viață sau pierderea unei relații iubite.",
    ],
  },
  "Col uterin": {
    conflict: [
      "Conflict sexual sau de împerechere - Sentiment de respingere sau tensiune în viața sexuală sau relațională.",
    ],
    exemple: [
      "Raport sexual dureros sau traumatic.",
      "Femeie care simte că e „folosită” sexual fără iubire.",
      "Refuz sexual repetat din partea partenerului.",
    ],
  },
  "Mușchii colului uterin / Sfincterul cervical": {
    conflict: [
      "Nu poate ține fătul suficient - Frică sau convingere că uterul „nu poate susține sarcina”.",
    ],
    exemple: [
      "Femeie cu istoric de avorturi spontane care trăiește sarcina cu frică.",
      "Medicul îi spune că „nu are col competent”.",
      "Femeia se simte presată să nască, dar nu e pregătită psihologic.",
    ],
  },
  "Glandele Bartholin": {
    conflict: [
      "Conflict legat de lubrifiere, dorință sexuală - Frică sau tensiune asociată cu intimitatea sexuală, mai ales legat de dorință sau penetrare.",
    ],
    exemple: [
      "Frica inconștientă de un act sexual dureros.",
      "Experiență sexuală traumatică care provoacă blocaj.",
      "Sentimentul că nu mai e „atrăgătoare” sexual.",
    ],
  },
  "Mucoasă vaginală": {
    conflict: [
      "Conflict de separare sexuală - Separare fizică sau emoțională de partenerul sexual.",
    ],
    exemple: [
      "Relație la distanță sau partener care o ignoră sexual.",
      "Despărțire bruscă de partener, cu dorință sexuală nerezolvată.",
      "Absența intimității într-o relație lungă.",
    ],
  },
  "Mușchi vaginali": {
    conflict: [
      "Dificultăți în acceptarea, menținerea sau apropierea sexuală - Nu poate ține penisul.",
    ],
    exemple: [
      "Frică de penetrare după o experiență dureroasă.",
      "Spasm vaginal (vaginism) în timpul actului sexual.",
      "Sentimentul de „nepotrivire” cu partenerul (fizic sau emoțional).",
    ],
  },
  "Glandele clitorisului": {
    conflict: [
      "Conflict de separare, conflict de clitoris - Separare afectivă sau sexuală resimțită intens la nivel feminin.",
    ],
    exemple: [
      "Refuz sexual dureros, după o perioadă de apropiere intensă.",
      "Traumă legată de abuz sau mutilare genitală.",
      "Lipsa stimulării erotice sau neglijare sexuală într-o relație.",
    ],
  },
  "Glande mamare": {
    conflict: [
      "Conflict de grijă față de cuib (copii, familie), conflict de ceartă în cuib.",
    ],
    exemple: [
      "Mama îngrijorată pentru copilul bolnav.",
      "Femeie care nu își poate alăpta copilul și simte vinovăție profundă.",
      "Certuri intense cu partenerul chiar în prezența copiilor.",
    ],
  },
  "Canale mamare": {
    conflict: [
      "Conflict de separare - Sentiment de despărțire fizică sau emoțională de cineva drag (de obicei copilul sau partenerul).",
    ],
    exemple: [
      "Copilul pleacă la bunici/școală/internat și mama simte lipsa intens.",
      "Bebelușul este dus în incubator imediat după naștere.",
      "Femeia este părăsită de partener și simte „gol în piept”.",
    ],
  },
  "Coriu (dermul profund)": {
    conflict: [
      "Conflict legat de un atac direct asupra integrității fizice sau simbolice, inclusiv rușine, abuz, murdărire.",
    ],
    exemple: [
      "Arsuri sau cicatrici rușinoase.",
      "Femeie care se simte „murdărită” după o agresiune sexuală.",
      "Umilință publică legată de corp (ex: body shaming).",
    ],
  },
  "Glande sebacee": {
    conflict: [
      "Conflict de atac sau conflict de „a te simți murdărit” - Conflictul apare atunci când persoana se simte „murdărită”, agresată fizic, criticată sau judecată pe bază de aspectul fizic (în special părul sau tenul). Legat de: imaginea proprie, păr, aspect estetic.",
    ],
    exemple: [
      "Adolescent tachinat pentru coșuri sau aspect.",
      "Băiat care este stresat de faptul că începe să chelească și „nu mai arată bine”.",
      "Fată care se simte urâtă după ce a fost părăsită.",
    ],
  },
  "Glande sudoripare": {
    conflict: [
      "Conflict de atac sau de „murdărire” - Acest conflict apare atunci când o persoană se simte: fizic atacată (de exemplu, lovită, zgâriată, agresată), verbal sau emoțional atacată, într-un mod care o face să simtă că „a fost pătată” în mod simbolic, umilită sau dezonorată, murdărită (la propriu sau la figurat).",
    ],
    exemple: [
      "Axile: conflict legat de miros personal, sexualitate, rușine.",
      "Palme: stres de performanță, „nu pot ține lucrurile sub control”.",
      "Tălpi: „nu am unde să fug”, sentiment de captivitate.",
      "Scalp: grijă pentru imaginea personală, păr, statut social.",
    ],
  },
  Epiderm: {
    conflict: [
      "Conflict de separare – Apare când cineva este „luat” de lângă noi sau ne simțim separați fizic de cineva drag.",
    ],
    exemple: [
      "Tânăr care pierde iubita și tânjește după apropierea ei.",
      "Mama căreia i se ia copilul din brațe.",
      "Dorința de atingere fizică ce nu e împlinită.",
    ],
  },
  "Mușchi scheletici": {
    conflict: [
      "Conflict motor – simți că nu poți fugi, scăpa, reacționa. Sentiment de paralizie simbolică.",
    ],
    exemple: [
      "Persoană ținută „prizonieră” într-o situație toxică (job, relație).",
      "Accident în care nu ai putut acționa suficient de repede.",
      "Copil forțat să stea „cuminte” și nemișcat.",
    ],
  },
  "Țesut conjunctiv": {
    conflict: [
      "Conflict de autodevalorizare – sentiment că nu ești suficient de bun, puternic sau util.",
    ],
    exemple: [
      "Persoană care se simte „slabă” fizic sau moral.",
      "Om care nu reușește să-și susțină familia și se simte inutil.",
      "Sportiv care nu mai performează.",
    ],
  },
  "Țesut adipos": {
    conflict: [
      "Autodevalorizare corporală – sentiment că nu ești suficient de atractiv sau „acceptabil” fizic.",
    ],
    exemple: [
      "Adolescent care este tachinat pentru greutatea sa.",
      "Bărbat care se compară cu alții mai „bine făcuți”.",
      "Femeie care se simte urâtă după naștere.",
    ],
  },
  "Oase și articulații": {
    conflict: [
      "Autodevalorizare profundă – sentimentul că „nu mai ai coloană”, că nu ești capabil să susții ceva important.",
    ],
    exemple: [
      "Om care își pierde locul de muncă și nu se mai simte demn.",
      "Pensionar care nu mai e „folositor”.",
      "Persoană umilită în public.",
    ],
  },
  Cartilaj: {
    conflict: [
      "Autodevalorizare localizată (flexibilitate, suport) - Simți că nu mai poți „face față” fizic sau mental unei presiuni.",
    ],
    exemple: [
      "Gânduri că „nu mai pot îndura” greutățile.",
      "Lipsă de adaptabilitate într-un context nou.",
      "Gânduri că „nu mai pot îndura” greutățile.",
    ],
  },
  Ligament: {
    conflict: [
      "Conflict de autodevalorizare – dar de intensitate mai ușoară decât în cazul oaselor - „Nu mai am valoare” / „Nu mai sunt bun(ă) la nimic” – dar într-un domeniu legat de mobilitate, flexibilitate, sprijin, stabilitate.",
    ],
    exemple: [
      "Un bărbat este retrogradat la muncă după ce ani la rând a fost un „stâlp” în echipă.",
      "Persoana simte că nu mai este capabilă să țină ceva stabil (familie, muncă, poziție).",
      "Un sportiv amator își pierde încrederea în propriul corp după ce suferă mai multe accidentări minore.",
      "Femeie simte că îi scapă familia de sub control, că nu mai poate „ține legăturile” între membrii familiei.",
    ],
  },
  Tendoane: {
    conflict: [
      "Autodevalorizare funcțională - Sentiment că nu mai poți „trage” în viață, nu mai ai forță.",
    ],
    exemple: [
      "Muncitor care nu mai poate lucra fizic.",
      "Sportiv cu accidentare repetată.",
      "Om cu dureri cronice care se simte inutil.",
    ],
  },
  "Periost (învelișul oaselor)": {
    conflict: [
      "Conflict sever de separare - Separare brutală care afectează profund identitatea și siguranța fizică.",
    ],
    exemple: [
      "Persoană deportată sau mutată forțat.",
      "Individ răpit, abuzat sau abandonat.",
      "Copil luat de părinți la divorț.",
    ],
  },
  "Dentină și oasele maxilarului": {
    conflict: [
      "Conflict de „mușcătură” – nu poți mușca - Nu poți ataca, apăra, „mânca” ce e al tău.",
    ],
    exemple: [
      "Angajat care nu poate răspunde șefului care îl umilește.",
      "Persoană care „înghite” nedreptăți fără a răspunde.",
      "Femeie care nu-și poate apăra copilul verbal.",
    ],
  },
  "Smalț dentar": {
    conflict: [
      "Conflict de „mușcătură” – nu ți se permite să muști - Reprimare externă – nu ești lăsat să te aperi.",
    ],
    exemple: [
      "Copil căruia părinții îi spun mereu „taci din gură”.",
      "Femeie care nu are voie să se apere în familie.",
      "Om care e șantajat și nu poate spune adevărul.",
    ],
  },
  "Mușchii maxilarului": {
    conflict: [
      "Autodevalorizare legată de forța verbală sau apărare - Sentiment că nu mai poți „strânge din dinți” sau te simți slab în fața unui conflict.",
    ],
    exemple: [
      "Persoană care nu mai poate suporta presiunea de la muncă.",
      "Individ care nu reușește să se impună într-un conflict.",
      "Om forțat să „îndure” în tăcere ani de zile.",
    ],
  },
  "Vase limfatice și ganglioni limfatici": {
    conflict: [
      "Conflict de autodevalorizare - Sentiment de slăbiciune, neputință, „nu sunt suficient de bun(ă)” – dar trăit într-o zonă specifică (unde apar ganglionii inflamați sau inflamații limfatice).",
    ],
    exemple: [
      "Mamă simte că nu a reușit să-și protejeze copilul → ganglion inflamat în zona gâtului.",
      "Un sportiv se simte „inutil” după ce e scos din echipă → inflamații în axilă sau picioare.",
      "Un elev se simte slab după ce a fost umilit → limfadenopatie în zona gâtului.",
    ],
  },
  Splină: {
    conflict: [
      "Conflict de sângerare sau rană (emoțional sau fizic) - Trăirea intensă a unei pierderi (simbolică sau reală) în care „s-a pierdut prea mult” sau „a curs sânge” (real sau metaforic).",
    ],
    exemple: [
      "După o intervenție chirurgicală traumatică → conflict cu aspect de „rănire”.",
      "Trăiește pierderea unei persoane în mod „brutal”, ca o tăietură internă.",
      "Cineva vede un accident grav → „am simțit că se rupea tot în mine”.",
    ],
  },
  "Artere și vene": {
    conflict: [
      "Conflict de autodevalorizare ușoară (asemănător cu cel din oase și articulații) - Simțul că „nu mai pot să țin fluxul vieții”, „nu mai sunt în stare să-mi mențin direcția”. Legat de circulație, curgere, continuitate în viață.",
    ],
    exemple: [
      "Un bărbat simte că a pierdut controlul în viața profesională → inflamație arterială.",
      "Persoană simte că nu mai e „în fluxul vieții” → hipertensiune arterială.",
      "Femeie în vârstă se simte inutilă → probleme la venele picioarelor (varice).",
    ],
  },
  "Miocard (ventricule)": {
    conflict: [
      "Conflict de copleșire / suprasolicitare - Trăit ca: „e prea mult pentru mine”, „nu mai pot face față”.",
    ],
    exemple: [
      "Un tată care trebuie să întrețină toată familia sub stres extrem.",
      "Femeie singură, bolnavă, fără ajutor, care simte că trebuie să ducă totul singură.",
    ],
  },
  "Miocard (atrii)": {
    conflict: [
      "„Nu pot mișca bucata de sânge” - simbolic: impotență funcțională, neputință în a face lucrurile să „circule” în viață.",
    ],
    exemple: [
      "Un medic care simte că „nu mai poate salva vieți”.",
      "Mamă care simte că nu-și mai poate influența copiii.",
    ],
  },
  "Endocard și valvele cardiace": {
    conflict: [
      "Condlict de autodevalorizare legată de control și direcție în viață.",
    ],
    exemple: [
      "Persoană simte că a pierdut capacitatea de a decide clar - „nu mai am direcție”.",
      "Sentiment de vinovăție că nu a reușit să oprească un eveniment tragic.",
    ],
  },
  Pericard: {
    conflict: ["Atac împotriva inimii (real sau simbolic)"],
    exemple: [
      "Un pacient cu istoric de infarct - trăiește un conflict de „atac” în inimă.",
      "Trăirea unei trădări profunde - „mi-a fost atacată inima”.",
    ],
  },
  "Artere și vene coronare": {
    conflict: ["Conflict teritorial (pierderea teritoriului, sexualitate)"],
    exemple: [
      "Bărbat divorțat care pierde custodia copilului - conflict de „pierdere a teritoriului”.",
      "Rivalitate sexuală (trăită ca o amenințare) - infarct miocardic.",
    ],
  },
  "Aortă și artere carotid": {
    conflict: ["Pierderea teritoriului / conflict sexual"],
    exemple: [
      "Femeie care simte că i-a fost „luată casa”.",
      "Un bărbat a cărui parteneră îl părăsește pentru alt bărbat.",
    ],
  },
  "Sinus carotidian": {
    conflict: ["Conflict de presiune intensă (trăit ca o constrângere masivă)"],
    exemple: [
      "„Simt că o să explodez”, „mă presează din toate părțile”. ",
      "Un manager aflat sub stres constant cu termene-limită zilnice.",
    ],
  },
};

function App() {
  const [organ, setOrgan] = useState("");
  const [diagnostic, setDiagnostic] = useState("");
  const [partea, setPartea] = useState("");
  const [simptome, setSimptome] = useState([]);
  const [durata, setDurata] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [treatment, setTreatment] = useState("");
  const [exampleText, setExampleText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (simptome.length < 2 || simptome.length > 3) {
      setError("Te rugăm să selectezi între 2 și 3 simptome.");
      return;
    }
    setError("");

    const simptomeText = simptome.join(", ");

    let tratament = "";
    let exemple = "";

    if (lateralDiagnoses.includes(diagnostic)) {
      const info = treatmentInfo[diagnostic]?.[partea];
      if (info) {
        tratament = info.conflict.join("<br /><br />");
        exemple = info.exemple.join("<br /><br />");
      } else {
        tratament = "Tratament nespecificat.";
        exemple = "";
      }
    } else {
      const info = treatmentInfo[diagnostic];
      if (info) {
        tratament = Array.isArray(info)
          ? info.join("<br /><br />")
          : info.conflict?.join("<br /><br />");
        exemple = info.exemple?.join("<br /><br />") || "";
      } else {
        tratament = "Tratament nespecificat.";
        exemple = "";
      }
    }

    const exemplu = exemple || "Exemplu nespecificat.";
    setExampleText(exemplu);

    let reflectie = "";
    if (durata === "1 zi" || durata === "2-3 zile") {
      reflectie = `\n\nPacientul trebuie să se gândească ce a făcut în ultimele 2-4 zile.`;
    }

    setResult(
      `<strong>Organ afectat:</strong> ${organ} ${
        partea ? `- Partea: ${partea}` : ""
      }<br />` +
        `<strong>Diagnostic:</strong> ${diagnostic}<br />` +
        `<strong>Simptome:</strong> ${simptomeText}<br />` +
        `<strong>Durata simptomelor:</strong> ${durata}<br />` +
        reflectie
    );
    setTreatment(
      `<strong>Conflictul:</strong><br />${tratament}<br /><br /><strong>Exemple:</strong><br />${exemple}`
    );
    setexemple(exemplu);
  };

  const handleSymptomChange = (value) => {
    setSimptome((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
    >
      <div style={{ width: "45%" }}>
        <h2>Formular Medical</h2>
        <form onSubmit={handleSubmit}>
          <label>Organul afectat:</label>
          <select
            value={organ}
            onChange={(e) => {
              setOrgan(e.target.value);
              setDiagnostic("");
            }}
          >
            <option value="">-- Selectează organul --</option>
            {organOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          {diagnosticOptions[organ] && (
            <>
              <label>Diagnostic medical:</label>
              <select
                value={diagnostic}
                onChange={(e) => setDiagnostic(e.target.value)}
              >
                <option value="">-- Selectează diagnosticul --</option>
                {diagnosticOptions[organ].map((diag) => (
                  <option key={diag} value={diag}>
                    {diag}
                  </option>
                ))}
              </select>
            </>
          )}

          {lateralDiagnoses.includes(diagnostic) && (
            <>
              <label>Partea:</label>
              <select
                value={partea}
                onChange={(e) => setPartea(e.target.value)}
              >
                <option value="">-- Selectează partea --</option>
                <option value="stanga">Stânga</option>
                <option value="dreapta">Dreapta</option>
              </select>
            </>
          )}

          <label>Simptome:</label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            {["Durere", "Umflare", "Greață", "Oboseală", "Febră"].map(
              (symptom) => (
                <label key={symptom}>
                  <input
                    type="checkbox"
                    value={symptom}
                    onChange={(e) => handleSymptomChange(symptom)}
                  />{" "}
                  {symptom}
                </label>
              )
            )}
          </div>

          <label>De cât timp te doare?</label>
          <select value={durata} onChange={(e) => setDurata(e.target.value)}>
            <option value="">-- Selectează perioada --</option>
            <option value="1 zi">De 1 zi</option>
            <option value="2-3 zile">De 2-3 zile</option>
            <option value="1 saptamana">De o săptămână</option>
            <option value="mai mult timp">De mai mult timp</option>
          </select>

          <br />
          <br />
          <button className="butonCuloare" type="submit">
            Trimite
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>

      <div
        style={{ width: "45%", borderLeft: "2px solid #ccc", paddingLeft: 20 }}
      >
        <h2 style={{ textAlign: "start" }}>Rezultate</h2>
        <div
          style={{ textAlign: "start" }}
          dangerouslySetInnerHTML={{ __html: result }}
        />
        <div
          style={{
            marginTop: 15,
            fontWeight: "bold",
            color: "green",
            lineHeight: "1.6",
            textAlign: "start",
          }}
          dangerouslySetInnerHTML={{ __html: treatment }}
        ></div>
      </div>
    </div>
  );
}

export default App;
