/**
 * @description typecho后台编辑器插入的js
 * @author ihewro && yoniu
 */

$(document).ready(function() {
	if ($("#wmd-button-row").length > 0) {
		$('#wmd-button-row').append('<br><li class="wmd-button" id="wmd-music-button" style="" title="插入音乐"><svg id="bili-music" viewBox="0 0 1024 1024" style="width:30px; height:30px"><path d="M881.92 460.8A335.36 335.36 0 0 0 547.584 125.696h-73.216A335.616 335.616 0 0 0 139.776 460.8v313.6a18.688 18.688 0 0 0 18.432 18.688h41.984c13.568 46.336 37.888 80.384 88.576 80.384h98.304a37.376 37.376 0 0 0 37.376-36.864l1.28-284.672a36.864 36.864 0 0 0-37.12-37.12h-99.84a111.616 111.616 0 0 0-51.2 12.8v-73.216a242.432 242.432 0 0 1 241.664-241.664h67.328a242.176 242.176 0 0 1 241.408 241.664v74.496a110.592 110.592 0 0 0-54.272-14.08h-99.84a36.864 36.864 0 0 0-37.12 37.12v284.672a37.376 37.376 0 0 0 37.376 36.864h98.304c51.2 0 75.008-34.048 88.576-80.384h41.984a18.688 18.688 0 0 0 18.432-18.688z" fill="#45C7DD"></path><path d="M646.141043 825.220963m0.045396-32.511969l0.273801-196.095809q0.045395-32.511968 32.557364-32.466573l1.023999 0.00143q32.511968 0.045395 32.466573 32.557364l-0.273802 196.095809q-0.045395 32.511968-32.557363 32.466573l-1.023999-0.00143q-32.511968-0.045395-32.466573-32.557364Z" fill="#FF5C7A"></path><path d="M307.222608 825.246563m0.045395-32.511969l0.273801-196.095809q0.045395-32.511968 32.557364-32.466573l1.023999 0.00143q32.511968 0.045395 32.466573 32.557364l-0.273801 196.095809q-0.045395 32.511968-32.557364 32.466573l-1.023999-0.00143q-32.511968-0.045395-32.466573-32.557364Z" fill="#FF5C7A"></path></svg></li>' + '<li class="wmd-button" id="wmd-video-button" style="" title="插入视频"><svg id="bili-live" viewBox="0 0 1024 1024" style="width:30px; height:30px"><path d="M392.448 275.911111a92.416 92.416 0 1 1-184.832 0 92.416 92.416 0 0 1 184.832 0" fill="#23ADE5"></path><path d="M826.624 464.583111l-63.744 36.864v-48.64a72.206222 72.206222 0 0 0-71.68-71.936H190.72a72.192 72.192 0 0 0-71.936 71.936V748.231111a71.936 71.936 0 0 0 71.936 71.936H691.2a71.936 71.936 0 0 0 71.936-71.936v-23.808l63.488 37.888a51.2 51.2 0 0 0 76.8-44.544V508.871111a51.2 51.2 0 0 0-76.8-44.288M572.928 369.351111c79.459556 0.142222 143.985778-64.156444 144.128-143.616 0.142222-79.459556-64.156444-143.985778-143.616-144.128-79.260444-0.142222-143.701333 63.857778-144.128 143.104-0.426667 79.459556 63.644444 144.213333 143.104 144.64h0.512" fill="#48CFE5"></path><path d="M425.216 512.967111l124.16 71.936a25.6 25.6 0 0 1 0 42.496l-124.16 71.68a25.6 25.6 0 0 1-37.12-21.248V534.471111a25.6 25.6 0 0 1 37.12-21.504" fill="#FDDE80"></path></svg></li>' + '<li class="wmd-button" id="wmd-bilibili-button" style="" title="插入bilibili视频"><svg id="bili-anime" viewBox="0 0 1024 1024" style="width:30px; height:30px"><path d="M588.8 359.68l-12.032-7.424 150.272-206.592a30.976 30.976 0 0 0-51.2-36.352l-153.6 210.176L281.6 170.24a30.976 30.976 0 1 0-33.024 52.736L486.4 369.92l-22.784 31.488a30.976 30.976 0 1 0 51.2 36.352l25.6-35.072 16.128 9.728A30.976 30.976 0 1 0 588.8 359.68z" fill="#FB813A"></path><path d="M763.648 850.688m-53.248 0a53.248 53.248 0 1 0 106.496 0 53.248 53.248 0 1 0-106.496 0Z" fill="#FB813A"></path><path d="M261.12 797.44a53.248 53.248 0 1 0 53.504 53.248 53.248 53.248 0 0 0-53.504-53.248z" fill="#FB813A"></path><path d="M141.312 314.368m92.928 0l556.288 0q92.928 0 92.928 92.928l0 360.704q0 92.928-92.928 92.928l-556.288 0q-92.928 0-92.928-92.928l0-360.704q0-92.928 92.928-92.928Z" fill="#FDDE80"></path><path d="M520.448 575.232m-128.256 0a128.256 128.256 0 1 0 256.512 0 128.256 128.256 0 1 0-256.512 0Z" fill="#FFFFFF"></path><path d="M476.928 546.56c0-26.88 19.2-37.632 42.24-25.6l49.664 28.672a25.6 25.6 0 0 1 0 48.64l-49.664 28.672c-23.04 13.568-42.24 2.56-42.24-24.32z" fill="#FB813A"></path></svg></li>' + '<li class="wmd-button" id="wmd-color-button" style="" title="有颜色的字体"><svg id="bili-ent" viewBox="0 0 1024 1024" style="width:30px; height:30px"><path d="M534.442796 378.982175m36.203867 36.203867l30.592268 30.592268q36.203867 36.203867 0 72.407734l-360.590518 360.590518q-36.203867 36.203867-72.407734 0l-30.592268-30.592268q-36.203867-36.203867 0-72.407735l360.590518-360.590517q36.203867-36.203867 72.407734 0Z" fill="#FF8693"></path><path d="M369.92 543.744l137.472-137.472a38.912 38.912 0 0 1 54.528 0l48.384 48.64a38.4 38.4 0 0 1 0 54.528l-137.984 137.984z" fill="#FC6376"></path><path d="M286.133941 631.021801m12.854616 12.85013l72.601422 72.576083q12.854616 12.850129 0.004486 25.704746l-1.62889 1.629458q-12.850129 12.854616-25.704745 0.004486l-72.601422-72.576083q-12.854616-12.850129-0.004486-25.704745l1.62889-1.629459q12.850129-12.854616 25.704745-0.004486Z" fill="#FFA9B1"></path><path d="M737.024 547.584a99.328 99.328 0 0 1 62.72-62.72l51.2-13.568a27.136 27.136 0 0 0 13.056-49.664L826.624 384a98.816 98.816 0 0 1-22.784-85.76l16.896-63.232c7.168-27.136-8.96-43.52-36.096-36.096l-63.232 16.896a98.816 98.816 0 0 1-85.76-23.04l-37.376-36.864a27.136 27.136 0 0 0-49.408 13.312l-13.824 51.2a97.792 97.792 0 0 1-62.464 62.72l-51.2 13.824a27.136 27.136 0 0 0-13.312 49.408L445.44 384a97.536 97.536 0 0 1 23.04 85.504l-16.896 63.232c-7.424 27.392 8.96 43.52 36.096 36.352l63.232-16.896a97.792 97.792 0 0 1 85.76 22.784l37.376 37.376a26.88 26.88 0 0 0 49.408-13.312z" fill="#FDDE80"></path><path d="M886.272 417.536l-74.752-75.008 30.464-114.432a41.216 41.216 0 0 0-8.704-41.472A41.728 41.728 0 0 0 791.808 179.2l-114.432 30.72-74.752-76.032A41.728 41.728 0 0 0 563.2 120.576a41.216 41.216 0 0 0-28.416 31.488l-27.392 102.4L404.48 281.6a42.24 42.24 0 0 0-31.744 28.16 42.24 42.24 0 0 0 13.312 40.448L460.8 425.216l-30.72 114.432a41.728 41.728 0 0 0 8.96 41.472 37.888 37.888 0 0 0 27.392 10.752 56.832 56.832 0 0 0 14.08-2.048l114.432-30.72 74.752 75.008a45.824 45.824 0 0 0 31.232 14.336 34.304 34.304 0 0 0 8.96 0 41.216 41.216 0 0 0 28.416-31.488l27.392-102.4 102.4-27.392a41.984 41.984 0 0 0 31.488-28.416 40.96 40.96 0 0 0-13.312-41.216z m-84.736-203.52h5.12a16.896 16.896 0 0 1 0 5.12l-25.6 93.696-72.96-73.728z m-32 139.776l-34.56 128-128 34.56-102.4-102.4 34.56-128 128-34.56z m-199.424-192c0-2.56 1.792-4.096 1.792-4.608a9.984 9.984 0 0 1 4.096 3.072l59.648 59.648-87.296 23.296z m-157.696 162.048L409.6 320a12.8 12.8 0 0 1 4.864-2.048l81.152-21.76-23.552 87.808z m58.368 230.4a18.944 18.944 0 0 1-5.12 0 17.92 17.92 0 0 1 0-5.12l25.6-93.696L563.2 528.64z m230.4 51.2c0 2.816-1.536 4.096-1.536 4.864a20.992 20.992 0 0 1-4.352-3.328l-59.392-59.392 87.296-23.552z m156.16-156.16l-81.152 21.76 23.296-87.04 59.392 59.392a40.96 40.96 0 0 1 3.328 3.84 12.8 12.8 0 0 1-4.096 2.56z" fill="#FCC029"></path></svg></li>' + '<li class="wmd-button" id="wmd-post-button" style="" title="调用其他文章"><svg id="bili-read" viewBox="0 0 1024 1024" style="width:30px; height:30px"><path d="M778.496 142.08h-537.6a56.832 56.832 0 0 0-60.16 54.016v630.528a56.832 56.832 0 0 0 59.136 54.016h537.6a56.832 56.832 0 0 0 59.136-54.016V196.096a56.832 56.832 0 0 0-59.136-54.016z" fill="#54E2E2"></path><path d="M298.496 679.168h421.376a25.6 25.6 0 0 0 0-52.736H298.496a25.6 25.6 0 1 0 0 52.736zM719.872 732.928H298.496a25.6 25.6 0 1 0 0 52.736h421.376a25.6 25.6 0 0 0 0-52.736z" fill="#23ADE5"></path><path d="M272.128 237.056m80.128 0l314.112 0q80.128 0 80.128 80.128l0 154.368q0 80.128-80.128 80.128l-314.112 0q-80.128 0-80.128-80.128l0-154.368q0-80.128 80.128-80.128Z" fill="#23ADE5"></path><path d="M404.992 361.472m-49.408 0a49.408 49.408 0 1 0 98.816 0 49.408 49.408 0 1 0-98.816 0Z" fill="#2EC3E5"></path><path d="M375.552 551.936l120.832-144.384a44.544 44.544 0 0 1 68.352 0l120.832 144.384z" fill="#2EC3E5"></path></svg></li>' + '<li class="wmd-spacer wmd-spacer1" id="wmd-spacer5"><li class="wmd-button" id="wmd-block-button" style="" title="空白格"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg></li>' + '<li class="wmd-button" id="wmd-close-button" style="" title="叉叉"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></li>' + '<li class="wmd-button" id="wmd-yes-button" style="" title="打勾"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></li>' + '<li class="wmd-spacer wmd-spacer1" id="wmd-spacer6"><li class="wmd-button" id="wmd-zhedie-button" style="" title="折叠框"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.8 3.8l16.4 16.4M20.2 3.8L3.8 20.2M15 3h6v6M9 3H3v6M15 21h6v-6M9 21H3v-6"/></svg></li>' + '<li class="wmd-button" id="wmd-login-button" style="" title="登录可见"><svg t="1587200288209" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4930" width="25" height="25"><path d="M1023.06 505.74a534 534 0 0 0-193.473333-272.833333q-2.393333-1.773333-4.813334-3.513334l107.646667-107.64a21.333333 21.333333 0 1 0-30.173333-30.173333L788.48 205.333333A534.666667 534.666667 0 0 0 0.94 505.74a21.333333 21.333333 0 0 0 0 12.52 534 534 0 0 0 193.473333 272.833333q2.386667 1.766667 4.813334 3.513334l-107.646667 107.64a21.333333 21.333333 0 0 0 30.173333 30.173333L235.52 818.666667a535.086667 535.086667 0 0 0 107.466667 49.806666 532.266667 532.266667 0 0 0 338 0 535.22 535.22 0 0 0 342.046666-350.193333 21.333333 21.333333 0 0 0 0.026667-12.54zM43.693333 512C108.5 310.7 300.113333 170.666667 512 170.666667c87.613333 0 171.753333 23.946667 244.906667 66.26L647.02 346.806667A211.72 211.72 0 0 0 512 298.666667a212.56 212.56 0 0 0-116.053333 34.3 21.333333 21.333333 0 0 0 23.24 35.786666 170.533333 170.533333 0 0 1 197.406666 8.48l-239.333333 239.333334a170.746667 170.746667 0 0 1-26.78-159.8 21.333333 21.333333 0 0 0-40.373333-13.8 213.7 213.7 0 0 0 36.726666 204l-116.573333 116.6C144.126667 703.153333 77.08 615.706667 43.693333 512z m603.073334-104.593333A169.826667 169.826667 0 0 1 682.666667 512c0 94.106667-76.56 170.666667-170.666667 170.666667a169.826667 169.826667 0 0 1-104.593333-35.9zM512 853.333333c-87.613333 0-171.753333-23.946667-244.906667-66.26l109.886667-109.88a213.333333 213.333333 0 0 0 300.213333-300.213333l116.546667-116.546667c86.133333 60.413333 153.18 147.86 186.566667 251.566667-64.806667 201.333333-256.42 341.333333-468.306667 341.333333z" fill="#000" p-id="4931"></path></svg></li>' +
		'<li class="wmd-button" id="wmd-password-button" style="" title="加密内容"><svg t="1587535720680" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12072" width="30" height="30"><path d="M325.568 409.744v-53.92C325.568 256.512 406.08 176 505.392 176c99.312 0 179.84 80.512 179.84 179.84v53.904h117.552a16 16 0 0 1 16 16v405.568a16 16 0 0 1-16 16H208a16 16 0 0 1-16-16V425.744a16 16 0 0 1 16-16h117.568z m311.648 0v-53.92a131.84 131.84 0 0 0-263.648 0v53.92h263.648z m-228.864 121.392h16a16 16 0 0 1 16 16v34.784a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-34.784a16 16 0 0 1 16-16z m178.08 2.784h16a16 16 0 0 1 16 16v34.768a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16V549.92a16 16 0 0 1 16-16zM240 799.312h530.784V457.744H240v341.568z m149.552-104.864l11.712-11.712c8.128-8.08 18.272-2.368 22.64 1.008a131.888 131.888 0 0 0 162.496-0.928c3.936-3.136 11.36-9.76 21.248-0.272l12.4 12.416c8.784 9.104 3.984 18.992-0.032 22.352a179.872 179.872 0 0 1-230.608 0.288c-4.128-3.456-11.296-11.488 0.144-23.152z" p-id="12073"></path></svg></li>' + 
		'<li class="wmd-button" id="wmd-reply-button" style="" title="回复可见"><svg t="1593185645641" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6282" width="25" height="25"><path d="M896 128H128a32 32 0 0 0-32 32v576a32 32 0 0 0 32 32h288v-64H160V192h704v512h-256c-8.832 0-16.832 3.584-22.656 9.376l-159.968 160 45.248 45.248L621.248 768H896a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32" fill="#000000" p-id="6283"></path><path d="M560 448a48 48 0 1 0-95.968-0.032A48 48 0 0 0 560 448M240 448a48 48 0 1 0 95.968 0.032A48 48 0 0 0 240 448M784 448a48 48 0 1 0-95.968-0.032A48 48 0 0 0 784 448" fill="#000000" p-id="6284"></path></svg></li>' + 
		'<li class="wmd-button" id="wmd-Youtube-button" style="" title="Youtube"><svg t="1611906572520" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4958" width="25" height="25"><path d="M426.666667 682.666667V384l256 149.845333L426.666667 682.666667z m587.093333-355.541334s-10.026667-71.04-40.704-102.357333c-38.954667-41.088-82.602667-41.258667-102.613333-43.648C727.168 170.666667 512.213333 170.666667 512.213333 170.666667h-0.426666s-214.954667 0-358.229334 10.453333c-20.053333 2.389333-63.658667 2.56-102.656 43.648-30.677333 31.317333-40.661333 102.4-40.661333 102.4S0 410.538667 0 493.952v78.293333c0 83.456 10.24 166.912 10.24 166.912s9.984 71.04 40.661333 102.357334c38.997333 41.088 90.154667 39.765333 112.938667 44.074666C245.76 893.568 512 896 512 896s215.168-0.341333 358.442667-10.752c20.053333-2.432 63.658667-2.602667 102.613333-43.690667 30.72-31.317333 40.704-102.4 40.704-102.4s10.24-83.413333 10.24-166.869333v-78.250667c0-83.456-10.24-166.912-10.24-166.912z" fill="#FF0000" p-id="4959"></path></svg></li>' + 
		'<li class="wmd-button" id="wmd-colorful-button" style="" title="多彩文章"><strong style="text-shadow: #5a5a5a 1px 1px 0px, #5a5a5a 1px -1px 0px, #5a5a5a -1px 1px 0px, #5a5a5a -1px -1px 0px, #5a5a5a 0px 1.4px 0px, #5a5a5a 0px -1.4px 0px, #5a5a5a -1.4px 0px 0px, #5a5a5a 1.4px 0px 0px, #f8ca2c 0px 3px 0px, #5a5a5a 1px 4px 0px, #5a5a5a 1px 2px 0px, #5a5a5a -1px 4px 0px, #5a5a5a -1px 2px 0px, #5a5a5a 0px 4.4px 0px, #5a5a5a 0px 1.6px 0px, #5a5a5a -1.4px 3px 0px, #5a5a5a 1.4px 3px 0px;color: #fefefe;"">多彩文章</strong></li>' + 
		'<style>' + '.wmd-button-row{height: 100%!important;}</style>');

		$(document).on('click', '#wmd-music-button',
		function() {
			$('body').append('<div id="MetingPanel">' + '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' + '<div class="wmd-prompt-dialog">' + '<div>' + '<p><b>插入音乐</b></p>' + '<p><labe>音乐直链地址</labe><input name="music-link" type="text" placeholder="http(s)://"></input></p>' + '<p><labe>歌手</labe><input name="music-singer" type="text"></input></p>' + '<p><labe>歌名</labe><input name="music-song" type="text"></input></p>' + '<p><labe>封面图直链</labe><input name="music-pic" type="text"></input></p>' + '</div>' + '<button type="button" class="btn btn-s primary" id="music_ok">确定</button>' + '<button type="button" class="btn btn-s" id="music_cancel">取消</button>' + '</div>' + '</div>');
		});
		$(document).on('click', '#wmd-video-button',
		function() {
			$('body').append('<div id="videoPanel">' + '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' + '<div class="wmd-prompt-dialog">' + '<div>' + '<p><b>插入视频</b></p>' + '<labe>视频直链地址</labe><input type="text" name="video-link" placeholder="http(s)://"></input></p>' + '</div>' + '<button type="button" class="btn btn-s primary" id="video_ok">确定</button>' + '<button type="button" class="btn btn-s" id="video_cancel">取消</button>' + '</div>' + '</div>');
		});
		$(document).on('click', '#wmd-post-button',
		function() {
			$('body').append('<div id="postPanel">' + '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' + '<div class="wmd-prompt-dialog">' + '<div>' + '<p><b>引用文章</b></p>' + '<labe>文章id</labe><input type="text" name="post-cid"></input></p>' + '</div>' + '<button type="button" class="btn btn-s primary" id="post_ok">确定</button>' + '<button type="button" class="btn btn-s" id="post_cancel">取消</button>' + '</div>' + '</div>');
		});
		$(document).on('click', '#wmd-zhedie-button',
		function() {
			$('body').append('<div id="zhediePanel">' + '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' + '<div class="wmd-prompt-dialog">' + '<div>' + '<p><b>插入折叠框</b></p>' + '<p><input name="zhedie-title" type="text" placeholder="折叠框标题"></input></p>' + '<p><textarea id="zhedie-content" name="zhedie-content" class="w-100 mono" placeholder="折叠框内容"></textarea></p>' + '</div>' + '<button type="button" class="btn btn-s primary" id="zhedie_ok">确定</button>' + '<button type="button" class="btn btn-s" id="zhedie_cancel">取消</button>' + '</div>' + '</div>');
		});
		$(document).on('click', '#wmd-login-button',
		function() {
			$('body').append('<div id="loginPanel">' + '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' + '<div class="wmd-prompt-dialog">' + '<div>' + '<p><b>插入登录可见内容</b></p>' + '<p><textarea id="login-content" name="login-content" class="w-100 mono" placeholder="内容"></textarea></p>' + '</div>' + '<button type="button" class="btn btn-s primary" id="login_ok">确定</button>' + '<button type="button" class="btn btn-s" id="login_cancel">取消</button>' + '</div>' + '</div>');
		});
		$(document).on('click', '#wmd-color-button',
		function() {
			$('body').append('<div id="colorPanel">' + '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' + '<div class="wmd-prompt-dialog">' + '<div>' + '<p><b>插入有颜色的内容</b></p>' + '<p><select id="yoniu-color">' + '<option value="red" style=color:#dc3545>red' + '<option value="blue" style=color:#007bff>blue' + '<option value="indigo" style=color:#6610f2>indigo' + '<option value="purple" style=color:#6f42c1>purple' + '<option value="pink" style=color:#e83e8c>pink' + '<option value="orange" style=color:#fd7e14>orange' + '<option value="yellow" style=color:#ffc107>yellow' + '<option value="green" style=color:#28a745>green' + '<option value="teal" style=color:#20c997>teal' + '<option value="cyan" style=color:#17a2b8>cyan' + '<option value="gray" style=color:#6c757d>gray' + '<option value="dark" style=color:#343a40>dark' + '</select></p>' + '<p><textarea id="color-content" name="color-content" class="w-100 mono" placeholder="内容"></textarea></p>' + '</div>' + '<button type="button" class="btn btn-s primary" id="color_ok">确定</button>' + '<button type="button" class="btn btn-s" id="color_cancel">取消</button>' + '</div>' + '</div>');
		});
		$(document).on('click', '#wmd-bilibili-button',
		function() {
			$('body').append('<div id="bilibiliPanel">' + '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' + '<div class="wmd-prompt-dialog">' + '<div>' + '<p><b>插入bilibili视频</b></p>' + '<p><select id="yoniu-bilibili">' + '<option value="av">av号' + '<option value="bv">bv号' + '</select></p>' + '<p><input name="bilibili-hao" type="text" placeholder="av号或者bv号"></input></p>' + '<p><input name="bilibili-p" type="text" placeholder="第几P，留空及默认为1"></input></p>' + '</div>' + '<button type="button" class="btn btn-s primary" id="bilibili_ok">确定</button>' + '<button type="button" class="btn btn-s" id="bilibili_cancel">取消</button>' + '</div>' + '</div>');
		});
		$(document).on('click', '#wmd-password-button',
		function() {
			$('body').append('<div id="passwordPanel">' + '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' + '<div class="wmd-prompt-dialog">' + '<div>' + '<p><b>插入密码阅读</b></p>' + '<p><input name="password" type="text" placeholder="访问密码"></input></p>' + '<p><textarea id="password-content" name="password-content" class="w-100 mono" placeholder="隐藏内容"></textarea></p>' + '</div>' + '<button type="button" class="btn btn-s primary" id="password_ok">确定</button>' + '<button type="button" class="btn btn-s" id="password_cancel">取消</button>' + '</div>' + '</div>');
		});
		$(document).on('click', '#wmd-reply-button',
		function() {
			$('body').append('<div id="replyPanel">' + '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' + '<div class="wmd-prompt-dialog">' + '<div>' + '<p><b>插入回复可见</b></p>' + '<p><textarea id="reply-content" name="reply-content" class="w-100 mono" placeholder="回复可见内容"></textarea></p>' + '</div>' + '<button type="button" class="btn btn-s primary" id="reply_ok">确定</button>' + '<button type="button" class="btn btn-s" id="reply_cancel">取消</button>' + '</div>' + '</div>');
		});
		$(document).on('click', '#wmd-Youtube-button',
		function() {
			$('body').append('<div id="YoutubePanel">' + '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' + '<div class="wmd-prompt-dialog">' + '<div>' + '<p><b>插入Youtube视频</b></p>' + '<labe>视频v号</labe><input type="text" name="Youtube-link"></input></p>' + '</div>' + '<button type="button" class="btn btn-s primary" id="Youtube_ok">确定</button>' + '<button type="button" class="btn btn-s" id="Youtube_cancel">取消</button>' + '</div>' + '</div>');
		});
		$(document).on('click', '#wmd-colorful-button',
		function() {
			$('body').append('<div id="colorfulPanel">' + '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' + '<div class="wmd-prompt-dialog">' + '<div>' + '<p><b>插入多彩html代码</b></p>' + '<p><select id="yoniu-colorful">' + '<option value="timeline">时间轴' + '<option value="messageReceive">聊天气泡（接收）' + '<option value="messageSend">聊天气泡（发送）' + '<option value="linkCardIcon">链接卡片（无封面）' + '<option value="linkCardImage">链接卡片（有封面）' + '</select></p>' + '</div>' + '<button type="button" class="btn btn-s primary" id="colorful_ok">确定</button>' + '<button type="button" class="btn btn-s" id="colorful_cancel">取消</button>' + '</div>' + '</div>');
		});

		$(document).on('click', '#music_cancel',
		function() {
			$('#MetingPanel').remove();
			$('textarea').focus();
		});
		$(document).on('click', '#video_cancel',
		function() {
			$('#videoPanel').remove();
			$('textarea').focus();
		});
		$(document).on('click', '#post_cancel',
		function() {
			$('#postPanel').remove();
			$('textarea').focus();
		});
		$(document).on('click', '#zhedie_cancel',
		function() {
			$('#zhediePanel').remove();
			$('textarea').focus();
		});
		$(document).on('click', '#password_cancel',
		function() {
			$('#passwordPanel').remove();
			$('textarea').focus();
		});
		$(document).on('click', '#reply_cancel',
		function() {
			$('#replyPanel').remove();
			$('textarea').focus();
		});
		$(document).on('click', '#login_cancel',
		function() {
			$('#loginPanel').remove();
			$('textarea').focus();
		});
		$(document).on('click', '#color_cancel',
		function() {
			$('#colorPanel').remove();
			$('textarea').focus();
		});
		$(document).on('click', '#bilibili_cancel',
		function() {
			$('#bilibiliPanel').remove();
			$('textarea').focus();
		});
		$(document).on('click', '#Youtube_cancel',
		function() {
			$('#YoutubePanel').remove();
			$('textarea').focus();
		});
		$(document).on('click', '#colorful_cancel',
		function() {
			$('#colorfulPanel').remove();
			$('textarea').focus();
		});

		$(document).on('click', '#music_ok',
		function() {
			var mylink = $('.wmd-prompt-dialog input[name="music-link"]').val();
			var mypic = $('.wmd-prompt-dialog input[name="music-pic"]').val();
			var mysinger = $('.wmd-prompt-dialog input[name="music-singer"]').val();
			var mysong = $('.wmd-prompt-dialog input[name="music-song"]').val();
			textContent = '[aplay singer="' + mysinger + '" song="' + mysong + '" src="' + mylink + '" pic="' + mypic + '"]';
			myField = document.getElementById('text');
			inserContentToTextArea(myField, textContent, '#MetingPanel');
		});
		$(document).on('click', '#video_ok',
		function() {
			var mylink = $('.wmd-prompt-dialog input[name="video-link"]').val();
			textContent = '[dplay src="' + mylink + '"]';
			myField = document.getElementById('text');
			inserContentToTextArea(myField, textContent, '#videoPanel');
		});
		$(document).on('click', '#post_ok',
		function() {
			var mycid = $('.wmd-prompt-dialog input[name="post-cid"]').val();
			textContent = '[post cid=' + mycid + ']';
			myField = document.getElementById('text');
			inserContentToTextArea(myField, textContent, '#postPanel');
		});
		$(document).on('click', '#zhedie_ok',
		function() {
			var mytitle = $('.wmd-prompt-dialog input[name="zhedie-title"]').val();
			var mycontent = $('#zhedie-content').val();
			textContent = '\r\n' + '[zhedie=' + mytitle + ']' + mycontent + '\r\n' + '[/zhedie]' + '\r\n';
			myField = document.getElementById('text');
			inserContentToTextArea(myField, textContent, '#zhediePanel');
		});
		$(document).on('click', '#password_ok',
		function() {
			var mytitle = $('.wmd-prompt-dialog input[name="password"]').val();
			var mycontent = $('#password-content').val();
			textContent = '\r\n' + '[password=' + mytitle + ']' + mycontent + '[/password]' + '\r\n';
			myField = document.getElementById('text');
			inserContentToTextArea(myField, textContent, '#passwordPanel');
		});
		$(document).on('click', '#reply_ok',
		function() {
			var mycontent = $('#reply-content').val();
			textContent = '\r\n' + '[reply]' + mycontent + '[/reply]' + '\r\n';
			myField = document.getElementById('text');
			inserContentToTextArea(myField, textContent, '#replyPanel');
		});
		$(document).on('click', '#login_ok',
		function() {
			var mycontent = $('#login-content').val();
			textContent = '\r\n' + '[hide]' + mycontent + '\r\n' + '[/hide]' + '\r\n';
			myField = document.getElementById('text');
			inserContentToTextArea(myField, textContent, '#loginPanel');
		});
		$(document).on('click', '#color_ok',
		function() {
			var mycolor = $("#yoniu-color option:selected").val();
			var mycontent = $('#color-content').val();
			textContent = ' [c=' + mycolor + ']' + mycontent + '[/c] ';
			myField = document.getElementById('text');
			inserContentToTextArea(myField, textContent, '#colorPanel');
		});
		$(document).on('click', '#bilibili_ok',
		function() {
			var myab = $("#yoniu-bilibili option:selected").val();
			var myid = $('.wmd-prompt-dialog input[name="bilibili-hao"]').val();
			var myp = $('.wmd-prompt-dialog input[name="bilibili-p"]').val();
			if (myp == '') {
				myp = '1';
			}
			textContent = '\r\n' + '[bilibili ' + myab + '="' + myid + '" p="' + myp + '"]' + '\r\n';
			myField = document.getElementById('text');
			inserContentToTextArea(myField, textContent, '#bilibiliPanel');
		});
		$(document).on('click', '#wmd-block-button',
		function() {
			textContent = '[check] ';
			myField = document.getElementById('text');
			inserContentToTextArea(myField, textContent);
		});
		$(document).on('click', '#wmd-close-button',
		function() {
			textContent = '[close] ';
			myField = document.getElementById('text');
			inserContentToTextArea(myField, textContent);
		});
		$(document).on('click', '#wmd-yes-button',
		function() {
			textContent = '[checking] ';
			myField = document.getElementById('text');
			inserContentToTextArea(myField, textContent);
		});
		$(document).on('click', '#Youtube_ok',
		function() {
			var mylink = $('.wmd-prompt-dialog input[name="Youtube-link"]').val();
			textContent = '[Youtube v="' + mylink + '"]';
			myField = document.getElementById('text');
			inserContentToTextArea(myField, textContent, '#YoutubePanel');
		});
		$(document).on('click', '#colorful_ok',
		function() {
			var myab = $("#yoniu-colorful option:selected").val();
			if(myab == 'timeline'){
				textContent = '\r\n' + '!!!' + '\r\n' + '<div class="yoniu-timeline">' + '\r\n' + '    <div class="yoniu-timeline-title"><span>时间轴标题</span></div>' + '\r\n' + '    <div class="yoniu-timeline-item"><span>时间轴1内容</span></div>' + '\r\n' + '    <div class="yoniu-timeline-item"><span>时间轴2内容（可删除可复制此行）</span></div>' + '\r\n' + '</div>' + '\r\n' + '!!!' + '\r\n';
			}else if(myab == 'messageReceive'){
				textContent = '\r\n' + '!!!' + '\r\n' + '<div class="yoniu-message-receive">' + '\r\n' + '    <div class="yoniu-message-user"><img src="头像图片链接" alt="avatar" /><span>名字</span></div>' + '\r\n' + '    <div class="yoniu-message-word"><span>信息内容</span></div>' + '\r\n' + '</div>' + '\r\n' + '!!!' + '\r\n';
			}else if(myab == 'messageSend'){
				textContent = '\r\n' + '!!!' + '\r\n' + '<div class="yoniu-message-send">' + '\r\n' + '    <div class="yoniu-message-user"><img src="头像图片链接" alt="avatar" /><span>名字</span></div>' + '\r\n' + '    <div class="yoniu-message-word"><span>信息内容</span></div>' + '\r\n' + '</div>' + '\r\n' + '!!!' + '\r\n';
			}else if(myab == 'linkCardIcon'){
				textContent = '\r\n' + '!!!' + '\r\n' + '<a href="链接地址" class="yoniu-link-card" target="_blank">' + '\r\n' + '  <div class="link-card-left"><i class="link-card-img fa fa-link"></i></div>' + '\r\n' + '  <div class="link-card-right">' + '\r\n' + '    <span class="link-card-title">链接标题</span>' + '\r\n' + '    <span class="link-card-desc">链接描述</span>' + '\r\n' + '    <span class="link-card-tip">链接域名（如: t.co）</span>' + '\r\n' + '  </div>' + '\r\n' + '</a>' + '\r\n' + '!!!' + '\r\n';
			}else if(myab == 'linkCardImage'){
				textContent = '\r\n' + '!!!' + '\r\n' + '<a href="链接地址" class="yoniu-link-card" target="_blank">' + '\r\n' + '  <div class="link-card-image"><div class="link-card-img" style="--background:url(封面图链接);"></div></div>' + '\r\n' + '  <div class="link-card-right">' + '\r\n' + '    <span class="link-card-title">链接标题</span>' + '\r\n' + '    <span class="link-card-desc">链接描述</span>' + '\r\n' + '    <span class="link-card-tip"><i class="fa fa-link"></i> 链接域名（如: t.co）</span>' + '\r\n' + '  </div>' + '\r\n' + '</a>' + '\r\n' + '!!!' + '\r\n';
			}
			myField = document.getElementById('text');
			inserContentToTextArea(myField, textContent, '#colorfulPanel');
		});
	}
	$('#tab-files').append('<a id="inserAll" href="javascript:;" style="display:block;padding:5px 10px;background:rgb(29,161,242);color:#fff;text-align:center;text-decoration:none!important;">插入全部</a>');
	$(document).on('click', '#inserAll',function() {
		if($("#file-list li .insert").length > 0){
			var textContent = '';
			$("#file-list li .insert").each(function(){
				var t = $(this), p = t.parents('li');
				textContent += '\r\n' + '![' + t.text() + '](' + p.data('url') + ')';
			});
			textContent += '\r\n';
			myField = document.getElementById('text');
			inserContentToTextArea(myField, textContent);
		}else{
			alert('请先上传文件');
		}
		return false;
	});
	$(document).on('click', '#location',function() {
		var map = new AMap.Map('map',{
			resizeEnable: true
		});
		AMap.plugin('AMap.Geolocation', function() {
			var geolocation = new AMap.Geolocation({
				timeout: 10000,
				zoomToAccuracy: true
			});
			geolocation.getCurrentPosition(function(status,result){
				if(status=='complete'){
					onComplete(result)
				}else{
					onError(result)
				}
			});
		});
		//解析定位结果
		function onComplete(data) {
			$('input[name="fields[location]"]').val(data.formattedAddress + "|" + data.position.getLng() + "|" + data.position.getLat());
			var marker = new AMap.Marker({
				position: data.position
			});
			map.setZoomAndCenter(15,data.position);
			map.add(marker);
			$('#map').addClass('success');
		}
		//解析定位错误信息
		function onError(data) {
			$('input[name="fields[location]"]').val('定位失败');
		}
		return false;
	});
});
function inserContentToTextArea(myField, textContent, modelId = '') {
	if (modelId != '') {
		$(modelId).remove();
	}
	if (document.selection) {
		myField.focus();
		var sel = document.selection.createRange();
		sel.text = textContent;
		myField.focus();
	} else if (myField.selectionStart || myField.selectionStart == '0') {
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		var cursorPos = startPos;
		myField.value = myField.value.substring(0, startPos) + textContent + myField.value.substring(endPos, myField.value.length);
		cursorPos += textContent.length;
		myField.selectionStart = cursorPos;
		myField.selectionEnd = cursorPos;
		myField.focus();
	} else { //其他环境
		myField.value += textContent;
		myField.focus();
	}
}