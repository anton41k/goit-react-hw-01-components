(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,function(a,e,t){a.exports={profile:"Profile_profile__24EUf",description:"Profile_description__1DffH",name:"Profile_name__3SsNG",tag:"Profile_tag__2i79t",location:"Profile_location__3jjzx",avatar:"Profile_avatar__1Tcqu",avastatstar:"Profile_avastatstar__2NwIc",quantity:"Profile_quantity__2CXzp",label:"Profile_label__3onOc"}},function(a,e,t){a.exports={item:"FriendListItem_item__rfhqk",status:"FriendListItem_status__4C-F1",online:"FriendListItem_online__2Vgq8",ofline:"FriendListItem_ofline__3J4f_",avatar:"FriendListItem_avatar__2yBVg",name:"FriendListItem_name__2SIqn"}},,function(a){a.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,function(a,e,t){a.exports={transaction_history:"TransactionHistory_transaction_history__1LqVx",table_head:"TransactionHistory_table_head__3qa6K",info:"TransactionHistory_info__3y6rx"}},,,function(a,e,t){a.exports={friend_list:"FriendList_friend_list__3E669"}},,,function(a){a.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(a){a.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(a){a.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,function(a,e,t){},,,,,,function(a,e,t){"use strict";t.r(e);var n,c,i,s,r,o=t(1),l=t.n(o),d=t(9),b=t.n(d),m=(t(21),Object.freeze({sm:48,xl:100})),p=t(3),j=t.n(p),u=t(0),f=function(a){var e=a.id,t=a.name,n=a.avatar,c=a.isOnline;return Object(u.jsxs)("li",{className:j.a.item,children:[Object(u.jsx)("span",{className:"".concat(j.a.status," ").concat(c?j.a.online:j.a.ofline)}),Object(u.jsx)("img",{className:j.a.avatar,src:n,alt:t,width:m.sm}),Object(u.jsx)("p",{className:j.a.name,children:t})]},e)},h=t(10),x=t.n(h),O=function(a){var e=a.friends;return Object(u.jsx)("ul",{className:x.a.friend_list,children:e.map((function(a){var e=a.id,t=a.name,n=a.avatar,c=a.isOnline;return Object(u.jsx)(f,{id:e,name:t,avatar:n,isOnline:c},e)}))})},y=t(2),_=t.n(y),v=function(a){var e=a.name,t=a.tag,n=a.location,c=a.avatar,i=a.stats;return Object(u.jsxs)("div",{className:_.a.profile,children:[Object(u.jsxs)("div",{className:_.a.description,children:[Object(u.jsx)("img",{src:c,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:_.a.avatar,width:m.xl}),Object(u.jsx)("p",{className:_.a.name,children:e}),Object(u.jsxs)("p",{className:_.a.tag,children:["@",t]}),Object(u.jsx)("p",{className:_.a.location,children:n})]}),Object(u.jsxs)("ul",{className:_.a.avastatstar,children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{className:_.a.label,children:"Followers"}),Object(u.jsx)("span",{className:_.a.quantity,children:i.followers})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{className:_.a.label,children:"Views"}),Object(u.jsx)("span",{className:_.a.quantity,children:i.views})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{className:_.a.label,children:"Likes"}),Object(u.jsx)("span",{className:_.a.quantity,children:i.likes})]})]})]})},g=t(4),w=t(6),N=w.a.section(n||(n=Object(g.a)(["\n  width: 350px;\n  background-color: var(--color-white);\n  border-radius: 5px;\n  margin: 10px auto;\n  box-shadow: var(--box-shadow-item);\n"]))),L=w.a.ul(c||(c=Object(g.a)(["\n  display: flex;\n  margin: 0;\n  padding: 0;\n"]))),P=w.a.li(i||(i=Object(g.a)(["\n  background-color: ",";\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(68px, 1fr));\n  align-items: center;\n  border: 1px solid var(--color-bgc-avatar);\n  padding: 5px 0;\n"])),(function(a){return a.color()})),q=w.a.span(s||(s=Object(g.a)(["\n  text-align: center;\n  color: var(--color-white);\n"]))),F=w.a.h2(r||(r=Object(g.a)(["\n  width: 150px;\n  margin: 0 auto;\n  padding: 20px 0 50px;\n"]))),U=t(12),k=t.n(U),I=function(a){var e=a.title,t=a.stats;return Object(u.jsxs)(N,{children:[e&&Object(u.jsx)(F,{children:e}),Object(u.jsx)(L,{children:t.map((function(a){var e=a.id,t=a.label,n=a.percentage;return Object(u.jsxs)(P,{color:k.a,children:[Object(u.jsx)(q,{children:t}),Object(u.jsxs)(q,{children:[n,"%"]})]},e)}))})]})},J=t(7),S=t.n(J),T=function(a){var e=a.items;return Object(u.jsxs)("table",{className:S.a.transaction_history,children:[Object(u.jsx)("thead",{className:S.a.table_head,children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Type"}),Object(u.jsx)("th",{children:"Amount"}),Object(u.jsx)("th",{children:"Currency"})]})}),Object(u.jsx)("tbody",{children:e.map((function(a){return Object(u.jsxs)("tr",{className:S.a.info,children:[Object(u.jsx)("td",{children:a.type}),Object(u.jsx)("td",{children:a.amount}),Object(u.jsx)("td",{children:a.currency})]},a.id)}))})]})},C=t(13),G=t(5),D=t(14),H=t(15),A=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{friends:C}),Object(u.jsx)(v,{name:G.name,tag:G.tag,location:G.location,avatar:G.avatar,stats:G.stats}),Object(u.jsx)(I,{title:"Upload stats",stats:D}),Object(u.jsx)(T,{items:H})]})};b.a.render(Object(u.jsx)(l.a.StrictMode,{children:Object(u.jsx)(A,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.ca1fa91d.chunk.js.map