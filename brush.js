SyntaxHighlighter.brushes.Custom = function() {
  var funcs = 'add bind clear create disable enable rm set show unbind unset force save reboot ping apply cls flush shell ' +
				'check convert dump export help install man rename restore send shutdown stat traceroute uninstall unsign ' +
				'grep exit import kill reset alias batch diff source switch unalias unlock vtysh ' +
				'backup history join nstrace quit renumber sign stop traceroute6 unlink update ' ;

	  var keywords = 'config expire init link ping6 release restart scp start sync whoami archive query ' +
		'aaa certPolicy encryptionParams ipTunnelParam mxRec preauthenticationparameter sc tcpParam ' +
		'accessprofile channel engineId ipv6 nameServer preauthenticationpolicy server tcpProfile ' +
		'acl cipher expression kcdAccount nat64 prompt serverprofile timeout ' +
		'acl6 cli extendedmemoryparam key nat64param protocol service timer ' +
		'action64 clientlessAccessPolicy extension L2Param nd6RAvariables ptp serviceFunction tm ' +
		'alarm clientlessAccessProfile feo L3Param negotiateAction radiusAction serviceGroup transform ' +
		'alwaysONProfile clientprofile fieldType L4Param negotiatePolicy radiusInterface sessionParameter transportprofile ' +
		'appAlgParam cluster filter lacp netbridge radiusParams sipalgprofile trap ' +
		'appflow cmdPolicy fips latencyprofile netProfile radiusPolicy sipParameters tunnel ' +
		'appfw cmp forwardingSession lb nodegroup rateControl smpp uiinternal ' +
		'appqoe collectionparam gslb ldapAction ns rdp snmp url ' +
		'appsprofile collector gxInterface ldapParams nslogAction reputation soaRec variable ' +
		'arpparam confidField HA ldapPolicy nslogParams responder spillover vlan ' +
		'assignment consoleloginprompt hostName learningsettings nslogPolicy rewrite spParams vpn ' +
		'audit contentGroup httpBand licenseproxyserver ntp rise srvRec vrID ' +
		'authentication cr httpCallout licenseserver OAuthAction rnat ssl vrID6 ' +
		'authnProfile crl httphdrlogprofile limitIdentifier ocspResponder rnat6 storefrontAuthAction vrIDParam ' +
		'authorization cs httpParam lldp onLinkIPv6Prefix rnatparam stream vxlan ' +
		'autoscale db httpProfile localPolicy option route stringmap webAuthAction ' +
		'bridgegroup dbProfile ica locationParameter partition route6 subscriber webAuthPolicy ' +
		'bridgetable dfaAction identifier loginSchema pbr router syslogAction weblogparam ' +
		'ca dfaPolicy inat loginSchemaPolicy pbr6 rpcNode syslogParams wf ' +
		'cache dhcpParams inatparam logprofile pcp rsskeytype syslogPolicy wi ' +
		'callhome diameter instance lsn Policy rtspalgprofile system xmlnamespace ' +
		'capacity dns interface manager policy samlAction tacacsAction zone ' +
		'certAction dos ip6 messageaction policy64 samlIdPPolicy tacacsParams ' +
		'certKey dtlsProfile ip6TunnelParam metricTable pq samlIdPProfile tacacsPolicy ' +
		'certParams dynamicRouting ipsec mib preauthenticationaction samlPolicy tcpbufParam ' +
		'monitor vserver service site group server user node failover ';
		
  var operators = '';

  this.regexList = [
	{
      regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,
      css: 'string'
    },
    {
      regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString,
      css: 'string'
    },   
    {
      regex: new RegExp(this.getKeywords(funcs), 'gmi'),
      css: 'color1'
    },
    {
      regex: new RegExp(' ' + this.getKeywords(keywords), 'gmi'),
      css: 'keyword'
    },
    {
      regex: /[ ]{1}-([a-zA-Z0-9]*)/gmi,
      css: 'color3'
    },
	{
      regex: /([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+)/gmi,
      css: 'color2'
    }
			];
};

SyntaxHighlighter.brushes.Custom.prototype    = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Custom.aliases  = ['netscaler', 'ns'];