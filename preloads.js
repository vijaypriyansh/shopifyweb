
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.9CyK3lJA.js","/cdn/shopifycloud/checkout-web/assets/c1/app.DifvZhEL.js","/cdn/shopifycloud/checkout-web/assets/c1/630ba094.CsurVcBp.js","/cdn/shopifycloud/checkout-web/assets/c1/4509beb0.CMx1n1Mf.js","/cdn/shopifycloud/checkout-web/assets/c1/6a2fc6d6.DajdWPbV.js","/cdn/shopifycloud/checkout-web/assets/c1/f025431a.XKyaHtl9.js","/cdn/shopifycloud/checkout-web/assets/c1/6ec9a0fa.o-yUlC9Z.js","/cdn/shopifycloud/checkout-web/assets/c1/164ad2e3.CcqjFTsR.js","/cdn/shopifycloud/checkout-web/assets/c1/fb3b4968.DnvQj90_.js","/cdn/shopifycloud/checkout-web/assets/c1/7d6bf786.DjYAVAjR.js","/cdn/shopifycloud/checkout-web/assets/c1/6b0dea54.B8F-Igw5.js","/cdn/shopifycloud/checkout-web/assets/c1/0f5b1987.CPbD8vo0.js","/cdn/shopifycloud/checkout-web/assets/c1/9e5d8eb8.qjtHGJMj.js","/cdn/shopifycloud/checkout-web/assets/c1/a45fed45.DooKG4_S.js","/cdn/shopifycloud/checkout-web/assets/c1/c328865d.g7VQW1Xy.js","/cdn/shopifycloud/checkout-web/assets/c1/f1384cc2.BrGHQ0Kc.js","/cdn/shopifycloud/checkout-web/assets/c1/3c88b112.DZ9AGKzZ.js","/cdn/shopifycloud/checkout-web/assets/c1/486c3fda.Dqm-ybv0.js","/cdn/shopifycloud/checkout-web/assets/c1/17f6d6d8.B--AiBcV.js","/cdn/shopifycloud/checkout-web/assets/c1/19286c78.j0_NxzdB.js","/cdn/shopifycloud/checkout-web/assets/c1/cb6adac5.BJYq0K_G.js","/cdn/shopifycloud/checkout-web/assets/c1/c7b92b97.DpzNR-_u.js","/cdn/shopifycloud/checkout-web/assets/c1/faece749.Bq-Mpp_z.js","/cdn/shopifycloud/checkout-web/assets/c1/77d9e668.BvlMrecD.js","/cdn/shopifycloud/checkout-web/assets/c1/83dfec2b.DxPQQnGl.js","/cdn/shopifycloud/checkout-web/assets/c1/a1157422.Brv91E6H.js","/cdn/shopifycloud/checkout-web/assets/c1/77821758.B8cJZCav.js","/cdn/shopifycloud/checkout-web/assets/c1/9c33421f.DMA5oilS.js","/cdn/shopifycloud/checkout-web/assets/c1/2c7267bc.Byt19Np3.js","/cdn/shopifycloud/checkout-web/assets/c1/37c3ef79.BKaInTBf.js","/cdn/shopifycloud/checkout-web/assets/c1/82d59f8f.BLXJiIG0.js","/cdn/shopifycloud/checkout-web/assets/c1/651bb548.DH23meYN.js","/cdn/shopifycloud/checkout-web/assets/c1/b71b03d1.BZHWmvMa.js","/cdn/shopifycloud/checkout-web/assets/c1/928dbd30.CNd5mVRC.js","/cdn/shopifycloud/checkout-web/assets/c1/a8202753.CGGqB1sS.js","/cdn/shopifycloud/checkout-web/assets/c1/17db3e71.CLSxQnQH.js","/cdn/shopifycloud/checkout-web/assets/c1/2f5db8a5.3Lhs_eqc.js","/cdn/shopifycloud/checkout-web/assets/c1/c0466e46.DSTCiyzE.js","/cdn/shopifycloud/checkout-web/assets/c1/4ddb1a76.DVmir-ed.js","/cdn/shopifycloud/checkout-web/assets/c1/5f07060a.BALjK4SB.js","/cdn/shopifycloud/checkout-web/assets/c1/83f74304.CZIhNDWj.js","/cdn/shopifycloud/checkout-web/assets/c1/7edfee1d.BTc-rPBX.js","/cdn/shopifycloud/checkout-web/assets/c1/ce604576.DV8F48VL.js","/cdn/shopifycloud/checkout-web/assets/c1/b01c110b.C5e_dZsS.js","/cdn/shopifycloud/checkout-web/assets/c1/f1754c88.DYaHf-SI.js","/cdn/shopifycloud/checkout-web/assets/c1/5d731017.CRAu2sF9.js","/cdn/shopifycloud/checkout-web/assets/c1/f00fed33.DHjWloZM.js","/cdn/shopifycloud/checkout-web/assets/c1/94493b3a.uKaHQ_x2.js","/cdn/shopifycloud/checkout-web/assets/c1/cc41c36d.DeRUZQun.js","/cdn/shopifycloud/checkout-web/assets/c1/99cd9b25.DPWCR2Nf.js","/cdn/shopifycloud/checkout-web/assets/c1/676eb8e9.C34GxkdO.js","/cdn/shopifycloud/checkout-web/assets/c1/6a8181a5.DZ9RTzfP.js","/cdn/shopifycloud/checkout-web/assets/c1/0e3247a0.nkeUa0lx.js","/cdn/shopifycloud/checkout-web/assets/c1/1dbf806c.Cu8VoAEs.js","/cdn/shopifycloud/checkout-web/assets/c1/a56386a6.Dd_HAeNf.js","/cdn/shopifycloud/checkout-web/assets/c1/e1177f6f.CevBGn9O.js","/cdn/shopifycloud/checkout-web/assets/c1/674595ba.DRQTlBwt.js","/cdn/shopifycloud/checkout-web/assets/c1/173d1fdf.BgsQN5q4.js","/cdn/shopifycloud/checkout-web/assets/c1/16138b9e.CGOjQm6g.js","/cdn/shopifycloud/checkout-web/assets/c1/55432860.LHKUwOFT.js","/cdn/shopifycloud/checkout-web/assets/c1/0be192b6.DtEknCz9.js","/cdn/shopifycloud/checkout-web/assets/c1/2bce9289.DJULq78p.js","/cdn/shopifycloud/checkout-web/assets/c1/62a11d3e.Bw3P9zYf.js","/cdn/shopifycloud/checkout-web/assets/c1/9a493f3d.CE28WBxJ.js","/cdn/shopifycloud/checkout-web/assets/c1/402b40d8.Dohn3l2a.js","/cdn/shopifycloud/checkout-web/assets/c1/0b39f19a.CGzrEIpQ.js","/cdn/shopifycloud/checkout-web/assets/c1/dfb65aab.BGWz1nfN.js","/cdn/shopifycloud/checkout-web/assets/c1/ee4d5c67.DPL3Etx4.js","/cdn/shopifycloud/checkout-web/assets/c1/f3089cd3.Bn7AYS0O.js","/cdn/shopifycloud/checkout-web/assets/c1/e6980119.hYrHWNR8.js","/cdn/shopifycloud/checkout-web/assets/c1/53e8828a.BUlc09kQ.js","/cdn/shopifycloud/checkout-web/assets/c1/4c5b1c9e.Czc4FiYo.js","/cdn/shopifycloud/checkout-web/assets/c1/a541bc81.DOTwADQP.js","/cdn/shopifycloud/checkout-web/assets/c1/2b0d1656.DrjA1BhW.js","/cdn/shopifycloud/checkout-web/assets/c1/64c3067d.BcGRsyIJ.js","/cdn/shopifycloud/checkout-web/assets/c1/7bd337ea.VHsO94ul.js","/cdn/shopifycloud/checkout-web/assets/c1/bbe16958.DRVp00Eh.js","/cdn/shopifycloud/checkout-web/assets/c1/4205169c.DxO0a87o.js","/cdn/shopifycloud/checkout-web/assets/c1/35185bee.2cNdWMUq.js","/cdn/shopifycloud/checkout-web/assets/c1/ff52cf6d.XhGDbTAm.js","/cdn/shopifycloud/checkout-web/assets/c1/74e5a557.CCrOQD8r.js","/cdn/shopifycloud/checkout-web/assets/c1/f4d0afee.cFcbREng.js","/cdn/shopifycloud/checkout-web/assets/c1/0b704646.fh9jfUJe.js","/cdn/shopifycloud/checkout-web/assets/c1/a7ef2c81.BrahcxQY.js","/cdn/shopifycloud/checkout-web/assets/c1/a222330e.C9rcChss.js","/cdn/shopifycloud/checkout-web/assets/c1/8d7e1337.TX1RF7OZ.js","/cdn/shopifycloud/checkout-web/assets/c1/5bf177e7.OkKUpngG.js","/cdn/shopifycloud/checkout-web/assets/c1/f0b3b291.BU80TOU4.js","/cdn/shopifycloud/checkout-web/assets/c1/114cc9d1.5I__Y-xW.js","/cdn/shopifycloud/checkout-web/assets/c1/e7ae9e74.DXibTg64.js","/cdn/shopifycloud/checkout-web/assets/c1/abe8b5f7.Cu6YAt3c.js","/cdn/shopifycloud/checkout-web/assets/c1/91e796b6.BkVhRcJn.js","/cdn/shopifycloud/checkout-web/assets/c1/c380a132.Dspwu49O.js","/cdn/shopifycloud/checkout-web/assets/c1/3839d836.D1G1Yd8w.js","/cdn/shopifycloud/checkout-web/assets/c1/72fde58e.C06pGBq4.js","/cdn/shopifycloud/checkout-web/assets/c1/8cad6ded.BZtu8lKc.js","/cdn/shopifycloud/checkout-web/assets/c1/9e556116.B3NmyK3u.js","/cdn/shopifycloud/checkout-web/assets/c1/abf134e3.Bi5A237g.js","/cdn/shopifycloud/checkout-web/assets/c1/8e6bd8e5.CGxD9KuX.js","/cdn/shopifycloud/checkout-web/assets/c1/e6a05f36._vPbc_V6.js","/cdn/shopifycloud/checkout-web/assets/c1/71b36506.CjSRDlzm.js","/cdn/shopifycloud/checkout-web/assets/c1/a012ee00.CVLlZbON.js","/cdn/shopifycloud/checkout-web/assets/c1/7aefefff.OOWwXxAc.js","/cdn/shopifycloud/checkout-web/assets/c1/ea392d18.O0T-f5c4.js","/cdn/shopifycloud/checkout-web/assets/c1/b2ef26e8.tJFg4YzY.js","/cdn/shopifycloud/checkout-web/assets/c1/99bfe9cf.DOvxfq2B.js","/cdn/shopifycloud/checkout-web/assets/c1/b290e37f.fTbXUvOK.js","/cdn/shopifycloud/checkout-web/assets/c1/3c46c6f5.B4M7t1Ac.js","/cdn/shopifycloud/checkout-web/assets/c1/5677c11b.CyRsRLlT.js","/cdn/shopifycloud/checkout-web/assets/c1/e29daa9a.CSMMLykr.js","/cdn/shopifycloud/checkout-web/assets/c1/b2371320.oTQLGgP8.js","/cdn/shopifycloud/checkout-web/assets/c1/a735741f.BIhwm9Yo.js","/cdn/shopifycloud/checkout-web/assets/c1/8efef14b.CL5wFZFy.js","/cdn/shopifycloud/checkout-web/assets/c1/5a1effbb.BOFOWBkH.js","/cdn/shopifycloud/checkout-web/assets/c1/67e8c664.CLQqdUel.js","/cdn/shopifycloud/checkout-web/assets/c1/def19bdd.Ce9twc1B.js","/cdn/shopifycloud/checkout-web/assets/c1/bdb60128.BhNGNNAO.js","/cdn/shopifycloud/checkout-web/assets/c1/a0df1226.CRO68iKO.js","/cdn/shopifycloud/checkout-web/assets/c1/5d5cabdf.Bzlhag94.js","/cdn/shopifycloud/checkout-web/assets/c1/c1adaf81.DVorlWda.js","/cdn/shopifycloud/checkout-web/assets/c1/21162507.B34vrw6z.js","/cdn/shopifycloud/checkout-web/assets/c1/5f1fce8b.ZtxY7SSc.js","/cdn/shopifycloud/checkout-web/assets/c1/139f607b.C-hyL1lD.js","/cdn/shopifycloud/checkout-web/assets/c1/bace9a08.B9KGWMUT.js","/cdn/shopifycloud/checkout-web/assets/c1/8e2be3f2.BCRrm0Xh.js","/cdn/shopifycloud/checkout-web/assets/c1/2d034bf2.D6oywfUk.js","/cdn/shopifycloud/checkout-web/assets/c1/972590c9.CnVmg-L8.js","/cdn/shopifycloud/checkout-web/assets/c1/bc751930.DN6E8hJR.js","/cdn/shopifycloud/checkout-web/assets/c1/842452fd.B2--JkYl.js","/cdn/shopifycloud/checkout-web/assets/c1/a70a5b74.CcOUAJ2k.js","/cdn/shopifycloud/checkout-web/assets/c1/2692118b.BDX5UYlv.js","/cdn/shopifycloud/checkout-web/assets/c1/c4303b96.D7bvR8KU.js","/cdn/shopifycloud/checkout-web/assets/c1/7ee3a05c.CBWAZXIj.js","/cdn/shopifycloud/checkout-web/assets/c1/0d8691fc.BT0AKjKR.js","/cdn/shopifycloud/checkout-web/assets/c1/b0923a20.Df9_qrX_.js","/cdn/shopifycloud/checkout-web/assets/c1/7e9c6d7c.9zeSI3JT.js","/cdn/shopifycloud/checkout-web/assets/c1/4bb32466.C-pUdJFn.js","/cdn/shopifycloud/checkout-web/assets/c1/30df5a02.DTf9pNEz.js","/cdn/shopifycloud/checkout-web/assets/c1/ed37d3c3.Dup7Cvn5.js","/cdn/shopifycloud/checkout-web/assets/c1/e32a8416.Co1KO8FL.js","/cdn/shopifycloud/checkout-web/assets/c1/eb0f242a.C1tfhshj.js","/cdn/shopifycloud/checkout-web/assets/c1/109c16d9.CT1gkFAW.js","/cdn/shopifycloud/checkout-web/assets/c1/69f8f26d.BenD6ERP.js","/cdn/shopifycloud/checkout-web/assets/c1/e72406f8.B_tPrAg_.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.BXIamu_v.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/deferred-boot.CtzAgHHk.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.BHJbo22r.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/621ec27e44.oowFu-NJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/256cc32287.B1YSPUDc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/a50c8864f4x995b8dc6.DiwHZivn.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/7188aae948xccd7bc85.CW2HhXMu.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/90ea855f49.yJ74SdcD.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/6e3faf45e1x0e0212c9.ct4xfivv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/04c08e5c0e.CuRoM9zv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/6e3faf45e1.Du9dByaI.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/5caf6ce603.87JMHPUK.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/65db0eadda.qa_ACxP4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/966e3f4d79.gzvCNwz_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d4951797f3.UDCqXpbq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/df684aa9a8.CIs_ZowJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/f2a87b867b.Cl0Eyn3N.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/37e1a3659dx995b8dc6.BEvzDDvy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/df684aa9a8xbaeb52f9.DvPZalXI.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/0fde071d7ex9f0ef4a6.B0RErzdh.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/605b2a80c9xbaeb52f9.BAjucZ-8.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/4d60858badxb036935a.xO_7ctnq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/5a34f22f1a.D7MQTDGO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/e8404cbaefxc1eab701.B68J3GgF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/7aa3c6599b.C5b9n-0_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/e07f74760d.DU0m5rdF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/e07f74760dxbaeb52f9.4dSOKuBa.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/6559bc5a39x1573b800.vTcdVGq4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/89f3b0bff6.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/81ca749d51x11e90a44.BKRoWsh4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d455ee2f96x11e90a44.DqwdjT1Z.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d455ee2f96x670d76d4.BbxB_6wt.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d455ee2f96x03fe6ed3.CVKcAbIN.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d455ee2f96xd17a0c7b.BULdn7yC.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/343ea67e0bx11e90a44.s-Kd_X2E.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/bde15ff106x11e90a44.ak5YUtDE.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/04e578408ax11e90a44.CbGDlw5K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/04e578408ax6d8a6990.eanpcn-r.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/d34ebf45edx11e90a44.btyKOfco.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/401ac968b4x11e90a44.JBO5WNhc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/500596e378xe1c30c9c.CyQZvZOO.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  