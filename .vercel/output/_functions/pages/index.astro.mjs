/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderHead, e as renderComponent, f as renderSlot, u as unescapeHTML } from '../chunks/astro/server_Ch7NOE27.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Download = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Download;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a download class="text-slate-400 hover:text-slate-500 dark:text-slate-600"${addAttribute(href, "href")} rel="noopener noreferrer"> <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path> </svg> </a>`;
}, "/Users/songdongwei/Documents/CV/tools/astro-resume/src/components/Download.astro", undefined);

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
const $$Astro = createAstro();
const $$Minimalist = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Minimalist;
  const { PDF_VIEW, FORCE_THEME = "" } = Object.assign(__vite_import_meta_env__, { FORCE_THEME: process.env.FORCE_THEME });
  const { title, pdfLink, noIndex, description } = Astro2.props.frontmatter;
  const initials = title.split(" ").map(([initial]) => initial.toUpperCase()).slice(0, 2);
  return renderTemplate`<html lang="en"${addAttribute(FORCE_THEME, "class")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description || title, "content")}>${noIndex && renderTemplate`<meta name="robots" content="noindex">`}<title>${title}</title>${renderHead()}</head> <body${addAttribute(!PDF_VIEW ? "bg-indigo-50 dark:bg-slate-900 sm:my-14" : "", "class")}> <div class="container mx-auto flex justify-center"> <article class="minimalist relative"> <div class="absolute top-4 rounded-sm bg-indigo-400 px-4 py-1 sm:left-8 sm:top-12"> <div class="flex h-fit select-none flex-col items-center text-sm font-bold"> ${initials.map((initial) => renderTemplate`<span>${initial}</span>`)} </div> </div> ${!PDF_VIEW && renderTemplate`<div class="not-prose absolute right-4 top-4"> ${renderComponent($$result, "Download", $$Download, { "href": pdfLink })} </div>`} ${renderSlot($$result, $$slots["default"])} </article> </div>  </body> </html>`;
}, "/Users/songdongwei/Documents/CV/tools/astro-resume/src/layouts/Minimalist.astro", undefined);

const html = () => "<h1 id=\"carl\">Carl</h1>\n<p><strong>Web3 Full Stack Developer</strong></p>\n<p>ShenZhen, China | <a href=\"mailto:silverwingsdw@gmail.com\">silverwingsdw@gmail.com</a> | <a href=\"http://carlportfolio.com\">http://carlportfolio.com</a></p>\n<p>Carl is a seasoned Web3 developer with extensive experience in blockchain technologies, smart contract development, and full-stack engineering. His expertise spans from designing secure and efficient DeFi protocols to integrating scalable web applications with blockchain systems.</p>\n<h2 id=\"work-experience\">Work Experience</h2>\n<h3 id=\"rho-markets\"><a href=\"https://rhomarkets.xyz/\">Rho Markets</a></h3>\n<h4 id=\"web3-full-stack-developer--may-2024---present\">Web3 Full Stack Developer | May 2024 - Present</h4>\n<ul>\n<li>Designed and developed core modules, including market management, lending mechanisms, and liquidation logic, ensuring secure and efficient protocol operations.</li>\n<li>Implemented and optimized smart contracts using <strong>Solidity</strong>, enhancing system stability and resistance to attacks.</li>\n<li>Integrated frontend with smart contracts, leveraging <strong>React</strong> and <strong>Web3.js</strong> to build user-friendly lending interfaces.</li>\n<li>Designed multi-asset interest rate calculation logic to improve user profitability.</li>\n<li>Managed off-chain data storage with <strong>PostgreSQL</strong> and <strong>Redis</strong>, ensuring high efficiency in processing and accessing large-scale data.</li>\n<li>Conducted smart contract security audits and addressed potential vulnerabilities to strengthen overall system security.</li>\n</ul>\n<h3 id=\"agilely\">Agilely</h3>\n<h4 id=\"web3-full-stack-developer--nov-2023---mar-2024\">Web3 Full Stack Developer | Nov 2023 - Mar 2024</h4>\n<ul>\n<li>Refactored and optimized <strong>Liquity</strong> smart contracts, designing decentralized lending and stablecoin generation mechanisms to enhance system security and scalability.</li>\n<li>Developed efficient liquidity pool management logic, enabling seamless asset deposits, withdrawals, and automated liquidation functionality.</li>\n<li>Enhanced stablecoin stability by optimizing minting mechanisms and designing a dynamic minting fee model.</li>\n<li>Built responsive user interfaces using <strong>React</strong> and <strong>Web3.js</strong>, facilitating effective user interaction with smart contracts.</li>\n</ul>\n<h3 id=\"worldfirst\">WorldFirst</h3>\n<h4 id=\"react-developer--apr-2021---oct-2023\">React Developer | Apr 2021 - Oct 2023</h4>\n<ul>\n<li>Led the development of the frontend interface for the WorldFirst platform, ensuring responsive design and enhanced user experience across devices.</li>\n<li>Implemented critical features, including the developer payment account management interface, enabling users to easily view and manage payment details.</li>\n<li>Optimized frontend performance with code splitting and lazy loading, reducing page load times and improving application responsiveness.</li>\n<li>Supported platform internationalization, catering to global users and boosting the product’s international competitiveness.</li>\n<li>Collaborated closely with backend teams using RESTful APIs to ensure data consistency and reliability.</li>\n</ul>\n<h3 id=\"rimedata\">RimeData</h3>\n<h4 id=\"full-stack-developer--mar-2020---mar-2021\">Full Stack Developer | Mar 2020 - Mar 2021</h4>\n<ul>\n<li>Developed data analysis services using <strong>Golang</strong>, supporting large-scale data processing requirements.</li>\n<li>Contributed to feature development and refactoring of Web, App, and Mini Program WebView platforms.</li>\n</ul>\n<h2 id=\"projects\">Projects</h2>\n<ul>\n<li><a href=\"https://www.rhomarkets.xyz/\">Rho Markets</a></li>\n<li><a href=\"https://agilely.io/\">Agilly</a></li>\n<li><a href=\"https://www.worldfirst.com/\">Worldfirst</a></li>\n<li><a href=\"https://rimedata.com/\">RimeData</a></li>\n</ul>\n<p>Innovative middle-out compression algorithm changing the way data is stored.</p>\n<h2 id=\"skills\">Skills</h2>\n<ul>\n<li><strong>Programming Languages:</strong> Proficient in <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>Rust</strong>, <strong>Golang</strong>, and <strong>Node.js</strong>.</li>\n<li><strong>Blockchain Expertise:</strong> Deep understanding of <strong>Solidity</strong>, <strong>Solana</strong>, <strong>EVM</strong>, and <strong>SVM</strong> mechanisms.</li>\n<li><strong>Frameworks:</strong> Experienced with <strong>Hardhat</strong>, <strong>Foundry</strong>, and <strong>Anchor Framework</strong>.</li>\n<li><strong>Tools &#x26; Libraries:</strong> Skilled in <strong>Web3.js</strong>, <strong>ethers.js</strong>, <strong>wagmi</strong>, <strong>solana-web3.js</strong>.</li>\n<li><strong>Security:</strong> Familiar with common vulnerabilities (e.g., reentrancy, integer overflow) and capable of implementing robust security measures.</li>\n</ul>\n<h2 id=\"education\">Education</h2>\n<h3 id=\"shenzhen-university\">Shenzhen University</h3>\n<h4 id=\"bachelor-of-computer-science--jun-2012---jan-2016\">Bachelor of Computer Science | Jun 2012 - Jan 2016</h4>\n<hr>\n<p>Thank you for taking the time to review my resume. I look forward to the opportunity to work together!</p>\n<p><a href=\"Carl_Resume.pdf\">Download PDF</a>{download=“Carl_Resume.pdf”}</p>";

				const frontmatter = {"title":"Carl - Resume","description":"Resume about Carl, a Web3 Full Stack Developer.","layout":"../layouts/Minimalist.astro","pdfLink":"Carl_Resume.pdf"};
				const file = "/Users/songdongwei/Documents/CV/tools/astro-resume/src/pages/index.md";
				const url = "";
				function rawContent() {
					return "   \n                    \n                                                            \n                                   \n                        \n   \n\n# Carl\n\n**Web3 Full Stack Developer**\n\nShenZhen, China | silverwingsdw@gmail.com | http://carlportfolio.com\n\nCarl is a seasoned Web3 developer with extensive experience in blockchain technologies, smart contract development, and full-stack engineering. His expertise spans from designing secure and efficient DeFi protocols to integrating scalable web applications with blockchain systems.\n\n## Work Experience\n\n### [Rho Markets](https://rhomarkets.xyz/)\n\n#### Web3 Full Stack Developer | May 2024 - Present\n\n- Designed and developed core modules, including market management, lending mechanisms, and liquidation logic, ensuring secure and efficient protocol operations.\n- Implemented and optimized smart contracts using **Solidity**, enhancing system stability and resistance to attacks.\n- Integrated frontend with smart contracts, leveraging **React** and **Web3.js** to build user-friendly lending interfaces.\n- Designed multi-asset interest rate calculation logic to improve user profitability.\n- Managed off-chain data storage with **PostgreSQL** and **Redis**, ensuring high efficiency in processing and accessing large-scale data.\n- Conducted smart contract security audits and addressed potential vulnerabilities to strengthen overall system security.\n\n### Agilely\n\n#### Web3 Full Stack Developer | Nov 2023 - Mar 2024\n\n- Refactored and optimized **Liquity** smart contracts, designing decentralized lending and stablecoin generation mechanisms to enhance system security and scalability.\n- Developed efficient liquidity pool management logic, enabling seamless asset deposits, withdrawals, and automated liquidation functionality.\n- Enhanced stablecoin stability by optimizing minting mechanisms and designing a dynamic minting fee model.\n- Built responsive user interfaces using **React** and **Web3.js**, facilitating effective user interaction with smart contracts.\n\n### WorldFirst\n\n#### React Developer | Apr 2021 - Oct 2023\n\n- Led the development of the frontend interface for the WorldFirst platform, ensuring responsive design and enhanced user experience across devices.\n- Implemented critical features, including the developer payment account management interface, enabling users to easily view and manage payment details.\n- Optimized frontend performance with code splitting and lazy loading, reducing page load times and improving application responsiveness.\n- Supported platform internationalization, catering to global users and boosting the product's international competitiveness.\n- Collaborated closely with backend teams using RESTful APIs to ensure data consistency and reliability.\n\n### RimeData\n\n#### Full Stack Developer | Mar 2020 - Mar 2021\n\n- Developed data analysis services using **Golang**, supporting large-scale data processing requirements.\n- Contributed to feature development and refactoring of Web, App, and Mini Program WebView platforms.\n\n## Projects\n\n- [Rho Markets](https://www.rhomarkets.xyz/)\n- [Agilly](https://agilely.io/)\n- [Worldfirst](https://www.worldfirst.com/)\n- [RimeData](https://rimedata.com/)\n\nInnovative middle-out compression algorithm changing the way data is stored.\n\n## Skills\n\n- **Programming Languages:** Proficient in **JavaScript**, **TypeScript**, **Rust**, **Golang**, and **Node.js**.\n- **Blockchain Expertise:** Deep understanding of **Solidity**, **Solana**, **EVM**, and **SVM** mechanisms.\n- **Frameworks:** Experienced with **Hardhat**, **Foundry**, and **Anchor Framework**.\n- **Tools & Libraries:** Skilled in **Web3.js**, **ethers.js**, **wagmi**, **solana-web3.js**.\n- **Security:** Familiar with common vulnerabilities (e.g., reentrancy, integer overflow) and capable of implementing robust security measures.\n\n## Education\n\n### Shenzhen University\n\n#### Bachelor of Computer Science | Jun 2012 - Jan 2016\n\n---\n\nThank you for taking the time to review my resume. I look forward to the opportunity to work together!\n\n[Download PDF](Carl_Resume.pdf){download=\"Carl_Resume.pdf\"}";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"carl","text":"Carl"},{"depth":2,"slug":"work-experience","text":"Work Experience"},{"depth":3,"slug":"rho-markets","text":"Rho Markets"},{"depth":4,"slug":"web3-full-stack-developer--may-2024---present","text":"Web3 Full Stack Developer | May 2024 - Present"},{"depth":3,"slug":"agilely","text":"Agilely"},{"depth":4,"slug":"web3-full-stack-developer--nov-2023---mar-2024","text":"Web3 Full Stack Developer | Nov 2023 - Mar 2024"},{"depth":3,"slug":"worldfirst","text":"WorldFirst"},{"depth":4,"slug":"react-developer--apr-2021---oct-2023","text":"React Developer | Apr 2021 - Oct 2023"},{"depth":3,"slug":"rimedata","text":"RimeData"},{"depth":4,"slug":"full-stack-developer--mar-2020---mar-2021","text":"Full Stack Developer | Mar 2020 - Mar 2021"},{"depth":2,"slug":"projects","text":"Projects"},{"depth":2,"slug":"skills","text":"Skills"},{"depth":2,"slug":"education","text":"Education"},{"depth":3,"slug":"shenzhen-university","text":"Shenzhen University"},{"depth":4,"slug":"bachelor-of-computer-science--jun-2012---jan-2016","text":"Bachelor of Computer Science | Jun 2012 - Jan 2016"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Minimalist, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
