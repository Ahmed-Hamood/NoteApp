;(() => {
 "use strict"
 function e(e) {
  let t = null,
   n = null,
   l = null,
   s = null,
   i = null,
   c = null,
   o = null
  const a = (e, t, a, r, u, d, m = { subject_Path: "" }, p = { subject_Path: "" }, g = { subject_Path: "" }, h = { subject_Path: "" }, b = { subject_Path: "" }) => (
   (n = "folder" == e || "custom-folder" == e ? "arrow svg menu-arrow-svg" : "hierarchy-line"),
   (l = "folder" === e ? "menu-list" : ""),
   (s = "file" === e ? "file-type" : "folder-type"),
   (c = u + m.subject_Path + p.subject_Path + g.subject_Path + h.subject_Path + b.subject_Path + r),
   (o = d ? "true" : "false"),
   (i =
    "folder" == e
     ? `<img class="subject-icon folder-icon" src="${a}" alt="image">`
     : "custom-folder" == e
     ? `<img class="subject-icon custom-icon" src="${a}" alt="image">`
     : `<i class="subject-icon svg ${a} file-icon" alt="image"></i>`),
   `\n    <a class="subject-title-link sub-menu-title ${s}" urlPath="/Docs${c}" id="${l}" hasFolder="${o}">\n      <span class="${n}"></span>\n      ${i}\n      <span class="subject-name">${t}</span>\n    </a>\n    `
  )
  return `\n   <article class="subject-content">\n   ${
   ((r = e.main_subject_name),
   (u = e.subject_Path),
   (d = e.subject_img_icon),
   (m = e.type),
   (t = "folder" == m ? "folder-icon" : "custom-icon"),
   `\n     <a class="subject-title-link folder-type main-folder" urlPath="/Docs${u}" id="menu-list">\n       <i class="arrow svg menu-arrow-svg"></i>\n       <img class="subject-icon ${t}" src="${d}" alt="image">\n       <span class="subject-name"> ${r} </span>\n     </a>\n  `)
  }\n   <section class="subject-list-menu one-level-menu">\n   ${e.subject_list_menu
   .map(t =>
    0 == t.subject_list_menu.length
     ? a(t.type, t.sub_subject_name, t.subject_img_icon, t.subject_Path, e.subject_Path, t.hasFolder)
     : `\n       ${a(t.type, t.sub_subject_name, t.subject_img_icon, t.subject_Path, e.subject_Path, t.hasFolder)}\n       <section class="subject-list-menu two-level-menu">\n         ${t.subject_list_menu
        .map(n =>
         0 == n.subject_list_menu.length
          ? a(n.type, n.sub_subject_name, n.subject_img_icon, n.subject_Path, e.subject_Path, n.hasFolder, t)
          : `\n             ${a(
             n.type,
             n.sub_subject_name,
             n.subject_img_icon,
             n.subject_Path,
             e.subject_Path,
             n.hasFolder,
             t
            )}\n             <section class="subject-list-menu three-level-menu">\n               ${n.subject_list_menu
             .map(l =>
              0 == l.subject_list_menu.length
               ? a(l.type, l.sub_subject_name, l.subject_img_icon, l.subject_Path, e.subject_Path, l.hasFolder, t, n)
               : `\n                    ${a(
                  l.type,
                  l.sub_subject_name,
                  l.subject_img_icon,
                  l.subject_Path,
                  e.subject_Path,
                  l.hasFolder,
                  t,
                  n
                 )}\n                    <section class="subject-list-menu four-level-menu">\n                      ${l.subject_list_menu
                  .map(s =>
                   0 == s.subject_list_menu.length
                    ? a(s.type, s.sub_subject_name, s.subject_img_icon, s.subject_Path, e.subject_Path, s.hasFolder, t, n, l)
                    : `\n                           ${a(
                       s.type,
                       s.sub_subject_name,
                       s.subject_img_icon,
                       s.subject_Path,
                       e.subject_Path,
                       s.hasFolder,
                       t,
                       n,
                       l
                      )}\n                           <section class="subject-list-menu five-level-menu">                   \n                           ${s.subject_list_menu
                       .map(i =>
                        0 == i.subject_list_menu.length
                         ? a(i.type, i.sub_subject_name, i.subject_img_icon, i.subject_Path, e.subject_Path, i.hasFolder, t, n, l, s)
                         : `\n                               ${a(
                            i.type,
                            i.sub_subject_name,
                            i.subject_img_icon,
                            i.subject_Path,
                            e.subject_Path,
                            i.hasFolder,
                            t,
                            n,
                            l,
                            s
                           )}\n                                <section class="subject-list-menu six-level-menu"> \n                                ${i.subject_list_menu
                            .map(c => a(c.type, c.sub_subject_name, c.subject_img_icon, c.subject_Path, e.subject_Path, c.hasFolder, t, n, l, s, i))
                            .join("")}\n                                </section>\n                               `
                       )
                       .join("")}\n                           </section>\n                           `
                  )
                  .join("")}\n                    </section>\n                    `
             )
             .join("")}\n             </section>\n             `
        )
        .join("")}\n       </section>\n       `
   )
   .join("")}\n   `
  var r, u, d, m
 }
 let t = {
   main_subject_name: "Sample",
   subject_img_icon: "/_images/subject_icons/JS.png",
   type: "custom-folder",
   subject_Path: "/Sample",
   subject_list_menu: [
    {
     sub_subject_name: "Express",
     subject_img_icon: "/_images/subject_icons/Express.png",
     type: "custom-folder",
     subject_Path: "/express",
     subject_list_menu: [
      {
       sub_subject_name: "Authentication",
       subject_img_icon: "/_images/icons/folder-close-icon.png",
       type: "folder",
       subject_Path: "/Authentication",
       subject_list_menu: [{ sub_subject_name: "Helmet", subject_img_icon: "white-file-svg", type: "file", hasFolder: !0, subject_Path: "/Helmet.html", subject_list_menu: [] }],
      },
      {
       sub_subject_name: "Utilities",
       subject_img_icon: "/_images/icons/folder-close-icon.png",
       type: "folder",
       subject_Path: "/Utilities",
       subject_list_menu: [{ sub_subject_name: "Moment", subject_img_icon: "green-file-svg", type: "file", subject_Path: "/Moment.html", subject_list_menu: [] }],
      },
      { sub_subject_name: "Installation 123", subject_img_icon: "red-file-svg", type: "file", subject_Path: "/Installation.html", subject_list_menu: [] },
      { sub_subject_name: "Message", subject_img_icon: "red-file-svg", type: "file", subject_Path: "/message.html", subject_list_menu: [] },
     ],
    },
    {
     sub_subject_name: "python_sample",
     subject_img_icon: "/_images/icons/folder-close-icon.png",
     type: "folder",
     subject_Path: "/python_sample",
     subject_list_menu: [{ sub_subject_name: "Sample", subject_img_icon: "green-file-svg", type: "file", subject_Path: "/sample.html", subject_list_menu: [] }],
    },
   ],
  },
  n = {
   main_subject_name: "Node.js",
   subject_img_icon: "/_images/subject_icons/nodejs.png",
   type: "custom-folder",
   subject_Path: "/nodejs",
   subject_list_menu: [
    {
     sub_subject_name: "Express.js",
     subject_img_icon: "/_images/subject_icons/Express.png",
     type: "custom-folder",
     subject_Path: "/expressjs",
     subject_list_menu: [
      { sub_subject_name: "Installation", subject_img_icon: "red-file-svg", type: "file", subject_Path: "/Installation.html", subject_list_menu: [] },
      { sub_subject_name: "Documentation", subject_img_icon: "yellow-file-svg", type: "file", subject_Path: "/Documentation.html", hasFolder: !0, subject_list_menu: [] },
      { sub_subject_name: "Most Used", subject_img_icon: "green-file-svg", type: "file", subject_Path: "/Documentation_1.html", hasFolder: !0, subject_list_menu: [] },
     ],
    },
   ],
  },
  l = {
   main_subject_name: "Svelte",
   subject_img_icon: "/_images/subject_icons/svelte.png",
   type: "custom-folder",
   subject_Path: "/svelte",
   subject_list_menu: [
    { sub_subject_name: "Getting Started", subject_img_icon: "/_images/subject_icons/Express.png", type: "file", subject_img_icon: "yellow-file-svg", subject_Path: "/Getting_Started.html", subject_list_menu: [] },
   ],
  },
  s = {
   main_subject_name: "React",
   subject_img_icon: "/_images/subject_icons/react.png",
   type: "custom-folder",
   subject_Path: "/React",
   subject_list_menu: [
    {
     sub_subject_name: "React web",
     subject_img_icon: "/_images/subject_icons/react.png",
     type: "custom-folder",
     subject_Path: "/React_web",
     subject_list_menu: [{ sub_subject_name: "Documentation", subject_img_icon: "green-file-svg", type: "file", subject_Path: "/Documentation.html", hasFolder: !0, subject_list_menu: [] }],
    },
    {
     sub_subject_name: "React native",
     subject_img_icon: "/_images/subject_icons/react-native.png",
     type: "custom-folder",
     subject_Path: "/React_native",
     subject_list_menu: [{ sub_subject_name: "Documentation", subject_img_icon: "yellow-file-svg", type: "file", subject_Path: "/Documentation.html", hasFolder: !0, subject_list_menu: [] }],
    },
   ],
  },
  i = {
   main_subject_name: "MongoDB",
   subject_img_icon: "/_images/subject_icons/MongoDB.png",
   type: "custom-folder",
   subject_Path: "/MongoDB",
   subject_list_menu: [
    {
     sub_subject_name: "Mongoose",
     subject_img_icon: "/_images/icons/folder-close-icon.png",
     type: "folder",
     subject_Path: "/Mongoose",
     subject_list_menu: [{ sub_subject_name: "Getting Started", subject_img_icon: "red-file-svg", type: "file", hasFolder: !1, subject_Path: "/Getting_Started.html", subject_list_menu: [] }],
    },
    { sub_subject_name: "Documentation", subject_img_icon: "red-file-svg", type: "file", hasFolder: !0, subject_Path: "/Documentation.html", hasFolder: !0, subject_list_menu: [] },
   ],
  },
  c = {
   main_subject_name: "Git",
   subject_img_icon: "/_images/subject_icons/Git.png",
   type: "custom-folder",
   subject_Path: "/Git",
   subject_list_menu: [
    { sub_subject_name: "Getting Started", subject_img_icon: "red-file-svg", type: "file", subject_Path: "/Getting_Started.html", subject_list_menu: [] },
    { sub_subject_name: "Documentation", subject_img_icon: "yellow-file-svg", type: "file", hasFolder: !0, subject_Path: "/Documentation.html", subject_list_menu: [] },
   ],
  },
  o = {
   main_subject_name: "Docker",
   subject_img_icon: "/_images/subject_icons/Docker.png",
   type: "custom-folder",
   subject_Path: "/Docker",
   subject_list_menu: [
    { sub_subject_name: "Getting Started", subject_img_icon: "blue-file-svg", type: "file", subject_Path: "/Getting_Started.html", subject_list_menu: [] },
    { sub_subject_name: "Documentation", subject_img_icon: "red-file-svg", type: "file", subject_Path: "/Documentation.html", subject_list_menu: [] },
   ],
  },
  a = {
   main_subject_name: "Python",
   subject_img_icon: "/_images/subject_icons/python.png",
   type: "custom-folder",
   subject_Path: "/Python",
   subject_list_menu: [
    { sub_subject_name: "Getting Started", subject_img_icon: "blue-file-svg", type: "file", subject_Path: "/Getting_Started.html", subject_list_menu: [] },
    { sub_subject_name: "Tutorial", subject_img_icon: "red-file-svg", type: "file", subject_Path: "/Documentation.html", subject_list_menu: [] },
   ],
  }
 let r = null,
  u = null,
  d = 0
 function m(e) {
  let t = document.querySelector(".table-topic-content"),
   n = new URLSearchParams(window.location.search)
  if (
   ((r = document.querySelectorAll([".nav-sub-title", ".nav-sub-sub-title", ".nav-sub-sub-sub-title"])),
   (u = document.querySelectorAll([".sub-title", ".sub-sub-title", ".sub-sub-sub-title", "get-title"])),
   console.log("Enter Scroll"),
   document.querySelector(".side-table-topic-content").classList.remove("show"),
   e)
  ) {
   if (n.has("newTab")) {
    let e = document.querySelector(".side-table-topic-content")
    ;(e.style.opacity = "0"), (e.style.display = "block"), (e.style.width = e.offsetWidth + 150 + "px")
   }
   ;(d = t.scrollHeight + 100), document.getElementById("doc-content-render-container").addEventListener("scroll", p)
  } else document.getElementById("doc-content-render-container").removeEventListener("scroll", p)
 }
 function p(e) {
  let t = null,
   n = ""
  d <= e.target.scrollTop ? document.querySelector(".side-table-topic-content").classList.add("show") : document.querySelector(".side-table-topic-content").classList.remove("show"),
   u.forEach((t, l) => {
    e.target.scrollTop >= t.offsetTop && (n = l)
   }),
   r.forEach(e => {
    e.classList.remove("nav-active"), (t = e.children[0].getAttribute("href").substring(1)), t == n && e.classList.add("nav-active")
   })
 }
 function g(e, t) {
  let n = "",
   l = "",
   s = e.getAttribute("cli-username"),
   i = e.getAttribute("cli-pc-name"),
   c = e.getAttribute("cli-current-directory"),
   o = e.getAttribute("cli-user-type")
  return "command" == e.getAttribute("line-type")
   ? ((n = e.getAttribute("line-val")),
     (s = s || t.username_cli),
     (i = i || t.pc_name_cli),
     (c = c || t.current_directory_cli),
     (o = o || t.user_type_cli),
     (l = `<span class="username_pc_style">${s}@${i}</span>:<span class="directory_style">${c}</span><span class="sign_style">${o}</span>`),
     `\n  <div class="cli-input-line-row">\n   <p class="cli-prompt-line-text">${l}</p>\n   <p class="cli-command-input-text">${n}</p>\n  </div>\n  `)
   : "output" == e.getAttribute("line-type")
   ? ((n = e.innerHTML.trim()), `\n  <div class="cli-output-line-row"><pre class="cli-command-output-text">\n  <code class="language-">\n              ${n}</code></pre></div>\n  `)
   : "comment" == e.getAttribute("line-type")
   ? ((n = e.getAttribute("line-val")), `\n  <div class="cli-comment-line-row">\n    <p class="cli-comment-line-text"># ${n}</p>\n  </div>\n  `)
   : void 0
 }
 function h(e = null, t = !1) {
  document.querySelector(".subject-topics-list-container")
   ? ((function () {
      let e,
       t,
       n = document.querySelectorAll(".topic-title-link"),
       l = "",
       s = ""
      n.forEach(n => {
       ;(e = location.hash.split("#")),
        (t = n.getAttribute("path").split("/")),
        t.shift(),
        e.shift(),
        e.pop(),
        n.getAttribute("ref_pos") && (s = `refPos=${n.getAttribute("ref_pos")}&`),
        (n.href = location.origin + `/?${s}newTab&topicLink#` + e.join("#") + "#" + t.join("#")),
        n.classList.contains("sub-link") || n.insertAdjacentHTML("beforebegin", "<button class='topic-view-list-btn' title='click to view table content'> ... </button>")
      }),
       n.forEach(t => {
        t.addEventListener("click", n => {
         n.preventDefault(),
          (e = location.hash.split("#")),
          e.shift(),
          e.pop(),
          (l = location.origin + "/" + e.join("/") + t.getAttribute("path")),
          n.target.getAttribute("ref_pos") ? I(l, !0, !1, !0, !1, n.target.getAttribute("ref_pos")) : I(l, !0, !1, !0)
        })
       }),
       document.querySelector(".subject-topics-list-container").insertAdjacentHTML("afterbegin", "<button id='menu-table-content-active-btn'> Enable Table Content </button>")
     })(),
     (function () {
      let e,
       t = document.querySelector(".subject-main-title"),
       n = document.querySelectorAll(".topic-view-list-btn"),
       l = document.getElementById("menu-table-content-active-btn"),
       s = document.getElementById("doc-content-render-container"),
       i = null,
       c = !1,
       o = "<b>Click</b> on the button beside any topic title below to view it's table content list",
       a = `\n  <div class='doc-menu-table-content-subject-viewer'> \n    <div class='msg-text'> <p> ${o} </p>  </div>\n    <p class='doc-table-content' hasData='false'> </p>\n  </div>`
      t.insertAdjacentHTML("afterend", a),
       n.forEach((e, t) => {
        e.id = "no-" + t
       })
      let r = document.querySelector(".doc-menu-table-content-subject-viewer"),
       u = document.querySelector(".msg-text"),
       d = document.querySelector(".msg-text p"),
       m = document.querySelector(".doc-table-content")
      function p(e) {
       n.forEach(t => {
        e ? t.addEventListener("click", g) : t.removeEventListener("click", g)
       })
      }
      async function g(t) {
       i != t.target.id &&
        (n.forEach(e => e.classList.remove("active")),
        t.target.classList.add("active"),
        v("disabled"),
        h('\n <div class="spinner-content" style="height:31px;">\n  <div class="spinner-wheel" style="border-top-color: #0cf36d;"></div>\n </div>'),
        (e = await (async function (e) {
         let t, n, l, s
         const i = new DOMParser()
         ;(t = location.hash.split("#")), t.shift(), t.pop(), (n = location.origin + "/" + t.join("/") + e)
         let c = await fetch(n)
         const o = await c.text(),
          a = i.parseFromString(o, "text/html")
         return (l = a.querySelectorAll([".sub-title", ".sub-sub-title", ".sub-sub-sub-title"])), (s = a.querySelector(".main-title")), { mainTitle: s, otherTitles: l }
        })(t.target.nextSibling.getAttribute("path")).catch(e => {
         console.log("Error: ", e),
          h('<span class="LinkError"> Error While Fetching Link ..... </span>'),
          setTimeout(() => {
           "true" != m.getAttribute("hasData")
            ? (n.forEach(e => {
               e.classList.remove("active")
              }),
              h(o))
            : (b(),
              n.forEach(e => {
               e.classList.remove("active"), i == e.id && e.classList.add("active")
              })),
            v("enabled")
          }, 4e3)
        })),
        (function (e, t) {
         let n,
          l,
          s,
          i = "",
          c = ""
         ;(l = location.hash.split("#")),
          (s = t.split("/")),
          s.shift(),
          l.shift(),
          l.pop(),
          0 != e.otherTitles.length
           ? e.otherTitles.forEach((e, t) => {
              e.classList.contains("sub-title") && (c = "menu-nav-sub-title"),
               e.classList.contains("sub-sub-title") && (c = "menu-nav-sub-sub-title"),
               e.classList.contains("sub-sub-sub-title") && (c = "menu-nav-sub-sub-sub-title"),
               (n = location.origin + `/?refPos=${t}&newTab&topicLink#` + l.join("#") + "#" + s.join("#")),
               (i += `<li class="${c}"> <a href="${n}" target="_blank" title="Open this topic in a new tap"> ${e.innerHTML} </a></li>`)
             })
           : (i += `<li class="${c}"> No Topic Titles </li>`),
          setTimeout(() => {
           null != e.mainTitle
            ? ((m.innerHTML = `\n           <h1> ${e.mainTitle.innerHTML} </h1>\n           <ul class="doc-menu-table-list-content">\n             ${i}\n           </ul>\n            `),
              m.setAttribute("hasData", !0),
              v("enabled"),
              b())
            : ((m.innerHTML = " <h1> No Data </h1>"), v("enabled"), b())
          }, 1500)
        })(e, t.target.nextSibling.getAttribute("path")),
        (i = t.target.id))
      }
      function h(e) {
       ;(u.style.display = "flex"), (m.style.display = "none"), (r.style.background = "#292828"), e && (d.innerHTML = e), (s.scrollTop = 0)
      }
      function b() {
       ;(u.style.display = "none"), (m.style.display = "block"), (r.style.background = ""), (s.scrollTop = 0)
      }
      function y(e) {
       e
        ? (l.innerHTML = "Enable Table Content")
        : ((l.disabled = !0),
          (l.style.opacity = 0.5),
          (l.style["pointer-events"] = "none"),
          (l.innerHTML = "Disable Table Content"),
          setTimeout(() => {
           ;(l.disabled = !1), (l.style.opacity = 1), (l.style["pointer-events"] = "all")
          }, 2e3))
      }
      function v(e) {
       "disabled" == e
        ? n.forEach(e => {
           ;(e.disabled = !0), (e.style.opacity = 0.3), (e.style["pointer-events"] = "none")
          })
        : n.forEach(e => {
           ;(e.disabled = !1), (e.style.opacity = 1), (e.style["pointer-events"] = "auto")
          })
      }
      l &&
       (l.addEventListener("click", e => {
        e.preventDefault(), c ? ((c = !1), r.classList.remove("view"), n.forEach(e => e.classList.remove("view")), y(!c), p(c)) : ((c = !0), r.classList.add("view"), n.forEach(e => e.classList.add("view")), y(!c), p(c))
       }),
       h(null))
     })(),
     window.innerWidth > 1900 && m(!1),
     window.innerWidth > 1500 && ((document.querySelector(".nav-header-container").style["max-width"] = "1300px"), (document.getElementById("doc-content-render").style["max-width"] = "1300px")))
   : ((document.querySelector(".nav-header-container").style["max-width"] = ""),
     (document.getElementById("doc-content-render").style["max-width"] = ""),
     (function () {
      let e = document.getElementById("doc-content-render-container")
      e.scrollHeight > e.clientHeight &&
       ((document.getElementById("doc-content-render").innerHTML += "<div class='auto-top-scroll'></div>"),
       document.querySelector(".auto-top-scroll").addEventListener("click", () => {
        e.scrollTop = 0
       }))
     })(),
     (function () {
      const e = document.querySelectorAll([".sub-title", ".sub-sub-title", ".sub-sub-sub-title"]),
       t = document.querySelector(".main-title"),
       n = document.querySelector(".no-table-content"),
       l = document.querySelector(".table-content"),
       s = document.querySelector(".side-table-topic-content")
      let i = "",
       c = "",
       o = "",
       a = ""
      if (0 == e.length || n) window.innerWidth > 1900 && m(!1)
      else {
       e.forEach((e, t) => {
        e.classList.contains("sub-title") && (a = "nav-sub-title"),
         e.classList.contains("sub-sub-title") && (a = "nav-sub-sub-title"),
         e.classList.contains("sub-sub-sub-title") && (a = "nav-sub-sub-sub-title"),
         (e.id = `${t}`),
         (o += `<li class="${a}"> <a href="#${t}"> ${e.innerHTML} </a></li>`)
       }),
        (i = `\n   <div class="table-topic-content">\n    <h1>Table Content</h1>\n    <ul class="table-list-content">\n      ${o}\n    </ul>\n   </div>\n   `),
        (c = `\n    <h1>Table Content</h1>\n    <ul class="side-table-list-content">\n      ${o}\n    </ul>\n   `),
        l ? (l.innerHTML = i) : t && t.insertAdjacentHTML("afterend", i),
        window.innerWidth > 1900 && ((s.innerHTML = ""), t && ((s.innerHTML += c), m(!0)))
       let n = [".table-list-content li a", ".side-table-list-content li a"]
       document.querySelectorAll(n).forEach(e => {
        e.addEventListener("auxclick", e => {
         1 === e.button && e.preventDefault()
        })
       }),
        setTimeout(() => {
         document.querySelectorAll(".table-list-content li").forEach((e, t) => {
          setTimeout(() => {
           e.classList.add("show")
          }, 100 + 100 * t)
         })
        }, 600)
      }
     })(),
     (function () {
      let e = document.querySelectorAll("[tab-switch-content]")
      if (0 != e.length) {
       let t = [],
        n = "",
        l = "",
        s = "",
        i = !1,
        c = null
       e.forEach(e => {
        ;(t = e.children), e.classList.add("tab-container"), (n = ""), (l = ""), (c = !1)
        for (let e = 0; e < t.length; e++)
         (s = t[e].getAttribute("tab-title")),
          (i = t[e].hasAttribute("active")),
          (s = s || t[e].children[0].getAttribute("title-value")),
          (s = s || "Example"),
          c || ((i = i ? "active" : ""), (c = !!i)),
          (n += `<button class="tab-btn ${i || ""}">${s}</button>`),
          (l += `\n      <div class="tab-content">\n       ${t[e].innerHTML}\n      </div>\n      `)
        e.innerHTML = `\n      <div class="btn_tabs">\n        ${n}\n      </div>\n    \x3c!-- ########### Begin main tab content ########### --\x3e\n    <div class="main-tab-content">\n        ${l}\n    </div>\n    \x3c!-- ########### End main tab content ########### --\x3e\n   `
       })
      }
     })(),
     (function () {
      function e(e, t) {
       let n = e.target.parentElement.parentElement.lastElementChild.children,
        l = e.target.parentElement.children
       for (let e = 0; e < l.length; e++) l[e].classList.remove("active")
       for (let e = 0; e < n.length; e++) n[e].classList.contains("tab-content") && n[e].classList.add("disableTab")
       e.target.classList.add("active"), e.target.parentElement.parentElement.lastElementChild.children[t].classList.remove("disableTab")
      }
      document.querySelectorAll(".main-tab-content").forEach(e => {
       for (let t = 0; t < e.children.length; t++) e.previousElementSibling.children[t].classList.contains("active") || e.children[t].classList.add("disableTab")
      }),
       document.querySelectorAll(".btn_tabs").forEach(t => {
        for (let n = 0; n < t.children.length; n++)
         t.children[n].addEventListener("click", t => {
          e(t, n)
         })
       })
     })(),
     document.querySelectorAll(["[js-content]", "[js-jsx-content]", "[js-json-content]"]).forEach(e => {
      let t = e.getAttribute("title-value") || "Example",
       n = e.getAttribute("line-num") || "0",
       l = e.firstElementChild.innerHTML.trim() || null,
       s = "",
       i = 0 == (l.match(/\n/gi) || []).length ? "top: 0.8rem;right:2.2rem;" : "top: 2.9rem;",
       c = "",
       o = "",
       a = ""
      e.hasAttribute("js-content") && ((s = "language-javascript js"), (e.className = "js-block js-code js-content pre-block")),
       e.hasAttribute("js-jsx-content") && ((s = "language-jsx js"), (e.className = "js-block js-code react-code js-content pre-block")),
       e.hasAttribute("js-json-content") && ((s = "language-json"), (e.className = "js-block json-code js-content pre-block")),
       e.hasAttribute("no-title-value") && (t = null),
       e.hasAttribute("no-line-num") && (n = null),
       n && t
        ? ((c = '<i class="svg lock-svg js-lock-btn" style="top: 0.65rem; padding:0.62rem"></i>'),
          (o = '<span class="text-lang" title="Unlock Content" style="margin-right: 0">JavaScript</span>'),
          (a = '<i title="copy" class="copyJSCodeClipboard svg copy-svg" style="top: 3.0rem;"></i>'))
        : !n && t
        ? ((c = '<i class="svg lock-svg js-lock-btn" style="display: none"></i>'),
          (o = '<span class="text-lang" title="Unlock Content" style=\'margin-right: 0rem; padding-right: 0.7rem;\'>JavaScript</span>'),
          (a = '<i title="copy" class="copyJSCodeClipboard svg copy-svg" style="top: 3.2rem;"> </i>'))
        : n && !t
        ? ((o = '<span class="text-lang" title="Unlock Content" style=\'display: none\'>JavaScript</span>'),
          (c = `<i class="svg lock-svg js-lock-btn" style="${i} padding: 0.7rem"></i>`),
          (a = '<i title="copy" class="copyJSCodeClipboard svg copy-svg" style="top: 0.8rem;"></i>'))
        : n ||
          t ||
          ((c = '<i class="svg lock-svg js-lock-btn" style="display: none"></i>'),
          (o = '<span class="text-lang" title="Unlock Content" style=\'display: none\'>JavaScript</span>'),
          (a = '<i title="copy" class="copyJSCodeClipboard svg copy-svg" style="top: 0.8rem;"></i>')),
       (e.innerHTML = `\n    <div class="block-header" style="${t ? "" : "height: 0"}">\n      <div class="block-title" style="${
        t ? "" : "display: none"
       }"> ${t} </div> \n      ${o}\n      ${a}\n      ${c}\n    </div>\n    <div class="block-content">\n    <div class="js-line-num" data-highlight-num="${n}" style="${
        n ? "" : "display: none"
       }" pointer-event="on"> </div> \n      <pre style="${n ? "" : "user-select: text;"}">\n        <code class="${s}">\n                    ${l}</code></pre></div>`)
     }),
     document.querySelectorAll(".js-line-num").forEach(e => {
      let t = e.nextElementSibling.textContent,
       n = 0,
       l = e.dataset.highlightNum
      l && (l = l.split(","))
      let s = t.match(/\n/gi) || [],
       i = null,
       c = "",
       o = ""
      ;(n = s.length ? s.length + 1 : 1), (e.style.width = n >= 1e3 ? `${e.offsetWidth + 3}px` : "")
      for (var a = 1; a < n; a++)
       (i = document.createElement("li")),
        (i.innerHTML = a),
        l &&
         l.forEach((e, t) => {
          "all" == l[0]
           ? (i.className = "highlight-line")
           : ((o = l[t]),
             (c = ""),
             isNaN(l[t]) && ((c = l[t].split("")[l[t].length - 1]), (o = l[t].split("")), o.pop(), (o = o.join(""))),
             o == a && ((i.className = "highlight-line " + c), "a" == c && (i.textContent = "+"), "m" == c && (i.textContent = "-")))
         }),
        e.appendChild(i)
     }),
     document.querySelectorAll(".js-lock-btn").forEach(e => {
      e.addEventListener("click", e => {
       "on" == e.target.parentElement.nextElementSibling.children[0].getAttribute("pointer-event")
        ? ((e.target.parentElement.nextElementSibling.children[0].style["pointer-events"] = "none"),
          (e.target.parentElement.nextElementSibling.children[1].style["user-select"] = "text"),
          e.target.parentElement.nextElementSibling.children[0].setAttribute("pointer-event", "off"),
          e.target.classList.add("unlock-svg"))
        : ((e.target.parentElement.nextElementSibling.children[0].style["pointer-events"] = "auto"),
          e.target.parentElement.nextElementSibling.children[0].setAttribute("pointer-event", "on"),
          (e.target.parentElement.nextElementSibling.children[1].style["user-select"] = "none"),
          e.target.classList.remove("unlock-svg"))
      }),
       window.innerWidth < 900 &&
        (e.classList.add("unlock-svg"),
        (e.parentElement.nextElementSibling.children[0].style["pointer-events"] = "none"),
        e.parentElement.nextElementSibling.children[0].setAttribute("pointer-event", "off"),
        (e.parentElement.nextElementSibling.children[1].style["user-select"] = "text"))
     }),
     document.querySelectorAll(".copyJSCodeClipboard").forEach(e => {
      e.addEventListener("click", () => {
       if (!e.classList.contains("copied")) {
        let t = e.parentElement.nextElementSibling.children[0],
         n = e.parentElement.nextElementSibling.children[1].textContent,
         l = document.createElement("textarea")
        document.body.appendChild(l),
         (l.value = n),
         l.select(),
         document.execCommand("copy"),
         l.parentNode.removeChild(l),
         (t.children[0].style["pointer-events"] = "none"),
         setTimeout(() => {
          t.children[0].style["pointer-events"] = ""
         }, 500),
         e.classList.add("copied"),
         e.classList.add("check-svg"),
         e.classList.remove("copy-svg"),
         (e.style.opacity = "1"),
         setTimeout(() => {
          e.classList.remove("copied"), e.classList.remove("check-svg"), e.classList.add("copy-svg"), (e.style.opacity = "")
         }, 5e3)
       }
      })
     }),
     document.querySelectorAll("[python-content]").forEach(e => {
      let t = e.getAttribute("title-value") || "Example",
       n = e.getAttribute("line-num") || "0",
       l = e.firstElementChild.innerHTML.trim() || null,
       s = []
      l && (s = l.match(/\n/gi) || [])
      let i = 0 == s.length ? "top: 3rem;right:0.4rem;" : "top: 2.9rem;",
       c = "",
       o = "",
       a = ""
      e.hasAttribute("python-content") && (e.className = "python-block python-code python-content pre-block"),
       e.hasAttribute("no-title-value") && (t = null),
       e.hasAttribute("no-line-num") && (n = null),
       n && t
        ? ((o = '<span class="text-lang" title="Unlock Content" style="">Python</span>'),
          (c = '<i class="svg lock-svg python-lock-btn" style="top: 0.65rem; padding:0.62rem"></i>'),
          (a = '<i title="copy" class="copyPythonCodeClipboard svg copy-svg" style="top: 3.5rem;"></i>'))
        : !n && t
        ? ((c = '<i class="svg lock-svg python-lock-btn" style="display: none"></i>'),
          (o = '<span class="text-lang" title="Unlock Content" style=\'margin-right: 0rem; padding-right: 0.7rem;\'>Python</span>'),
          (a = '<i title="copy" class="copyPythonCodeClipboard svg copy-svg" style="top: 3.2rem;"> </i>'))
        : n && !t
        ? ((o = '<span class="text-lang" title="Unlock Content" style=\'display: none\'>Python</span>'),
          (c = `<i class="svg lock-svg python-lock-btn" style="${i} padding: 0.7rem"></i>`),
          (a = '<i title="copy" class="copyPythonCodeClipboard svg copy-svg" style="top: 0.8rem;"></i>'))
        : n ||
          t ||
          ((c = '<i class="svg lock-svg python-lock-btn" style="display: none"></i>'),
          (o = '<span class="text-lang" title="Unlock Content" style=\'display: none\'>Python</span>'),
          (a = '<i title="copy" class="copyPythonCodeClipboard svg copy-svg" style="top: 0.8rem;"></i>')),
       (e.innerHTML = `\n    <div class="block-header" style="${t ? "" : "height: 0"}">\n      <div class="block-title" style="${
        t ? "" : "display: none"
       }"> ${t} </div> \n      ${o}\n      ${a}\n      ${c}\n    </div>\n    <div class="block-content">\n    <div class="python-line-num" data-highlight-num="${n}" style="${
        n ? "" : "display: none"
       }" pointer-event="on"> </div> \n      <pre style="${n ? "" : "user-select: text;"}">\n        <code class="language-python">\n                    ${l}</code></pre></div>`)
     }),
     document.querySelectorAll(".python-line-num").forEach(e => {
      let t = e.nextElementSibling.textContent,
       n = 0,
       l = e.dataset.highlightNum
      l && (l = l.split(","))
      let s = t.match(/\n/gi) || [],
       i = null,
       c = "",
       o = ""
      ;(n = s.length ? s.length + 1 : 1), (e.style.width = n >= 1e3 ? `${e.offsetWidth + 3}px` : "")
      for (var a = 1; a < n; a++)
       (i = document.createElement("li")),
        (i.innerHTML = a),
        l &&
         l.forEach((e, t) => {
          "all" == l[0]
           ? (i.className = "highlight-line")
           : ((o = l[t]),
             (c = ""),
             isNaN(l[t]) && ((c = l[t].split("")[l[t].length - 1]), (o = l[t].split("")), o.pop(), (o = o.join(""))),
             o == a && ((i.className = "highlight-line " + c), "a" == c && (i.textContent = "+"), "m" == c && (i.textContent = "-")))
         }),
        e.appendChild(i)
     }),
     document.querySelectorAll(".python-lock-btn").forEach(e => {
      e.addEventListener("click", e => {
       "on" == e.target.parentElement.nextElementSibling.children[0].getAttribute("pointer-event")
        ? ((e.target.parentElement.nextElementSibling.children[0].style["pointer-events"] = "none"),
          (e.target.parentElement.nextElementSibling.children[1].style["user-select"] = "text"),
          e.target.parentElement.nextElementSibling.children[0].setAttribute("pointer-event", "off"),
          e.target.classList.add("unlock-svg"))
        : ((e.target.parentElement.nextElementSibling.children[0].style["pointer-events"] = "auto"),
          e.target.parentElement.nextElementSibling.children[0].setAttribute("pointer-event", "on"),
          (e.target.parentElement.nextElementSibling.children[1].style["user-select"] = "none"),
          e.target.classList.remove("unlock-svg"))
      }),
       window.innerWidth < 900 &&
        (e.classList.add("unlock-svg"),
        (e.parentElement.nextElementSibling.children[0].style["pointer-events"] = "none"),
        e.parentElement.nextElementSibling.children[0].setAttribute("pointer-event", "off"),
        (e.parentElement.nextElementSibling.children[1].style["user-select"] = "text"))
     }),
     document.querySelectorAll(".copyPythonCodeClipboard").forEach(e => {
      e.addEventListener("click", () => {
       if (!e.classList.contains("copied")) {
        let t = e.parentElement.nextElementSibling.children[0],
         n = e.parentElement.nextElementSibling.children[1].textContent,
         l = document.createElement("textarea")
        document.body.appendChild(l),
         (l.value = n),
         l.select(),
         document.execCommand("copy"),
         l.parentNode.removeChild(l),
         (t.children[0].style["pointer-events"] = "none"),
         setTimeout(() => {
          t.children[0].style["pointer-events"] = ""
         }, 500),
         e.classList.add("copied"),
         e.classList.add("check-svg"),
         e.classList.remove("copy-svg"),
         (e.style.opacity = "1"),
         setTimeout(() => {
          e.classList.remove("copied"), e.classList.remove("check-svg"), e.classList.add("copy-svg"), (e.style.opacity = "")
         }, 5e3)
       }
      })
     }),
     document.querySelectorAll("[html-content]").forEach(e => {
      let t = e.getAttribute("title-value") || "An Example",
       n = e.getAttribute("line-num") || "0",
       l = e.firstElementChild.innerHTML.trim() || null,
       s = "",
       i = "",
       c = ""
      ;(e.className = "html-block html-code html-content pre-block"),
       e.hasAttribute("no-title-value") && (t = null),
       e.hasAttribute("no-line-num") && (n = null),
       n && t
        ? ((s = '<i class="svg lock-svg hyperText-lock-btn" style="top: 0.65rem; padding:0.65rem"></i>'),
          (i = '<span class="text-lang" title="Unlock Content" style="margin-right: 1.7rem">HTML</span>'),
          (c = '<i title="copy" class="copyHyperTextClipboard svg copy-svg" style="top: 3.0rem;"></i>'))
        : !n && t
        ? ((s = '<i class="svg lock-svg hyperText-lock-btn" style="display: none"></i>'),
          (i = '<span class="text-lang" title="Unlock Content" style=\'margin-right: 0rem\'>HTML</span>'),
          (c = '<i title="copy" class="copyHyperTextClipboard svg copy-svg" style="top: 3.0rem;"> </i>'))
        : n && !t
        ? ((i = '<span class="text-lang" title="Unlock Content" style=\'display: none\'>HTML</span>'),
          (s = '<i class="svg lock-svg hyperText-lock-btn" style="top: 3.2rem; padding: 0.7rem"></i>'),
          (c = '<i title="copy" class="copyHyperTextClipboard svg copy-svg" style="top: 1.0rem;"> </i>'))
        : n ||
          t ||
          ((s = '<i class="svg lock-svg hyperText-lock-btn" style="display: none"></i>'),
          (i = '<span class="text-lang" title="Unlock Content" style=\'display: none\'>HTML</span>'),
          (c = '<i title="copy" class="copyHyperTextClipboard svg copy-svg" style="top: 0.8rem;"></i>')),
       (e.innerHTML = `\n    <div class="block-header" style="${t ? "" : "padding: 0"}">\n      <div class="block-title" style="${
        t ? "" : "display: none"
       }"> ${t}</div> \n      ${i}\n      ${c}\n      ${s}\n    </div>\n    <div class="block-content">\n    <div class="hyperText-line-num" data-highlight-num="${n}" style="${
        n ? "" : "display: none"
       }" pointer-event="on"> </div> \n      <pre style="${n ? "" : "user-select: text;"}">\n        <code class="language-html">${l}</code>\n      </pre>\n    </div>\n  `)
     }),
     document.querySelectorAll(".hyperText-line-num").forEach(e => {
      let t = e.nextElementSibling.textContent,
       n = 0,
       l = e.dataset.highlightNum
      l && (l = l.split(","))
      let s = t.match(/\n/gi) || [],
       i = null,
       c = "",
       o = ""
      n = s.length ? s.length + 1 : 1
      for (var a = 1; a < n; a++)
       (i = document.createElement("li")),
        (i.innerHTML = a),
        l &&
         l.forEach((e, t) => {
          "all" == l[0]
           ? (i.className = "highlight-line")
           : ((o = l[t]), (c = ""), isNaN(l[t]) && ((c = l[t].split("")[l[t].length - 1]), (o = l[t].split("")), o.pop(), (o = o.join(""))), o == a && (i.className = "highlight-line " + c))
         }),
        e.appendChild(i)
     }),
     document.querySelectorAll(".hyperText-lock-btn").forEach(e => {
      e.addEventListener("click", e => {
       "on" == e.target.parentElement.nextElementSibling.children[0].getAttribute("pointer-event")
        ? ((e.target.parentElement.nextElementSibling.children[0].style["pointer-events"] = "none"),
          (e.target.parentElement.nextElementSibling.children[1].style["user-select"] = "text"),
          e.target.parentElement.nextElementSibling.children[0].setAttribute("pointer-event", "off"),
          e.target.classList.add("unlock-svg"))
        : ((e.target.parentElement.nextElementSibling.children[0].style["pointer-events"] = "auto"),
          e.target.parentElement.nextElementSibling.children[0].setAttribute("pointer-event", "on"),
          (e.target.parentElement.nextElementSibling.children[1].style["user-select"] = "none"),
          e.target.classList.remove("unlock-svg"))
      }),
       window.innerWidth < 900 &&
        (e.classList.add("unlock-svg"),
        (e.parentElement.nextElementSibling.children[0].style["pointer-events"] = "none"),
        e.parentElement.nextElementSibling.children[0].setAttribute("pointer-event", "off"),
        (e.parentElement.nextElementSibling.children[1].style["user-select"] = "text"))
     }),
     document.querySelectorAll(".copyHyperTextClipboard").forEach(e => {
      e.addEventListener("click", () => {
       if (!e.classList.contains("copied")) {
        let t = e.parentElement.nextElementSibling.children[0],
         n = e.parentElement.nextElementSibling.children[1].textContent,
         l = document.createElement("textarea")
        document.body.appendChild(l),
         (l.value = n),
         l.select(),
         document.execCommand("copy"),
         l.parentNode.removeChild(l),
         (t.children[0].style["pointer-events"] = "none"),
         setTimeout(() => {
          t.children[0].style["pointer-events"] = ""
         }, 500),
         e.classList.add("copied"),
         e.classList.add("check-svg"),
         e.classList.remove("copy-svg"),
         (e.style.opacity = "1"),
         setTimeout(() => {
          e.classList.remove("copied"), e.classList.remove("check-svg"), e.classList.add("copy-svg"), (e.style.opacity = "")
         }, 5e3)
       }
      })
     }),
     document.querySelectorAll("[css-content]").forEach(e => {
      let t = e.getAttribute("title-value") || "Example",
       n = e.getAttribute("line-num") || "0",
       l = e.firstElementChild.innerHTML.trim() || null
      ;(e.className = "css-block css-code css-content pre-block"),
       e.hasAttribute("no-title-value") && (t = null),
       (e.innerHTML = `\n    <div class="block-header" style="${t ? "" : "padding: 0"}">\n      <div class="block-title" style="${
        t ? "" : "display: none"
       }"> ${t}</div> \n      <i title="copy" class="copyCssTextClipboard svg copy-svg " style="${t ? "" : "top:0.8rem"}"> </i>\n      <span class="text-lang" title="Unlock Content" style="${
        t ? "" : "display: none"
       }">CSS</span>\n    </div>\n    <div class="block-content">\n    <div class="css-line-num" data-highlight-num="${n}"></div> \n      <pre>\n        <code class="language-css">\n                    ${l}</code></pre></div>`)
     }),
     document.querySelectorAll(".css-line-num").forEach(e => {
      let t = e.nextElementSibling.textContent,
       n = 0,
       l = e.dataset.highlightNum
      l && (l = l.split(","))
      let s = t.match(/\n/gi) || [],
       i = null
      ;(n = s.length ? s.length + 1 : 1), (e.style.width = n >= 1e3 ? `${e.offsetWidth + 3}px` : "")
      for (var c = 1; c < n; c++)
       (i = document.createElement("li")),
        (i.innerHTML = c),
        l &&
         l.forEach((e, t) => {
          l[t] == c && (i.className = "highlight-line")
         }),
        e.appendChild(i)
     }),
     document.querySelectorAll(".copyCssTextClipboard").forEach(e => {
      e.addEventListener("click", () => {
       if (!e.classList.contains("copied")) {
        let t = e.parentElement.nextElementSibling.children[1].textContent,
         n = document.createElement("textarea")
        document.body.appendChild(n),
         (n.value = t),
         n.select(),
         document.execCommand("copy"),
         n.parentNode.removeChild(n),
         e.classList.add("copied"),
         e.classList.add("check-svg"),
         e.classList.remove("copy-svg"),
         (e.style.opacity = "1"),
         setTimeout(() => {
          e.classList.remove("copied"), e.classList.remove("check-svg"), e.classList.add("copy-svg"), (e.style.opacity = "")
         }, 5e3)
       }
      })
     }),
     document.querySelectorAll("[terminal-content]").forEach(e => {
      let t = e.getAttribute("title-value") || "Example",
       n = e.firstElementChild.innerHTML.trim() || null,
       l = e.getAttribute("line-num") || "0",
       s = e.getAttribute("preferred-sign") || ">"
      ;(e.className = "terminal-block npm-command terminal-content pre-block"),
       e.hasAttribute("no-title-value") && (t = null),
       (e.innerHTML = `\n      <div class="block-header"  style="${t ? "" : "padding: 0"}">\n        <div class="block-title" style="${
        t ? "" : "display: none"
       }"> - ${t}</div> \n        <i title="copy" class="copyTerminalClipboard svg copy-svg " style="${t ? "" : "top:0.8rem"}"> </i>\n        <span class="text-lang" title="Unlock Content" style="${
        t ? "" : "display: none"
       }">Terminal</span>\n      </div>\n  \n      <div class="block-content">\n      <div class="command-line-sign" data-sign="${s}" data-highlight-num="${l}" > </div> \n<pre>\n  ${n}\n</pre>\n    </div>\n    `)
     }),
     document.querySelectorAll(".command-line-sign").forEach(e => {
      let t = e.nextElementSibling.textContent,
       n = e.dataset.sign,
       l = 1,
       s = e.dataset.highlightNum
      s && (s = s.split(","))
      let i = t.match(/\n/gi) || [],
       c = null
      l = i.length ? i.length + 1 : 1
      for (var o = 1; o < l; o++)
       (c = document.createElement("li")),
        (c.innerHTML = n),
        s &&
         s.forEach((e, t) => {
          s[t] == o && (c.className = "highlight-line")
         }),
        e.appendChild(c)
     }),
     document.querySelectorAll(".copyTerminalClipboard").forEach(e => {
      e.addEventListener("click", () => {
       if (!e.classList.contains("copied")) {
        let t = e.parentElement.nextElementSibling.children[1].textContent,
         n = document.createElement("textarea")
        document.body.appendChild(n),
         (n.value = t),
         n.select(),
         document.execCommand("copy"),
         n.parentNode.removeChild(n),
         e.classList.add("copied"),
         e.classList.add("check-svg"),
         e.classList.remove("copy-svg"),
         (e.style.opacity = "1"),
         setTimeout(() => {
          e.classList.remove("copied"), e.classList.remove("check-svg"), e.classList.add("copy-svg"), (e.style.opacity = "")
         }, 5e3)
       }
      })
     }),
     (function () {
      let e = document.querySelectorAll("[cli-content]")
      if (0 != e.length) {
       let t = "",
        n = "",
        l = "",
        s = "",
        i = "",
        c = [],
        o = ""
       e.forEach(e => {
        ;(t = e.getAttribute("title-value")),
         (n = e.getAttribute("cli-username")),
         (l = e.getAttribute("cli-pc-name")),
         (s = e.getAttribute("cli-current-directory")),
         (i = e.getAttribute("cli-user-type")),
         (c = e.children),
         (o = "")
        for (let e = 0; e < c.length; e++) o += g(c[e], { username_cli: n, pc_name_cli: l, current_directory_cli: s, user_type_cli: i })
        ;(e.className = "cli-block cli-command cli-content pre-block"),
         (e.innerHTML = `\n   <div class="cli-header">\n    <h1 class="cli-title">${t}</h1>\n   </div>\n   <div class="cli-content"> \n      ${o}\n   </div>\n   `),
         setTimeout(() => {
          e.style.display = "block"
         }, 800)
       })
      }
     })(),
     setTimeout(() => {
      !(function () {
       let e = document.querySelectorAll(".html-code"),
        t = document.querySelectorAll(".css-code"),
        n = document.querySelectorAll(".js-code"),
        l = document.querySelectorAll(".python-code"),
        s = document.querySelectorAll(".react-code"),
        i = document.querySelectorAll(".json-code"),
        c = document.querySelectorAll(".cli-command"),
        o = document.querySelectorAll(".npm-command pre")
       ;(0 == e.length && 0 == t.length && 0 == n.length && 0 == i.length && 0 == s.length && 0 == l.length && 0 == c.length) || window.Prism.highlightAll(),
        0 != l.length &&
         (e => {
          let t = null
          e.forEach(n => {
           ;(t = e.innerHTML),
            (t = n.innerHTML),
            (t = t.replace(/\{([0-9]+|[a-zA-Z]+)\}/g, '<span class="CurlyInString">{</span><span class="PlaceHolder">$1</span><span class="CurlyInString">}</span>')),
            (t = t.replace(/\{\}/g, '<span class="CurlyInString">{</span><span class="CurlyInString">}</span>')),
            (t = t.replace(/\bf"/g, '<span class="CurlyInString">f</span>"')),
            (n.innerHTML = t)
          })
         })(l),
        0 != o.length &&
         (e => {
          let t = null,
           n = /(\/\/ .*)/g,
           l = /\b(npm|npx)\s(install|init|start|run|i|create\-react\-app)(?=[^\w])\b/g,
           s = /\bgit\s(add|commit|init|status|ls-files|config|mv|rm|--version|diff|difftool|config)(?=[^\w])\b/g,
           i = /\b(cd|echo|ls|rm|mv|pwd|mkdir)(?=[^\w])\b/g,
           c = /\b(code)(?=[^\w])\b/g,
           o = /(\s--\w+)/g,
           a = /(\s-\w+)/g,
           r = /\s\./g,
           u = /&lt;(.*?)&gt;/g
          e.forEach(d => {
           ;(t = e.innerHTML),
            (t = d.innerHTML),
            (t = t.replace(/\"(.*?)\"/g, '<npmString>"$1"</npmString>')),
            (t = t.replace(o, "<npmOptionColor>$1</npmOptionColor>")),
            (t = t.replace(a, "<npmOptionColor>$1</npmOptionColor>")),
            (t = t.replace(l, "<npmKeywordColor>$1</npmKeywordColor> <AllNpmKeywordsColor>$2</AllNpmKeywordsColor>")),
            (t = t.replace(s, "<GitColor>git</GitColor> <GitKeywordsColor>$1</GitKeywordsColor>")),
            (t = t.replace(i, "<LinuxUnixColor>$1</LinuxUnixColor>")),
            (t = t.replace(c, "<otherNpmKeywordsColor>$1</otherNpmKeywordsColor>")),
            (t = t.replace(u, "<npmAngleBracketColor><</npmAngleBracketColor><wordBetweenAngleBrackets>$1</wordBetweenAngleBrackets><npmAngleBracketColor>></npmAngleBracketColor>")),
            (t = t.replace(r, " <npmDotColor>.</npmDotColor>")),
            (t = t.replace(n, "<npmComment>$1</npmComment>")),
            (d.innerHTML = t)
          })
         })(o)
      })()
     }, 500),
     (async function () {
      const e = document.querySelectorAll("#ref-link"),
       t = document.querySelectorAll("#only-link"),
       n = document.querySelector(".highlight-menu")
      if (
       (0 != t.length &&
        t.forEach(e => {
         e.target = "_blank"
        }),
       0 != e.length)
      ) {
       const t = new URLSearchParams(window.location.search)
       let l,
        s,
        i,
        c,
        o,
        a,
        r,
        u,
        d = location.hash
       ;(d = d.split("#")),
        t.has("newTab") && t.has("topicLink") ? d.pop() : (d[d.length - 1] = d[d.length - 1].slice(0, -5)),
        n && "false" == n.getAttribute("hasFolder") && d.pop(),
        t.has("hasFolder") && "false" == t.get("hasFolder") && d.pop(),
        (d = d.join("/"))
       try {
        l = await (async function (e) {
         let t = await fetch(e + "/ref.json")
         return (t = await t.json()), t
        })(d)
       } catch (e) {
        console.log("Error While fetching reference Link")
       }
       e.forEach(e => {
        let t = e.getAttribute("href")
        l &&
         l.forEach(e => {
          t == e.ref_id && ((s = e.ref_name), (i = e.ref_href), (c = e.ref_type), (o = e.ref_info), (a = e.hashPos.substring(1)), (r = e.qs), (u = e.ref_description))
         }),
         (a = a ? `refPos=${a}` : ""),
         "link" == c || "link_desc" == c ? (e.href = location.origin + `/?${a}&${r}` + i) : e.removeAttribute("href"),
         (e.target = "_blank"),
         (e.textContent = s),
         "desc" == c
          ? (e.innerHTML += `<p class='tooltiptext'>${u}</p>`)
          : "link" == c
          ? (e.innerHTML += "<p class='tooltiptext'><span class=\"sub-text\">Click anywhere for more information</span></p>")
          : "link_desc" == c && (e.innerHTML += `<p class='tooltiptext'>${u} <br/> <span class="sub-text">Click anywhere for more information</span></p>`)
       })
      }
     })(),
     (function () {
      const e = document.querySelectorAll("#image")
      if (0 != e.length) {
       const t = new URLSearchParams(window.location.search)
       let n = location.hash,
        l = null
       ;(n = n.split("#")),
        t.has("newTab") && t.has("topicLink") ? n.pop() : (n[n.length - 1] = n[n.length - 1].slice(0, -5)),
        (n = n.join("/")),
        e.forEach(e => {
         let t = e.getAttribute("path")
         e.hasAttribute("file") && ((l = n.split("/")), l.pop(), (n = l.join("/"))),
          (e.src = location.origin + n + t),
          e.setAttribute("alt", "image"),
          e.setAttribute("loading", "lazy"),
          e.addEventListener("load", t => {
           t.target.width > 1e3 ? e.setAttribute("width", "700px") : window.innerWidth > 1930 ? t.target.width > 800 && e.setAttribute("width", "800px") : t.target.width > 700 && e.setAttribute("width", "700px")
          })
        })
      }
     })(),
     (function () {
      let e = document.querySelectorAll("#image")
      if (0 != e.length)
       if (window.innerWidth > 900) {
        let t = null,
         n = 0.7,
         l = 0,
         s = 0.6,
         i =
          '\n  <div id="myModal" class="modal-container">\n    <i class="svg close-svg close-image"></i>\n    <img class="modal-image-content" src="" alt="">\n    <div class="modal-image-title"> Click on Image Clip to Restart the Clip </div>\n  </div>\n  '
        document.getElementById("doc-content-render").insertAdjacentHTML("afterbegin", i)
        let c = document.querySelector(".modal-container"),
         o = document.querySelector(".modal-image-content"),
         a = document.querySelector(".modal-image-title")
        function r() {
         o.setAttribute("src", ""), o.setAttribute("src", t.src)
        }
        c.addEventListener("wheel", e => {
         console.dir(l), e.deltaY < 0 ? n <= l && (o.style.transform = `scale(${(n += 0.3)})`) : e.deltaY > 0 && n >= s && (o.style.transform = `scale(${(n -= 0.3)})`)
        }),
         document.querySelector(".close-image").addEventListener("click", e => {
          ;(n = 1),
           (o.style.cursor = "default"),
           o.setAttribute("src", ""),
           o.removeEventListener("click", r),
           (a.style.display = "none"),
           (e.target.parentElement.style.display = "none"),
           (o.style.transform = "scale(0.7)")
         }),
         e.forEach(e => {
          e.addEventListener("click", e => {
           t = e.target
           let n = t.src.substring(t.src.length - 3)
           o.setAttribute("src", t.src),
            (c.style.display = "flex"),
            "gif" == n && ((a.style.display = "block"), (o.style.cursor = "pointer"), o.addEventListener("click", r)),
            console.dir(t),
            (l = t.naturalWidth < 600 ? 3.5 : 1.5)
          })
         })
       } else
        e.forEach(e => {
         let t = e.src
         "gif" == t.substring(t.length - 3) &&
          e.addEventListener("click", e => {
           ;(e.target.src = ""), (e.target.src = t)
          })
        })
     })(),
     (function () {
      let e = document.querySelectorAll(".Collapsible-title")
      0 != e.length &&
       e.forEach(e => {
        e.addEventListener("click", () => {
         let t = e.nextElementSibling
         e.classList.toggle("active"),
          e.classList.contains("active")
           ? ((t.style.height = "100%"), (t.style.maxHeight = "100%"), (t.style["margin-bottom"] = "30px"), (t.style["border-bottom"] = "2px dashed #404040"))
           : ((t.style.maxHeight = "0px"), (t.style.height = "0px"), (t.style["margin-bottom"] = "0px"), (t.style["border-bottom"] = ""))
        })
       })
     })(),
     (function (e = null) {
      let t = new URLSearchParams(window.location.search)
      if (t.has("refPos") || e) {
       let n = e || t.get("refPos"),
        l = document.querySelector(`a[href='#${n}']`),
        s = location.href
       l &&
        setTimeout(() => {
         l.click(), window.history.pushState("page", null, s)
        }, 2e3)
      }
     })(e),
     document.querySelectorAll(".block-content").forEach(e => {
      e.addEventListener("dblclick", t => {
       let n = e.parentElement.style.maxHeight
       e.parentElement.style.maxHeight = "" == n ? "none" : ""
      }),
       e.addEventListener("mousedown", t => {
        1 == t.button &&
         (e.children[0].hasAttribute("pointer-event") && (e.children[0].style["pointer-events"] = "none"),
         setTimeout(() => {
          e.children[0].hasAttribute("pointer-event") && (e.children[0].style["pointer-events"] = "auto")
         }, 500))
       })
     }))
 }
 let b,
  y,
  v,
  _ = document.getElementById("doc-content-render"),
  f = document.querySelector(".nav-title-header"),
  j = document.querySelector(".path-view-content-header"),
  E = document.getElementById("go-back"),
  L = document.getElementById("go-forward"),
  S = document.querySelector(".home-btn"),
  x = document.querySelector(".sideBar"),
  k = document.querySelector(".menuIcon-mobile-container"),
  w = !1,
  A = document.querySelector(":root"),
  T = new URLSearchParams(window.location.search),
  C = "",
  $ = ["/"],
  P = 0,
  q = !1,
  H = "",
  M = "",
  N = "",
  D = ""
 function B(e) {
  return ((t = e), new URL(t).hash).replaceAll(/\#/g, "/")
  var t
 }
 function U(e) {
  return F(e).replaceAll(/\//g, "#")
 }
 function F(e) {
  return new URL(e).pathname
 }
 async function I(e, t = !1, n = !1, l = !1, s = !1, i = null, c = null) {
  let o = U(e)
  if (
   (n ||
    l ||
    T.has("newTab") ||
    (function (e) {
     const t = []
     let n = "/Docs" == F(e) ? "/" : F(e),
      l = n.split("/"),
      s = !1,
      i = document.querySelectorAll(".file-type")
     ;("html" !== n.slice(-4) && "/" != n) ||
      i.forEach(e => {
       e.getAttribute("urlPath") != n || s ? e.classList.remove("highlight-menu") : (e.classList.add("highlight-menu"), (f.innerHTML = e.children[2].textContent), (s = !0))
      }),
      l.shift(),
      l.shift(),
      l.pop(),
      t.push(`/Docs/${l[0]}`)
     for (let e = 1; e < l.length; e++) t.push(t[e - 1] + "/" + l[e])
     document.querySelectorAll(".folder-type").forEach(e => {
      t.forEach(t => {
       e.getAttribute("urlPath") == t &&
        (e.classList.add("menu-enable"),
        w || (K(e), J(e)),
        e.children[0].classList.add("arrow-open"),
        e.children[1].classList.contains("folder-icon") && (e.children[1].src = "/_images/icons/folder-open-icon.png"),
        e.nextElementSibling.classList.contains("subject-list-menu") && e.nextElementSibling.classList.add("menu-open"))
      })
     })
    })(e),
   s && (P++, (L.style.opacity = "0.1")),
   (w = !0),
   "html" === e.slice(-4) || e == location.origin)
  ) {
   ;(C = F(e)),
    e == location.origin ? ((o = "/"), (C = ""), (e = location.origin + "/Docs"), (S.style.opacity = "0.1"), (S.style.cursor = "default")) : ((S.style.opacity = ""), (S.style.cursor = "")),
    "html" !== o.slice(-4) || t || ($[$.length - 1] != o && $.push(o), (P = $.length - 1)),
    (E.style.opacity = 0 == P ? "0.1" : ""),
    s || (L.style.opacity = P == $.length - 1 ? "0.1" : ""),
    l ? ((q = !0), P++, (E.style.opacity = ""), (L.style.opacity = "0.1")) : (window.history.pushState("page", null, o), (q = !1)),
    (function (e, t) {
     let n = "",
      l = null,
      s = e.split("#"),
      i = s[s.length - 1] || ""
     s.shift(),
      s.shift(),
      "html" === i.slice(-4) &&
       ((s[s.length - 1] = i.replace(/\.html/g, ".doc")),
       (t || T.has("topicLink")) && (l = decodeURIComponent(s[s.length - 1].slice(0, -4))),
       !t && T.has("subjectTitle") && (l = T.get("subjectTitle").replace("__", "")),
       (f.innerHTML = l || f.innerHTML)),
      0 == s.length && (s.push("Home Page"), (f.innerHTML = "Main Page")),
      s.forEach((e, t) => {
       let l = s.length - 1 != t ? '<span class="path-arrow"></span>' : ""
       n += `\n  <li> \n    <span class="path-view-title">${decodeURIComponent(e)}</span> \n    ${l}\n  </li>\n  `
      }),
      (j.innerHTML = `<marquee behavior="none" direction="left" scrollamount="0"><ul>${n}</ul></marquee>`),
      j.children[0].children[0].offsetWidth + 10 > j.offsetWidth - 12 && j.children[0].setAttribute("scrollamount", 10)
    })(o, l),
    (document.querySelector(".side-table-topic-content").innerHTML = ""),
    console.log("Url Paths History: ", $),
    console.log("current history index: ", P),
    console.log("current Active Link: ", C),
    (M = _.innerHTML),
    (_.innerHTML = '<div class="spinner-content">\n<div class="spinner-wheel"></div>\n<p class="spinner-message"></p>\n</div>')
   let n = C.split("/")
   ;(n = n[n.length - 1]),
    window.innerWidth < 900 &&
     !t &&
     !T.has("newTab") &&
     (function (e) {
      let t = new Event("click")
      document.querySelector(".menu-btn").dispatchEvent(t)
     })(),
    n.includes("Documentation") && (console.log(n.includes("Documentation")), C != D && ((D = ""), (N = "")), (D = C))
   try {
    if (N && n.includes("Documentation")) f.innerHTML += " <span>(cached)</span>"
    else {
     console.log("loading page")
     let t = await fetch(e),
      l = await t.text()
     ;(H = l), n.includes("Documentation") && (N = l), "Not Found" == t.statusText && ((H = "<h1>No content - File Error</h1>"), $.splice($.length - 1, 1), P--)
    }
    H && (_.setAttribute("id", ""), _.offsetWidth, _.setAttribute("id", "doc-content-render"), n.includes("Documentation") ? (_.innerHTML = N) : (_.innerHTML = H), (_.innerHTML += "<br/> <br/>"), (M = ""), h(i, c))
   } catch (e) {
    console.log("Error: ", e),
     setTimeout(() => {
      ;(_.innerHTML = "<h1> Page Error . . . . </h1> <br /> <p> Retrieving Last Page, Please Wait . . .  </p>"),
       setTimeout(() => {
        _.innerHTML = M
       }, 6e3)
     }, 3e3)
   }
  }
 }
 function W(e) {
  let t = null
  ;(document.querySelector(".nav-title-header").innerHTML = e.children[2].textContent),
   (t = e.getAttribute("urlPath")),
   t != C &&
    (I(location.origin + t, !1, !0),
    (function () {
     let e = document.getElementById("Press")
     return { Play_press: () => e.play() }
    })().Play_press())
 }
 let R = null,
  G = null
 function K(e) {
  if (e.nextElementSibling)
   if (((R = e.nextElementSibling.children), "true" != e.getAttribute("events"))) {
    e.setAttribute("events", "true")
    for (let e = 0; e < R.length; e++) R[e].classList.contains("file-type") && R[e].addEventListener("click", O)
   } else {
    e.setAttribute("events", "false")
    for (let e = 0; e < R.length; e++) R[e].classList.contains("file-type") && R[e].removeEventListener("click", O)
   }
 }
 function J(e) {
  if (e.nextElementSibling) {
   G = e.nextElementSibling.children
   for (let t = 0; t < G.length; t++) G[t].classList.contains("folder-type") && (e.classList.contains("menu-enable") ? G[t].addEventListener("click", z) : G[t].removeEventListener("click", z))
  }
 }
 function O(e) {
  e.preventDefault(),
   v.forEach(e => e.classList.remove("highlight-menu")),
   e.target.classList.contains("file-type") ? (e.target.classList.toggle("highlight-menu"), W(e.target)) : (e.target.parentElement.classList.toggle("highlight-menu"), W(e.target.parentElement))
 }
 function z(e) {
  e.target.classList.contains("folder-type")
   ? (Q(e.target), Z(e.target), Y(e.target), J(e.target), K(e.target))
   : (Q(e.target.parentElement), Z(e.target.parentElement), Y(e.target.parentElement), J(e.target.parentElement), K(e.target.parentElement))
 }
 function Y(e) {
  e.children[1].classList.contains("folder-icon") && (e.classList.contains("menu-enable") ? (e.children[1].src = "/_images/icons/folder-open-icon.png") : (e.children[1].src = "/_images/icons/folder-close-icon.png"))
 }
 function Z(e) {
  e.children[0].classList.toggle("arrow-open")
 }
 function Q(e) {
  e.classList.toggle("menu-enable"), e.nextElementSibling && e.nextElementSibling.classList.contains("subject-list-menu") && e.nextElementSibling.classList.toggle("menu-open")
 }
 const V = new URLSearchParams(window.location.search)
 function X() {
  V.has("newTab") ||
   ((function () {
    const r = document.querySelector(".sideBar-subjects-menu .content-wrapper")
    ;(r.innerHTML += "<h1 class='menu-title-section-header'> Server Side </h1>"),
     (r.innerHTML += e(n)),
     (r.innerHTML += e(i)),
     (r.innerHTML += "<h1 class='menu-title-section-header'> Client Side </h1>"),
     (r.innerHTML += e(l)),
     (r.innerHTML += e(s)),
     (r.innerHTML += e(t)),
     (r.innerHTML += "<h1 class='menu-title-section-header'> Tools and Utilities </h1>"),
     (r.innerHTML += e(c)),
     (r.innerHTML += e(o)),
     (r.innerHTML += "<h1 class='menu-title-section-header'> Programming languages </h1>"),
     (r.innerHTML += e(a))
   })(),
   (y = document.querySelectorAll(".folder-type")),
   (v = document.querySelectorAll(".file-type")),
   (b = document.querySelectorAll(".main-folder")),
   b.forEach(e => {
    e.addEventListener("click", e => {
     e.target.classList.contains("main-folder")
      ? (Z(e.target), Y(e.target), Q(e.target), J(e.target), K(e.target))
      : (Z(e.target.parentElement), Y(e.target.parentElement), Q(e.target.parentElement), J(e.target.parentElement), K(e.target.parentElement))
    })
   }),
   (function () {
    let e,
     t = document.querySelector(".search-btn"),
     n = document.querySelector(".menu-btn-content"),
     l = document.querySelector(".side-title-header")
    t &&
     t.addEventListener("click", t => {
      let s = t.target.nextElementSibling
      s.classList.toggle("view"),
       (e = n.classList.contains("no-display") ? 300 : 0),
       setTimeout(() => {
        n.classList.toggle("no-display"), l.classList.toggle("no-display")
       }, e),
       s.classList.contains("view")
        ? ((t.target.className = "svg close-svg search-btn"), s.focus(), (t.target.parentElement.style.border = "none"))
        : ((t.target.className = "svg search-svg search-btn"), (s.value = ""), (t.target.parentElement.style.border = ""))
     })
   })(),
   (function () {
    let e = document.getElementById("blank-sidebar-content"),
     t = document.querySelector(".menu-btn-content"),
     n = document.querySelector(".side-title-header"),
     l = document.querySelector(".menu-btn"),
     s = document.querySelector(".home-btn"),
     i = document.querySelector(".sideBar"),
     c = document.querySelector(".sideBar-subjects-menu"),
     o = document.querySelector(".search-content"),
     a = document.querySelector(".content-wrapper"),
     r = document.querySelector(".sideBar-header"),
     u = document.querySelector(".sideBar-footer"),
     d = new Event("click")
    window.innerWidth < 900 &&
     e.addEventListener("click", () => {
      l.dispatchEvent(d)
     }),
     document.querySelectorAll(".menu-btn").forEach(l =>
      l.addEventListener("click", l => {
       let s = i.classList.contains("shrink-sideBar"),
        d = s ? 100 : 0,
        m = document.querySelector(".side-table-topic-content")
       s
        ? (l.target.classList.add("close-svg"), l.target.classList.remove("menu-svg"), (m.style = ""))
        : (l.target.classList.remove("close-svg"), l.target.classList.add("menu-svg"), 0 != m.offsetWidth && (m.style.width = m.offsetWidth + 150 + "px")),
        i.classList.toggle("shrink-sideBar"),
        window.innerWidth < 900
         ? (function (t, n) {
            t
             ? ((e.style.display = "block"),
               (e.style["pointer-events"] = "none"),
               i.classList.remove("sideBar-slide-reverse"),
               i.classList.add("sideBar-slide"),
               (i.style.position = "absolute"),
               (i.style.display = "block"),
               (e.style["pointer-events"] = "auto"),
               setTimeout(() => {
                ;(a.style.opacity = "1"), (r.style.opacity = "1"), (u.style.opacity = "1")
               }, 300),
               (n.target.parentElement.style.display = "none"),
               setTimeout(() => {
                n.target.parentElement.style.display = "block"
               }, 1500),
               (n.target.className = "svg menu-svg menu-btn menu-small"),
               navigator.vibrate(3))
             : (i.classList.add("sideBar-slide-reverse"),
               i.classList.remove("sideBar-slide"),
               (r.style.opacity = "0"),
               (a.style.opacity = "0"),
               (u.style.opacity = "0"),
               (e.style["pointer-events"] = "none"),
               (e.style.display = "none"),
               setTimeout(() => {
                i.style.display = "none"
               }, 300),
               (n.target.className = "svg close-svg menu-btn close-small"))
           })(s, l)
         : ((t.style.display = "none"),
           t.classList.toggle("open"),
           console.log(m),
           setTimeout(() => {
            c.classList.toggle("no-display"),
             o && o.classList.toggle("no-display"),
             u.classList.toggle("no-display"),
             n.classList.toggle("no-display"),
             setTimeout(() => {
              t.style.display = ""
             }, 300)
           }, d))
      })
     ),
     s.addEventListener("click", () => {
      location.href != `${location.origin}/` && I(location.origin, !1, !1, !1, !0)
     })
   })(),
   console.log("Startup SideBar Render"))
 }
 window.addEventListener("keyup", function (e) {
  if (
   (e.shiftKey && "T" == e.key && document.querySelector("html").toggleAttribute("light-theme"),
   e.shiftKey && "S" == e.key && (document.querySelector(".search-btn").dispatchEvent(new Event("click")), (document.querySelector(".search-input").value = "")),
   e.shiftKey && "M" == e.key)
  ) {
   let e = new Event("click")
   document.querySelector(".menu-btn").dispatchEvent(e)
  }
 }),
  document.addEventListener("DOMContentLoaded", () => {
   X(),
    h(),
    (function () {
     const e = B(location) || ""
     "" != e && P++, T.has("newTab") && (x.remove(), (k.style.display = "none"), (P = 0), $.shift(), A.style.setProperty("--content-render-width", "111vw")), I(location.origin + e)
    })(),
    E.addEventListener("click", () => {
     if (0 != P) {
      let e,
       t = ""
      ;(e = $[--P]), (t = location.origin + B(location.origin + e)), I(t, !0)
     }
    }),
    L.addEventListener("click", e => {
     if (P < $.length - 1 && !q) {
      let e = "",
       t = ""
      ;(e = $[++P]), (t = location.origin + B(location.origin + e)), console.log(t), I(t, !0)
     }
    }),
    (window.onpopstate = function () {
     if (C.includes("%20")) {
      let e = C.split("/")
      e.pop(), (e = e.join("/").concat(".html")), window.history.pushState("page", null, U(location.origin + e))
     } else window.history.pushState("page", null, U(location.origin + C))
    }),
    T.has("newTab") ||
     document.querySelectorAll(".file-type").forEach(e => {
      let t = e
      e.classList.contains("file-type") || (t = e.parentElement)
      let n = t.getAttribute("urlPath"),
       l = t.getAttribute("hasFolder"),
       s = ((i = location.origin + n), new URL(i).pathname).replaceAll(/\//g, "#")
      var i
      let c = location.origin + `?newTab&hasFolder=${l}&subjectTitle=${t.children[2].textContent}__` + s
      t.setAttribute("href", c)
     })
  })
})()
