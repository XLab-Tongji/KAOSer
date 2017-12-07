(function()
{
	/**
	 * Adds the sysML palettes to the sidebar.
	 */
	Sidebar.prototype.addSysMLModelElementsPalette = function(expand)
	{
		var gn = '';
		var dt = 'sysml model element ';
		var sb = this;
		var s = 'html=1;shape=mxgraph.sysml.';
		
		var fns = [
			this.addDataEntry(dt + 'comment', 180, 80, 'Comment',
				'1ZS7bsMgFIafhrXCOJGytk6bpZUqZWlHFE4NEgYLn8ROn74Hg5I4FylDlg6W///cgM8WrKyaYRVkqz+8AsvKV1ZWwXtMqhkqsJYJbhQrl0wITg8TbzeyxZjlrQzg8J4GkRp20m4hRSrfNLFZcIQBU7rDvc3pTss2SueRXi+d+Y2umJOW1tSOjIUfjKlWboyr30e3LDiFNDY2apK9NghrKontPZ2fYnkvEGjlm+cZQ/kwK/ANYNhTyT5lZ+m4vDcKdW6Y55gGU2uc1sku+fow6QiLROZ1nV15we6CFqga1tk67yIxcOo5BN+fRAaDX2T50yy77+hIK9lpUJnYCby0Thw+wdT5bdjA5MPeQW6KOoCVaHbTwdco5UGf3ow/S54izriiDDVgLjpDe9jDXbRnD6e9+Pe0i8WjcJM9Xjqp/PRO+gM='),
			this.addDataEntry(dt + 'constraint note', 180, 80, 'Constraint Note',
				'1ZQxb8IwEIV/jVcUO1BYIaUsVKrE0o4WvsaWHDtyDEn663uOLSAUJAaWDlHuPd8921+kkLyouo3jtXy3AjTJ1yQvnLU+VlVXgNaEZUqQ/JUwluFD2NudVTqsZjV3YPwjAywOHLk+QHTIfFVQki/RxXJLyRzdbE0nXXDYS4m5q+CwST+shfnG9zrNN5LXoTTW42vVqJ+g6AxrrlVpUGj4DiFNzffKlNtBvdIMLekrHWosW6k87LAljLcIaNh2OCw4D93dCw9Wuu0GbAXe9djSx9Vp5JG1SniZBmbJk6BK6cd9vIm6PCWdaWKRgN6Gm/+Fe00LRAm7JI01gRgYsXTOthdOp/wnymwyTeorKKwFbySIROwCXtwnhI8wNfbg9jD68g+QG6N2oLlXx3HwLUop6MMqzD+lsCuunrsSfGq6Qns6w0O0p0+nvfj3tOniWbhRnv9Ksf3yp/UL'),
			this.addDataEntry(dt + 'constraint textual note', 160, 60, 'Constraint Textual Note',
				'lVNNb8MgDP01SNuNgtSel6TrZZMm9bAzTdyASiAidEn362cCaZV+SN0ByX72g+dnQXjeDBsnWvlpK9CErwnPnbU+Rs2Qg9aEUVURXhDGKB7C3h9UF2OVtsKB8c8QWCT8CH2EiKw1NEjGm5aE8QUlPHsR5oRNdVCpShH4BsW+Rm7nTzpxOynaEDoo8fWs884e4FtVXiLIENlb47epf4G59I1OYS+Vh20rylDr8SnEhFa1wbREQeAQSGrBeRgeTjxCadwN2Aa8C/L7pCN0LKMrVIKqZaJNmOhiXp+pF/8wSBbet5Pf2ElWWWkNOiEU6mMUhXuyKm6sm0bVsPdzY8K0wfW31NGoqgqsTIsd6C/bKa9sKLg4y5nwcVWfEzNRHmpnj6bKrbZobmGsgWlH6ndcUbIEJzC4UrGb1NKnFsHuL2K4WsIpefd//zG9fJWxNvtJfw=='),
			this.addDataEntry(dt + 'constraint textual note', 160, 0, 'Constraint Textual Note',
				'lVNBbsIwEHyNj5WMI5UzCS2nSpU49GySJVg4XuQsNPD6rmNDSBskerDkHc+s7RlbZEXTrbw+7D6wAiuyN5EVHpHirOkKsFYoaSqRLYVSkodQ7w9WZ/2qPGgPjp4RqCg4aXuEiIh5XqJryWvDLZQk6EjMl5HX0tkm3gk8mVLbhTW1Y2iDRNiILN9Rw9dYzngKrlp4j99cOnQQkKqGdWqSIKs3YHNd7muPR1cVaNEPq1t0tDaXwJ9JrvlguIcvU9GOIcVIPFlo/NCDHkoGrAAbIH9migeryZzGOt3Gsr7xbtJPjJZcKS0efQkJvTf5SuxS51c57k3a10B/hDy5O98A9ZlN55dN5adduF0dHlVIqDeD7ZoI0UNrLnrTl3KcnU65Wtiyi/nvuAkP/84ubs+vy0FJadfbC5VhB+geZqimM0yCl6R4OtKR54PBXA6fL+Zx/zd/AA=='),
				
		    this.createVertexTemplateEntry(s + 'composite;symbol0=folder;fontStyle=1;spacingTop=15;tabWidth=80;tabHeight=20;tabPosition=left;symbol1=triangle;symbol1Width=7;symbol1Height=10;symbol1Align=right;symbol1VerticalAlign=top;symbol1Spacing=8;symbol1VSpacing=25;symbol1Direction=north;strokeWidth=2;whiteSpace=wrap;align=center;', 
		    		160, 90, 'Model', 'Model', null, null, this.getTagsForStencil(gn, '', dt + 'model').join(' ')),
			this.addDataEntry(dt + 'package diagram', 300, 120, 'Package Diagram',
				'3VVNj5swEP01HHdlTBJpjyHp7h7aqmoOPZswGCsGu8YkpL++Y2wCaNlVKlU9VAqK580H4/dGQ5Tsqu7FMF1+UTnIKPkUJTujlPWnqtuBlBElIo+SfUQpwSeiz+94495LNDNQ23sSqE84M9mCRyK6kZiaaoQbe5Ue3vxsXUtpxQwXdZRsie5u5oNVGqHVFJJQYPw29nEWOvvApOAu1bvSsSieePjvX50NgD7xAcMrZGMc8b+vrIJJgB4D6Kx7WtoKqd3H6GtKph1addyx/thcm0o+anY8MY542h3EL+d/ImiElveh5QbDRM0/99Y+dhHqDKaQ6oJ2IZBaDLJGneCHyG0ZXmng2JpGnOE7NL44uTWJ6UjOu+r1UJDuBVQF1lwx5BKqozchXmFSguDlkBZkJ6zxAL/ljsOAhzAPy7ORLM1GRJP+3oc2C5zFb9geKC6UzMEs82ZZNlC0CvbrcIF45YFvqhFWqIkAhapt0KevMtH1UgoLB3yRc15Q2nsppssUDwlrn3H15ibwOhEgXhJg/Rf4X93HP/2/+X8iMwHoPxRgvSQAq9zNwsqZWqLSytgbxmcRy2sJcg6HYNaqdusH6nxrTL9PlAakPs1ZU0IeWHZciiOT27CY+s2bSpaBTHEcuFFtne+UVGZWctCMzjXzDbkuPlYHm1atOcJsL1hc9GAno/pWQwOSWdx7s+p/oAia46ew982+lL8B'),
			this.addDataEntry(dt + 'package tab', 300, 120, 'Package (Tab)',
				'3VVNj9sgEP01HCsRnGy1x3XS3T200qqp1DMxE4wWGwuP89Ff38GQjb1xVqlU9dCDZd4bZhjeQ8CyZXV48rIpvzkFlmVfWLb0zmEcVYclWMsEN4plKyYEp4+JxyvRWR/ljfRQ4y0JIibspO0gMi+yeJUaUqUWjzYF2lI2Ybh1VoFnWX5Ym1+BuOcEpDW6JmBhSwvnbSMLU+uvPVrNJmbswKMppH1INLrmIm9xZn6E8OrTnBiUm59GYUn4M4/4GYwuQ4ZIxItrDRo3WK/EyoZWQkn07hVONQLjoeh8a3bwHdq4qVAnaUONwuGqvj2VxH0CVwH6I03Zp+oUzXj0gJenLkNaMobLNhL6LfdsFw2SY9PuZRfuMXHHRNbrve42zc1eTvg1kHn+XubZ/JrMW1djOhd9lYHs+9IgrGmhENzTkb9VYjEt8SlhETOOEd4lXQcGzKYMWPwF/ee36S/+b/3v+ciA7B8asJgyQFZhZxb77Q2RqRrn8Y3ToxkJvTMKlIZ1grWr6ZdDrR68d3tiXAMkfa5kW4JKKk/fa1ZuwOZ0HLR3Xa2Wzjo/KnnyTIw9iw2FLj52h5p2nS9gdC+g9BpwcFQvPfRgJdK9N6r+B44QPD9WfWz0lv0G'),
			    
		    this.createVertexTemplateEntry('shape=folder;tabWidth=80;tabHeight=20;tabPosition=left;strokeWidth=2;html=1;whiteSpace=wrap;align=center;', 
		    		160, 90, 'Package1', 'Package (Name)', null, null, this.getTagsForStencil(gn, '', dt + 'package name').join(' ')),
		    this.createVertexTemplateEntry('shape=note;size=15;align=left;spacingLeft=10;html=1;whiteSpace=wrap;', 
		    		160, 60, '&lt;&lt;problem&gt;&gt;\nDescription', 'Problem', null, null, this.getTagsForStencil(gn, '', dt + 'problem').join(' ')),
		    this.createVertexTemplateEntry('shape=note;size=15;align=left;spacingLeft=10;html=1;whiteSpace=wrap;', 
		    		160, 60, '&lt;&lt;rationale&gt;&gt;\nDescription', 'Rationale', null, null, this.getTagsForStencil(gn, '', dt + 'rationale').join(' ')),
		    this.createVertexTemplateEntry('shape=folder;tabWidth=80;tabHeight=20;tabPosition=left;html=1;whiteSpace=wrap;align=center;', 
		    		160, 80, '\n&lt;&lt;view&gt;&gt;\n{viewpoint = View name}\nName', 'View (Name)', null, null, this.getTagsForStencil(gn, '', dt + 'view name').join(' ')),
		    this.createVertexTemplateEntry('shape=folder;html=1;tabWidth=80;tabHeight=40;tabPosition=left;align=left;verticalAlign=top;spacingLeft=10;whiteSpace=wrap;', 
		    		160, 120, '&lt;&lt;view&gt;&gt;\nName', 'View', null, null, this.getTagsForStencil(gn, '', dt + 'view').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 120, 140, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'&lt;&lt;viewpoint&gt;&gt;<br/>' +
	    			'<b>Name</b></p><hr/>' +
					'<p style="margin:0px;margin-left:8px;text-align:left;">' +
	    			'stakeholders="..."<br/>' +
	    			'purpose="..."<br>' +
	    			'concerns="..."<br>' +
	    			'languages="..."<br>' +
	    			'methods="..."</p>', 
		    		'Viewpoint', null, null, this.getTagsForStencil(gn, '', dt + 'viewpoint').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=none;html=1;endArrow=open;endSize=12;dashed=1;verticalAlign=bottom;', 
					160, 0, '&lt;&lt;conform&gt;&gt;', 'Conform', null, this.getTagsForStencil(gn, '', dt + 'conform').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=none;html=1;endArrow=open;endSize=12;dashed=1;verticalAlign=bottom;', 
					160, 0, '&lt;&lt;stereotype1&gt;&gt;\ndependency1', 'Dependency', null, this.getTagsForStencil(gn, '', dt + 'dependency').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=none;html=1;endArrow=open;endSize=12;dashed=1;verticalAlign=bottom;', 
					160, 0, '&lt;&lt;import&gt;&gt;', 'Public Package Import', null, this.getTagsForStencil(gn, '', dt + 'public package import').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=none;html=1;endArrow=open;endSize=12;dashed=1;verticalAlign=bottom;', 
					160, 0, '&lt;&lt;access&gt;&gt;', 'Private Package Import', null, this.getTagsForStencil(gn, '', dt + 'private package import').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=none;html=1;' + mxConstants.STYLE_STARTARROW + '=sysMLPackCont;startSize=12;' + mxConstants.STYLE_ENDARROW + '=none;', 
					160, 0, '', 'Package Containment', null, this.getTagsForStencil(gn, '', dt + 'package containment').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=none;html=1;endSize=12;endArrow=block;endFill=0;dashed=1;', 
					160, 0, '', 'Realization', null, this.getTagsForStencil(gn, '', dt + 'realization').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=none;html=1;endArrow=open;endSize=12;dashed=1;verticalAlign=bottom;', 
					160, 0, '&lt;&lt;refine&gt;&gt;', 'Refine', null, this.getTagsForStencil(gn, '', dt + 'refine').join(' '))
		];
		
		this.addPalette('sysmlModel Elements', 'SysML / Model Elements', expand || false, mxUtils.bind(this, function(content)
		{
			for (var i = 0; i < fns.length; i++)
			{
				content.appendChild(fns[i](content));
			}
		}));
	};

	Sidebar.prototype.addSysMLBlocksPalette = function(expand)
	{
		var gn = '';
		var dt = 'sysml block ';
		var sb = this;
		var s = 'html=1;strokeWidth=1;shape=mxgraph.sysml.';

		var fns = 
		[
			this.addDataEntry(dt + 'block definition diagram', 300, 100, 'Block Definition Diagram',
				'1VbbjtMwEP2avCBtlUtbxGPTsvsCPFAkeHWSqWPVsYPj3vh6xrcm3bS7K1gESK0an5nxeM4ZTxply+b4oEhbf5QV8Ch7H2VLJaV2T81xCZxHacyqKFtFaRrjN0rvb1gTa41bokDolwSkLmBP+A4cEqVzjqF5i3CnT9zB8+87c6S8IYoyEWWLuD2el3datghNhxCHDfovEuen4ajvCGfUhDpT3m+KT9T/2tRFAIqqChiWUPR+sft8Ig10LSkhGbi1vVt6UUNa6wYJXiVo67SSW/jKKl0HpCat8WuO1Kgx6U5dwye4+ZZQxHNOCuDfjDOmznJfzMoXY07BBP1gV6vEeMg9qA2XB1xvGJKe5QrKnerYHj5Dx36YZPH5mOiMJN1U0UJewgeQDWh1QpeDLwCtWeyUjmtgtA5hASSdA+g5tm8KfPB9cb1HslGP5FyW22TEb6AQ6zScbKTQa281DA/oP9RMw9ooh8AB+R4wWmLRoF5KTHqdmBAwcxGnwJFbDmhLrtE2ewXWptdZS/8H1t7Ff4222Yg2PLce91qoW7n0Q5pM7awkfOFdCqm1bNAAolooZW+kkALsGMDNA1Yx0khRfanNgHOmtbumyTQA9/Ym2zRQUQhC+e0wgXfoL7Zxe1oHrEvuVAkXtw2TUdCDVrqtlgtQwInG2XIB/o4S85ESYxWUGWSk4GGWDVR4NCAfi2JfGW6o5jhjqZI7US0ll6qn014Fr4BvrVIKgffEpzy/3p7r99mTDN79KQrfjiiMJ5M3v8JiaPN/mcZXYhGX/f8fa7v4e/QT'),
			this.addDataEntry(dt + 'relation', 160, 0, 'Relation',
				'zVRNb8IwDP01vUwaCi3aHcrgNGkS+wOhMW20NEapYYVfP9MmLVVh2qYddqjkPNvPHy9NlKRlvXZyX7ygAhMlz1GSOkRqrbJOwZgoFlpFyTKKY8FfFK/ueKeNV+ylA0vfSYjbhKM0B2gRziVPU9HJeFQanVs2nc4LJl4UVHKvyymbR3CkM2nmPmSLRFiyA6yaO4cfjFm0TLSoiMkDprQs0aq3Qtvg2ujzpd50FoCVNqEMqBw2viFP13Z5cdydvoH86GvAEsidOKQeJDgwkvRxyCKr9ph3WR3RK2rm70MqPLgMPHq97BAYyj2JITePmAONEtm46raHGu1u65iMdBxr6KDSZ7ltjmKoYZDXwI5uSEq4Z9TILZiFzN5zhwerUjToejF2aDv9/JgZWgsZ+ZLdXRQXeqjvahZ/qdnjT0UbbPWLFc5GKxSTycNvthh+kv+8xj/aIh/7x6q9t9dv2Sc='),
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;verticalAlign=top;align=left;whiteSpace=wrap;', 220, 340, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'&lt;&lt;block&gt;&gt;<br/>' +
	    			'{encapsulated}<br/>' +
	    			'<b>Block1</b></p><hr/>' +
					'<p style="font-size:10px;margin:0px;text-align:center;"><i>constraints</i></p>' +
					'<p style="margin:0px;margin-left:8px;text-align:left;">{x &gt; y}</p><hr/>' +
					'<p style="font-size:10px;margin:0px;text-align:center;"><i>operations</i></p>' +
					'<p style="margin:0px;margin-left:8px;text-align:left;">operation1 (p1 : Type1) : Type2</p><hr/>' +
					'<p style="font-size:10px;margin:0px;text-align:center;"><i>parts</i></p>' +
					'<p style="margin:0px;margin-left:8px;text-align:left;">property1 : Block2</p><hr/>' +
					'<p style="font-size:10px;margin:0px;text-align:center;"><i>references</i></p>' +
					'<p style="margin:0px;margin-left:8px;text-align:left;">property2 : Block3 [0..*] {ordered}</p><hr/>' +
					'<p style="font-size:10px;margin:0px;text-align:center;"><i>values</i></p>' +
					'<p style="margin:0px;margin-left:8px;text-align:left;">property3 : Integer = 99 {readOnly}<br/>property4 : Real = 10.0</p><hr/>' +
					'<p style="font-size:10px;margin:0px;text-align:center;"><i>properties</i></p>' +
					'<p style="margin:0px;margin-left:8px;text-align:left;">property5 : Type1</p>',
		    		'Block', null, null, this.getTagsForStencil(gn, '', dt + 'block').join(' ')),
		    this.createVertexTemplateEntry('shape=umlActor;html=1;verticalLabelPosition=bottom;verticalAlign=top;align=center;', 
		    		30, 60, 'ActorName', 'Actor', null, null, this.getTagsForStencil(gn, '', dt + 'actor').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;align=center;', 160, 80, 
		    		'<p>&lt;&lt;actor&gt;&gt;<br/><b>ActorName</b></p>', 
		    		'Actor', null, null, this.getTagsForStencil(gn, '', dt + 'actor').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 200, 180, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'&lt;&lt;valueType&gt;&gt;<br/>' +
	    			'<b>ValueType1</b></p><hr/>' +
					'<p style="font-size:10px;margin:0px;text-align:center;"><i>operations</i></p>' +
					'<p style="margin:0px;margin-left:8px;text-align:left;">operation1 (p1 : Type1) : Type2</p><hr/>' +
					'<p style="font-size:10px;margin:0px;text-align:center;"><i>properties</i></p>' +
					'<p style="margin:0px;margin-left:8px;text-align:left;">property1 : Type3</p><hr/>' +
					'<p style="margin:0px;margin-left:8px;text-align:center;">&lt;&lt;valueType&gt;&gt;</p>' +
					'<p style="margin:0px;margin-left:8px;text-align:left;">unit = UnitName</p>',
		    		'ValueType', null, null, this.getTagsForStencil(gn, '', dt + 'value type valuetype').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 200, 80, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'&lt;&lt;enumeration&gt;&gt;<br/>' +
	    			'<b>Enumeration1</b></p><hr/>' +
					'<p style="margin:0px;margin-left:8px;text-align:left;">literalName1<br/>literalName2</p>',
		    		'Enumeration', null, null, this.getTagsForStencil(gn, '', dt + 'enumeration').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;align=center;', 80, 40, 
		    		'<p style="margin:13px;"><b><i>Name</i></b></p>', 
		    		'Abstract Definition', null, null, this.getTagsForStencil(gn, '', dt + 'abstract definition').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;align=center;', 80, 40, 
		    		'<p style="margin:5px;">{abstract}<br/><b><i>Name</i></b></p>', 
		    		'Abstract Definition', null, null, this.getTagsForStencil(gn, '', dt + 'abstract definition').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;align=center;', 80, 40, 
		    		'<p style="margin:5px;"><b><i>Name</i></b><br/>{abstract}</p>', 
		    		'Abstract Definition', null, null, this.getTagsForStencil(gn, '', dt + 'abstract definition').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;align=center;', 200, 80, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'&lt;&lt;stereotype1&gt;&gt;<br/>' +
	    			'<b>Block1</b></p><hr/>' +
					'<p style="margin:0px;margin-left:8px;text-align:center;">&lt;&lt;stereotype1&gt;&gt;</p>' + 
					'<p style="margin:0px;margin-left:8px;text-align:left;">property1 = value</p>',
		    		'Stereotype Property Compartment', null, null, this.getTagsForStencil(gn, '', dt + 'stereotype property compartment').join(' ')),
			this.addDataEntry(dt + 'namespace compartment', 300, 100, 'Namespace Compartment',
				'1VZNj5swEP01XCplZSBJ1WNIunvqpanUs4EJWDE2Nc5Xf30HfyQEQnbbbrXbQxTzxmO/efNsCOJldXxStC6/yBx4EH8O4qWSUttRdVwC50FEWB7EqyCKCP6C6HEkGpooqakCoV+SENmEPeU7sEgQzTmmJjXCjT5xC89/7FpKSUVVwUQQL0h9PD9OtKwRmhpIw1FPKGdFOytDGqAQvayAo8L9m31SDyRcZtvQw0g57U9FrO5jpWqL64G3uW+k0JOG/UR0EXb5n8v5Xe7MA4JW0NQ0gw5Vdp9+dMUxakpat0MFWRt3JFYcNqZKXaE1ViEO5R7UhssDPm4Y9jJODiXTsDa7x6sDWgmxRiu5he8s16XLw4V3qmF7+ApWgxU588AlsfRRCxnI+ecJZAVanXDKwa2O0ZhYm5ESWFH6NOc9QhsLFOfciyNx4Ex526DxwKDGJ9FzAnYUa/u+dhPDEb283p2mv0CY6LYwPmFmM072ce7U6MgW3pJt9gqqTW+rFv8Pqn0ibybbbCAb8tbhQDVft7LbJ23BLKN84fBUai0rDIDIF0qZwyqkAHMwcUWP5YxWUuTfyvYOsqG1PZvh1AOP5pCbFkBegG+JW67TMMuynXNfeaxE7lQGV+cLdypAd8wz3h+boIBTjbfJFfg32s8H2g91V+3VRVPub69O9b0Ls98R84ZKOE2BJzTbFkruRL6UXKqLlsbxTn5npkwKgSfDbXl+mz7n8NldBSf/SsKPAwnJw8OHP1FxzNjvScZXUhEfL59bJnb1NfYL'),
			    
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 250, 100, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'<b>Block1</b></p><hr/>' +
					'<p style="font-size:10px;margin:0px;text-align:center;"><i>namespace</i></p>',
		    		'Block', null, null, this.getTagsForStencil(gn, '', dt + 'block').join(' ')),
			this.addDataEntry(dt + 'structure compartment', 300, 100, 'Structure Compartment',
				'1VZNj5swEP01XCplZSBJ1WNIunvqpanUs4EJWDE2Nc5Xf30HfyQEQnbbbrXbQxTzxmO/efNsCOJldXxStC6/yBx4EH8O4qWSUttRdVwC50FEWB7EqyCKCP6C6HEkGpooqakCoV+SENmEPeU7sEgQzTmmJjXCjT5xC89/7FpKSUVVwUQQL0h9PD9OtKwRmhpIw1FPKGdFOytDGqAQvayAo8L9m31SDyRcZtvQw0g57U9FrO5jpWqL64G3uW+k0JOG/UR0EXb5n8v5Xe7MA4JW0NQ0gw5Vdp9+dMUxakpat0MFWRt3JFYcNqZKXaE1ViEO5R7UhssDPm4Y9jJODiXTsDa7x6sDWgmxRiu5he8s16XLw4V3qmF7+ApWgxU588AlsfRRCxnI+ecJZAVanXDKwa2O0ZhYm5ESWFH6NOc9QhsLFOfciyNx4Ex526DxwKDGJ9FzAnYUa/u+dhPDEb283p2mv0CY6LYwPmFmM072ce7U6MgW3pJt9gqqTW+rFv8Pqn0ibybbbCAb8tbhQDVft7LbJ23BLKN84fBUai0rDIDIF0qZwyqkAHMwcUWP5YxWUuTfyvYOsqG1PZvh1AOP5pCbFkBegG+JW67TMMuynXNfeaxE7lQGV+cLdypAd8wz3h+boIBTjbfJFfg32s8H2g91V+3VRVPub69O9b0Ls98R84ZKOE2BJzTbFkruRL6UXKqLlsbxTn5npkwKgSfDbXl+mz7n8NldBSf/SsKPAwnJw8OHP1FxzNjvScZXUhEfL59bJnb1NfYL'),
			this.addDataEntry(dt + 'relation', 160, 0, 'Relation',
				'3VTLboMwEPwa3x2Ieg/kcapUKV/gwNZYNV60bFKSr68BB4IIVQ499YDkHe+MvTMWIk7L5kCqKt4xByvinYhTQuR+VTYpWCsiaXIRb0UUSf+JaL+wu+p2ZaUIHL9CiHrCRdkz9EgWNGq+2gBdgNhkym6s0c5DJ2TGUsRJwaW/8Xbll+DyDRF++9Kh88SkZkX8DDuaWyu8Wt+BvbGtjGxlcg3HcDISF6jRKbsb0aS/Xdu3OHIHhXkPgCUwXX0LgVVsLlOeqvtSD30D9QONVxxbajxTBgF99PTe2ATlNznV9jNq4BnRLx7uN0JdRM/jimdxzdMiqM1NnbpSTkNSIUAyuvBeJYvBWnUCm6jsSxOeXZ6iRRpT/EQ3hBhGzdA5yDgcOzw72Z4AzWJS0fOkpoSXc5sY+4uL65mL8Kc2Mlb/zUNfjj+l/uE+/rN+AA=='),
	
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 200, 60, 
		    		'<p style="margin:0px;margin-top:10px;text-align:center;">' +
	    			'&lt;&lt;unit&gt;&gt;<br/>' +
					'<p style="margin:0px;margin-left:8px;text-align:center;">{quantityKind = QuantityKind1}<br/>' + 
	    			'<b>Unit1</b></p>',
		    		'Unit', null, null, this.getTagsForStencil(gn, '', dt + 'unit').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 200, 80, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'<b>Unit1</b></p><hr/>' + 
	    			'<p style="margin:0px;margin-left:8px;text-align:center;">&lt;&lt;unit&gt;&gt;<br/>' +
					'{quantityKind = QuantityKind1}</p>', 
		    		'Unit', null, null, this.getTagsForStencil(gn, '', dt + 'unit').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 200, 60, 
		    		'<p style="margin:0px;margin-top:10px;text-align:center;">' +
	    			'&lt;&lt;quantityKind&gt;&gt;<br/>' +
					'<p style="margin:0px;margin-left:8px;text-align:center;"><b>QuantityKind1</b></p>',
		    		'Quantity Kind', null, null, this.getTagsForStencil(gn, '', dt + 'quantity kind').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;fontSize=15;whiteSpace=wrap;', 70, 30, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;text-decoration:underline;">' +
	    			'<B>i1: Type1</b><br/>',
		    		'Instance Specification', null, null, this.getTagsForStencil(gn, '', dt + 'instance specification').join(' ')),
			this.addDataEntry(dt + 'instance specification', 280, 30, 'Instance Specification',
				'3VVNj5swEP01HFcCk416DWG7p5VWSv+AgQlYNR7XOF/76zvGBkLYtDmt1B6ieJ7nDeP3PBCl2/b8arhu3rACGaUvUbo1iNav2vMWpIxYLKoozSPGYvpF7Pud3aTfjTU3oOwjBOYJRy4P4JGIrSVRM01wZy/Sw+tfB9dS1nJTCxWlm1ifx/DJoiZo1UMWzvaJS1G7rJLaADOgFZRouBXotg6qAiOFovrZVJ9WdfjvuxgBkRCHWvpx0ZAMu3Su4pZRGHfaEWSzY7Cu4dotDZRuv7EtSZ5T7QyPYPYSTxTuBWmUZntUdic+XHryTPGpERZ2mpcOOZFl4wOISge8a0EPBf1fAVuw5kIpJ1HZxmd88y7FDYi6Caw0YLzzcT0yJz9pESz93N70n7GXTfay/8PeQGBx8PEL7F4t7N4kC43caUTJ5cabmBdoLbZztUBVG2N6tVCD8sggFnNhVcMu1ERjG6xRcfkyoUE6lzcTrsODKWH28rF0y8DOLuwD8hqQdNeO8+qfiReo7yio4pTiGwno9RtySBwMX98Y49tdEHtvxv4esut5YZdOF3YZ6MQHL/ownrsUxjA3/hZlt872c5tJXoDMePmzNkhTuUWJNLK5wn42r6cgHLREpWh+wjPHT8jfxmD1xzEIhIddu3PlKZw+jl7y62/nbw=='),
			this.addDataEntry(dt + 'relation', 160, 0, 'Relation',
				'jVPBbsIwDP2a3Esi7U4L4zRpEl8QWi+NlsaV60Lh65c2gdIBEodK9rP9Er/XCFU0w450W39hBU6orVAFIXKMmqEA54TMbCXURkiZhU/IzxfV1VTNWk3g+Z0BGQeO2vUQkXXi6PjsEnQEYltqt3bW+AAdkBkbofKam3DjzSqE4Ks1EZ5Cii34iOztZaRYyTGtDOwTJxLXaNBrt53RPJ479r1cZoLSJjvABpjOoYXAabbH5ZzuYmpufbfRb7SBcW7psKcSEnqv1rVxSMwf2ZKbNRngh8EQ3N1vhibxnxuhHoxo1YMRBJ296MOUZkv9dfKGrKmDWPl/zxjbgDp9AJfr8tcQ9r4q0CGFokc/GvCDnq+WpUVL9B5KTmfefqdspIfhpU/yuU/LgbddW8g6axjS+aFEye/f0R8='),
	
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 120, 60, 
		    		'<p style="margin:0px;margin-top:10px;text-align:center;text-decoration:underline;">' +
	    			'instance1: Type1<br/></p>' +
	    			'<p style="margin:0px;margin-top:4px;text-align:center;">value1</p>',
		    		'Instance Specification', null, null, this.getTagsForStencil(gn, '', dt + 'instance specification').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 160, 80, 
		    		'<p style="margin:0px;margin-top:10px;text-align:center;text-decoration:underline;">' +
	    			'instance1: Type1<br/></p><hr/>' +
	    			'<p style="margin:0px;margin-top:4px;margin-left:4px;text-align:left;">property1 = 10<br/>property2 = "value"</p>',
		    		'Instance Specification', null, null, this.getTagsForStencil(gn, '', dt + 'instance specification').join(' ')),
			this.addDataEntry(dt + 'instance specification', 200, 180, 'Instance Specification',
				'1ZXLTsMwEEW/xstKrl0qtn1AV2wAibVJpomFExvHfYSvZxw7SSNSqUVIwKKqfccznvG5UghfFceNFSZ/0Ckowu8IX1mtXVgVxxUoRRiVKeFrwhjFH2H3Z6LTJkqNsFC6SxJYSNgLtYOgEDZXmLo0KFeuVkGev+98S8tC2EyWhC+oOXbbidMGpZtGcnB0E6Fk5k8l2AbYVk0h0VY4qX1oV6ZglSyx/rKvj6us+ecLvP+5NjBtG8qtH6ONRxEl02ts0DOrcmH80kLSFHAFvu96iku9B7tV+oDbrcQH4ctDLh08GZH4hAPyQK1yVr/Bi0xdHvOw0s5Wcg+PUMkPf5R2F2NJnPIsh0aKEDagC3C2xiOHWN2zoIEVzUFmeZt2G0VRBSHrcnusuIhkxynzP0pZlpUTZeIZ0wYuNVYbfMd62huA/Z4BLgLLxsG2CRFfHUnE7Qn2jvAA++wHsM/+OHb2BTtrsIceX09xeyPwK4zw3TFnp5KCreu0weghMjJa718czV9KvQFGBuonbg/2xQKw09r/wupsaPX5iNXnY1an11sdt/03sokNPqGf'),
	
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 200, 160, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;text-decoration:underline;">' +
	    			': Type1</p><hr/>', 
		    		'Instance Specification', null, null, this.getTagsForStencil(gn, '', dt + 'instance specification').join(' ')),

			this.createEdgeTemplateEntry('edgeStyle=none;html=1;endArrow=open;endSize=12;dashed=1;verticalAlign=bottom;', 
					160, 0, '&lt;&lt;stereotype&gt;&gt;\ndependency1', 'Dependency', null, null, this.getTagsForStencil(gn, '', dt + 'dependency').join(' ')),
			this.addDataEntry(dt + 'reference association', 250, 0, 'Reference Association',
				'3VRRa4MwEP41eRlMoq6UPda269Ng0F+Q6lXDYk7OtLP99Yuaap11jMJg7EHIfXffJfm+eCxc5tWGRJG9YgKKhWsWLgnRtKu8WoJSLOAyYeGKBQG3HwteJrJ+k+WFINDmJ4SgJRyFOkCLiLLEWAojUbtupTkplzwCGRkLtVAy1RbaoTGYszDKTG7PvvLtEnSyIMIPG2IBukW28ly38IM6TFLYup5IJsMUtVDrHo3afeu6yWs1kLvTBjAHQydbQqDs0Y9DnijbMO3qOuobStuxLynxQDE49Fq3S2HldJvxYW8jKAUzItrF1fl6qLHhtiXhyBLueWMrCEp5Frsm5EMHhHNHwd6qFX01zWBhUSV2oCIRv6eEB50sUSHZpEZdO7BHbS6euZvGqDXExm3ZvSxet4dq0qjgtlGO8OgYP/ZtIOw3Kj6NVGTzCCkBgoTNbcx9z3u4R1WSafbXZeXe8y/pOhvpWpD9zcmc7nqiU2J2g+Wf6WnDfri3w+F69n8C'),
			this.addDataEntry(dt + 'reference association', 250, 0, 'Reference Association',
				'3ZVRb4IwEMc/TV+WzFSYM3sUdD4tWeInqHBis9IjR3Xop1+BDmTIYoxLzB5Iete74/r7H5T5YVosSWTbN4xBMX/B/JAQTb1KixCUYh6XMfPnzPO4fZj3OrA7rnZ5Jgi0uSTBqxP2Qu2g9og8x0gKI1G7ark5KLe5BzIyEmqmZKKta43GYMr8YGtS2/t8bJeg4xkRflpTo4bSEyewckWQzBYT1EItWm9Qv6iMGzxH5XKHWAKmYOhgQwiU7XXfzRN5bSZNXJP6jtJWbENy3FEEznsK6juwcKAmvFvbCErA9BLt4qS/1lVxP6+B39OgD54gl0exrkze5S2cFgo2FlXwUyKDmfUqsQYViOgjIdzpOESF1Aq0QW1W8lgWH7tjRqg1RMa9spkjXpaHYlAl77xKLuHRZVwsWofqLwifeggzwsy2evBuiLKZ9n9Oc9KjyaYBUgwEMZtam/PR6OEasCST7b0PKR+9/BHX58EpveqDH4J5Z2N6M57WbC/G+j97em9+AQ=='),
			this.addDataEntry(dt + 'part association', 250, 0, 'Part Association',
				'3VXLasMwEPwaXQo1st0QeozzOhUK6Q8o1sYWlbVmraRJvr6yrThO3ZQQKJQeDNrZ3Vlpxkgsnhb7JYkyf0EJmsVzFk8J0barYj8FrVnElWTxjEURdx+LFleyYZPlpSAw9paGqG3YCb2FFhFVhakSVqHxbJU9aJ/cAVmVCj3RKjMOWqO1WLA4yW3h9j4L3RKMnBDhhwuxBNMiK3WsKcKoDmUGK8+JZHPM0Ag9P6NJZQXZhdInyibuUzTAaYpUokAj33JVD2v3XM+4KkkDeT2WgAVYOrgSAu2OvbvsE1UbZl1d1/qKyjGeSyrcUgoe7Wt+Ktx7zUf8ktsdJgM7aHSL3v7OUGPh93bGAzt5EAxtJKjUUaybkF+6J7yzGjZOreSr4RZLh2qxBp2I9D0j3Bo5RY3kkgZN7d4GTWeWP2mKxkBq/cjur+Q1PeyvGhV9b5RveOTBc9tzs3MX0v6g49NARzZOkCQQSDZ2MQ+D4OEeXUll+V8X9vd0HQ10LcldEmQPd/2k18TsrqV/pqcLz09Dez30X45P'),
			this.addDataEntry(dt + 'part association', 250, 0, 'Part Association',
				'3VXLbsIwEPwaXyoVmaQU9Uh4nSpVoj9g4iWx6nijjaHA19ckJoGmqRCiEuohkne8s17P2DELx9l2TiJPX1GCZuGUhWNCtNUo245BaxZwJVk4YUHA3ceCWcdsv5zluSAw9hJCUBE2Qq+hQkRRYKyEVWh8tcLutJ/cAFkVCz3SKjEOWqK1mLEwSm3mep/03RCMHBHhpwsNGjggMoGFL4JkU0zQCD1t0KiwguxM6WONMl6o/YHRD47AsaxUIkMj31PleoiqJg9rdGpQQl6AOWAGlnYuhUC7fW7OeaKowqTOq6lvqFzFJqXANcXg0VORj4lbL/KAn9d2m0nAtohucNJfA5We/exf2PKvbRpBofZiWYb83CvhfdSwclJF3+21mDtUiyXoSMQfCeHayDFqpMbcFZraKb/NGI2B2Pol6zPID+Vh2+lS8LNLnvDIey8V52LbznT9RcSnlog5Ye6a3QU3FLO+K/9ez0FLTzaMkCQQSDZ0Mee93sM10pJK0ns/qH+n63PnOb3q0neJeWcH9WZ6urB5WKt/7em7+wU='),
			this.addDataEntry(dt + 'shared association', 250, 0, 'Shared Association',
				'3VXLasMwEPwaXQo1st0QeozzOhUK6Q8o1sYWlbVmraRJvr6yrThO3ZQQKJQeDNrZ3Vlpxkgsnhb7JYkyf0EJmsVzFk8J0barYj8FrVnElWTxjEURdx+LFleyYZPlpSAw9paGqG3YCb2FFhFVhakSVqHxbJU9aJ/cAVmVCj3RKjMOWqO1WLA4yW3h9j4L3RKMnBDhhwuxBNMiK3WsKcKoDmUGK8+JZHPM0Ag9P6NJZQXZhdI1JT/FfYoGOE2RShRo5Fuu6mHtnusZVyVpIK/HErAASwdXQqDdsXeXfaJqw6yr61pfUTnGc0mFW0rBo33NT4V7r/mIX3K7w2RgB41u0dvfGWos/N7OeGAnD4KhjQSVOop1E/JL94R3VsPGqZV8Ndxi6VAt1qATkb5nhFsjp6iRXNKgqd3boOnM8idN0RhIrR/Z/ZW8pof9VaOi743yDY88eG57bnbuQtofdHwa6MjGCZIEAsnGLuZhEDzcoyupLP/rwv6erqOBriW5S4Ls4a6f9JqY3bX0z/R04flpaK+H/svxCQ=='),
			this.addDataEntry(dt + 'shared association', 250, 0, 'Shared Association',
				'3VXLbsIwEPwaXyoVmaQU9Uh4nSpVoj9g4iWx6nijjaHA19chJoGmqRCiEuohkne8s17P2DELx9l2TiJPX1GCZuGUhWNCtNUo245BaxZwJVk4YUHA3ceCWcds/zDLc0Fg7CWEoCJshF5DhYiiwFgJq9D4aoXdaT+5AbIqFnqkVWIctERrMWNhlNrM9T7puyEYOSLCTxcaNFAiMoGFL4JkU0zQCD1t0KiwguxM6bIGP8YLtS8Z/eAIHMtKJTI08j1VroeoarJco1ODA+QFmANmYGnnUgi02+fmnCeKKkzqvJr6hspVbFIKXFMMHj0V+Zi49SIP+Hltt5kEbIvoBif9NdDBs5/9C1v+tU0jKNReLA8hP/dKeB81rJxU0Xd7LeYO1WIJOhLxR0K4NnKMGqkxd4WmdspvM0ZjILZ+yfoM8rI8bDtdCn52yRMeee+l4lxs25muv4j41BIxJ8xds7vghmLWd+Xf6zlo6cmGEZIEAsmGLua813u4RlpSSXrvB/XvdH3uPKdXXfouMe/soN5MTxc2D2v1rz19d78A'),
			this.addDataEntry(dt + 'multibranch part association', 250, 50, 'Multibranch Part Association',
				'7VbBbuIwEP2aXPZQBbts99rQwqnSSt0fMPGQWHU8kWMo8PU7iU1oGiJStbS7UpGQPDOZ5/F7eeCIz4rtwooyf0AJOuL3EZ9ZROdXxXYGWkcsVjLidxFjMX0jNh+oTppqXAoLxo1pYL5hI/QafEZUFaZKOIUmoFVup0NxA9apVOhbrTJDqSU6h0XEk9wVNPvdhJa0gSorakhWSusZarRNM4+bD+UrZ/EJTlXCNLQLbAdP1KTCcRaABTi7o0cODYz7lp2PQ/SspMt95tpnclBZ7jopUfkwa1GP1NEisHeaSd5jsrRY0kl2fRpBZvAYQtBLfL4/JrpUUo3WOVq1R+MEFRIRuLd+/GRQEzDy1toGwKCpoS2ujYR64JpsLZagE5E+ZU3+oEd41g9dT9oRosK1TaHz8rxBG99gQdP7tekCn+I+AP1GRfgtCpvGHYWnXQAnbAYu9LzSrx1plKTXPUnjq6sfPTUtVGovlk0YdwU8p5XD8qwQKxL+Ue1r9MlY2VI0BlIXhmp/Bc45i3+oemOdMx10Dnu3cw6Ef/vmhG/iSxnn5z9onPf4YvolvrgZ9AW/hC80rMbaQipRoJF/cmV67qDH5kq3+xl5kID9j9a59F/Mr57G/dvCCJsMaPe5Lrn5DJdQeLwde8JfXp7/Ag=='),
			this.addDataEntry(dt + 'multibranch shared association', 250, 50, 'Multibranch Shared Association',
				'7VbbToQwEP0aXnwwbOuqr7LqPpmY6A90YRYaS4eU7vXrHWjZFVkiZl0viSQknZnOYTiHExrwSb6eGlFkD5iACvhdwCcG0bpVvp6AUgELZRLw24CxkO6A3fdUR3U1LIQBbYc0MNewFGoBLiPKEmMprETt0Uq7Ub64BGNlLNSNkqmm1AytxTzgUWZzmv12REt6gCxKaojmUqkJKjR1Mw/ri/L+mYQF696565QfegqYgzUb2tI0MO5aNi720UomNnOZC5fJQKaZbaVE6cJ0h7oniBaeo8N88Q5fhcGC3mTTJQuSFJ58CGqGq7t9ok0Y1WidoZFb1FZQIRKeYePGj3qZB53cGFMDaNQVtMGFTqAauCJbiRmoSMQvaZ1v9PB73dDVpC0hSlyYGFqfyCe0cQ0GFH1FyzbwIe490CNKwt+hsHHYUnjcBrDCpGB9zzv9diMNkvSiI2l4fn7WUdNAKbdiVofhAYHeCPpeK4vFh0LMSfgnua3QR0Nli1FriK0fauf1j5zFv1S9oc4Z9zqHHe2chvB/3xzwTXgq41z+QuMc44vxj/jiqtcX/BS+UDAfaotEihx18pxJ3XEHbbuX1Ts1USMB+4vWOfUv5rqjcfe00GcTL9ivccnVd7iEwv0Z2BH+9oj8Cg=='),
			    
			this.createEdgeTemplateEntry('edgeStyle=none;html=1;endSize=12;endArrow=block;endFill=0;', 
					160, 0, '', 'Generalization', null, this.getTagsForStencil(gn, '', dt + 'generalization').join(' ')),
			this.addDataEntry(dt + 'multibranch generalization', 140, 50, 'Multibranch Generalization',
				'7VXLbsIwEPwa350Y2l4hPE6VKvEFBm8TC8eLnOX59XViF3AFag70UIlIkbyzu5P1TCwzUdSHuZOb6h0VGCamTBQOkcKqPhRgDMu5VkxMWJ5z/7J8diebdVm+kQ4s9WnIQ8NOmi0EJAANHU0EduBIr6QZGV1aDy2RCGsmxhXVft5J5peeVG8a3zD+1MYUaNB1zYJ3j8cbcriGW5k4gf8KHO7uooPiFuaANZA7+pLY8PIWOo5xUyKEe62oCtAgIBXosqIEkk0IyzPrRS6/iIrdVk/8rh6oEhYxBLPE/fQCJApatdCntirLQzhyDvet3gZX6wDNdDvKhHeKL7tshU6f0JL0ibHDrVWgYkmYpR0gkbXBrVtBYn9/pSOHAyNJ71LiW0pGog/Unv/M8srTDpKuBIpFP+Q/z9DLkcEDHYkKf///Hrp7FK7ssmjhH1mRDXhydoZ/Zs3waU1Pax5thQ8vN0oov75wvgA='),
			this.addDataEntry(dt + 'generalization set', 140, 50, 'Generalization Set',
				'7VXJbsIwEP0a37NA6ZWE5VQJiS9w8JBMcTJoYtavrxO7QApIOdBDpUaKNO/Nouc3jiLitDzOWW6LD1KgRTwVccpExkXlMQWtRRSgEvFERFFgXxHNnmTDNhtsJUNl+jRErmEv9Q4cI0aJwvqT0A4YTVy6Nift07Ydt7UFSWFKK3cS2nCNWqekiduaOGgfy9eGaQOPMlpmoBdUo0GqbI4xL6zgRGrMG6xh3UCvDtjA8ekJW8ofbw5UguGTLfENb++u4+QPHDt4QGUKRw0cU4DTcEPJ2sH8MvVqpQ28m4+dje+dvfNS5bD0EHRGh+mVuLUXKrXEc1MVRg6OmelgcaZptXHUDBspk8bcdpaNC2I8U2WkTSRMu0qB8iVOSyOgY2tNO15B52r0d9rPYNDS4L47+JGTftCivWqXKaOg22Ek52B80Q/7Lxp6bWTwwo14h5ubiavW3+9w7G9wRsZQ2V1XRRX8oVWEg6Dz7Qx/bTXD/9X0XM2rV2Hh9W/jym9/Rl8='),
			this.addDataEntry(dt + 'generalization set', 150, 80, 'Generalization Set',
				'5ZXBboMwDIafJncITPQ6YO1pUqU+QVo8iGYSFFIGe/oFErUwilYxqZceEPlt/5blT1FIkJTtTrGqeJcZIAneSJAoKbU9lW0CiIR6PCNBSij1zEfodiHrD1mvYgqEvsdAraFheAYbsYFad+gCkOVwcFJIYX5xoUszaeqbI4jsVSn5ZeQR5enThrYc+wLPqgP/7s0+NdK273suTjyE3Lg7kCVo1ZkSBcg0b6Y+VluZX+ou1r3kpiP1Wmfwpg7NVA7aFY03tODrrNz8alPLszrBrI05jIa/hob130YRPA2KcCWK8FEowqdBEa1EET0KxcscRRTLBhSyquIiJ1G6no1LZqwuIHNpZEfAvay55lKYmOJ5YRDEDHnea4QP/S9i7cSwll93+yotLH7GbzPld+eN/JufkdfHy5aP37Yf'),
			this.addDataEntry(dt + 'block namespace containment', 140, 70, 'Block Namespace Containment',
				'7ZXPjoIwEMafhjtQ192roOtlTUx8gmpHaCyMKfUPPv0OtKJ1McvBwx6WxKTztfMxfD8MAUuL81zzfb5AASpgs4ClGtHYVXFOQakgDqUI2DSI45B+Qfz5ZDdqd8M911CaIQ2xbThydQCrWKEytXLCEbSRG64mSmYlSWs0BouAJbkpaN5pREsylfuKGpKtVCpFhbptZmF7kV4ZjTvo23ET0F3g/PQpWsk9whywAKNrOuIaxh+2o7Ylc+VJCpNbaWSVHGSWG0/ilS2zzvUWFy1cYv3psd/TA5HBypWg1nia3QQvwVKs5KU5FcW2nGiNJ6qrulp8Lflml2KTRtK6kJ6jlheSOFkkGg+lgGasJlLuUCnYNh2PBAspBN2/HbWZz0u9woPegPd2DAfhPDQobuTRN+4L2hktUZJ/5/IeejijsW9guM7AuJ4HWN1Ig/iNXsjPUblm3RN798e5g1tiCT/w/V0y0chHcyX1ejRv/2gGonk1Cipv3x97/P7z9A0='),
			this.addDataEntry(dt + 'participant property', 400, 140, 'Participant Property',
				'5ZfbbtswDEC/xi8DWviS2x7tZOvLBhTrFyg2YwuVLU9WmmRfP+qW1LfBRdKhQB+aiqTpkEekqHjRujw+CFIXP3kGzIu+edFacC7NqjyugTEv9GnmRRsvDH3888LvI9ZAW/2aCKjkFIfQOLwQtgejSRhPn626kSdm1U1BarUUkOKLk0KWGOsmwOWOV/LJPqjkQ0ElPNUkVYoDZoY6wmheoZhiWCBQYb8WhITjaOhaZeN+AF6CFCd85EAzWZgn5iY7vwCaF9bLZuyTxsj52fPCARcWxTCWaBhL8JGxWIfIMfkPmGY9TF64YApE3cK0+L1XBZ2UROQUE479+ngW7yRHFvFMqzBveWexxK+wuDfgKrf/9fdsnSJuGp5KSiTlVeCsGP+261EIlV5Hiaq6q3tLCgx2aIxXb82BlKoMWF/C/ZY0pTXBTXeGtpOVfG+ZQJWphQrTrwWvsXxUQQTeUmsCbYzxUxextjh8HRjvGk9o4wl78YTD+zC51zh2zI7xA4o7qqp1sNtu0FyukU5GXPRbLfIHem11g16b93pNl/y54juwIMvBHT8Vr6ANDHcoFkIDs0aFhaaExfZI2nIpeXmmpl7XYtbwvUihNUQk9gLI1gE6gawAhim8tN9+DahFD5SrwYGphhVCq/yHbt9N1IbkTmfT3OOEGNkCe+QNVTuh6tNsvNEnJH3OBd9X2ZozLi7A9Xygf/R4sOWR8qrC2iZbF54/qWTn/yzZO+txc87LHueB8XgFXz0WPivc1WgRj0L+Zc+bEcoO3OQyttvyMUC/F+ev/RvMMuEiAwGZGVf+/f2XGyMfruxPwdsF3boyXjm6MtIUkFnzhHE1u/1ssq6PnKr7kYMY+u3rQtC5BpiBaZ06DM9RDGFF8fIT0Tz++hfkXw=='),
			this.addDataEntry(dt + 'participant property', 400, 260, 'Participant Property',
				'5ZhLj9owEMc/TS6VWOXBY/cYoN1LK612Dz2bZEgsnDh1HB799B07NmxIQEHQ7lYcAHvMmJmf/3hGcYJZtn0WpEh/8BiYE3x1gpngXNajbDsDxhzfpbETzB3fd/Hl+N9OrHp61S2IgFz2cfBrhzVhFdSWKePRyphLuWPGXKakUEMBEW48TWWGsc49HJZS8BX8pLFMjWXJc/lmXNV8k1IJbwWJlGGDuaKNMJrkOI0wUBBoMIGAkLA9mYw2mUyegWcgxQ6/sjE/jqujOl83BZqkxsswcElZz5O954EMDgycblBBNyjv/wJlHAJL6R+AG7bAOf6YKTRFA9z4V6VEP82ISCgmHLrFdj8dSI4swqE2Yd5yYLCE77DYHXCUmE/9OwtrCMuSR5ISSXnu2VWMf3Hsgbbi2JYKlfKRsVcKl8ZLrQEFU0WyEvAuLno+1ivEyFFSS8Y3OF1SdZydcsSdKlHSNbxCSX+rBfc2mrRa29XTcVuhwbhDot7oBhodfaRGSaa4svYM2Uka0YIgQLvQdGrKvCHQyRTyGIPXcbuF4AUejsLtO5N5t8tZozUUvt40xHd9Aeode/+VesuzLcaYlCnEZy7KXhocXqLBjlvS67omH28gwfEdSdC7UoJeS4IX3OafXILe08dpcNLSoK6Y+4J5hA7iBGz3kvMcmvjw7EMhND6zqLjQiLDQdDQLLiXP9tjUdg1oJa9EBI0+VaLMQTY6sh4VRgDDFNbN3a8B9dgCZdXd0TijRGiefIelCjJoQrLNHdOrpwkxsgD2wkuqTkKptT742j4l0SoRvMrjGWdcHIDr9rIu0p6RR8TzHJVOFjY8t5dmJ2c1OzAeN+f81OLc0W9fwVdfl/cK10bdoeKTlF/NhXMCsyXXW8fmXD4H6b8G2mvX9smUixgEVhNVCl334eHLjZl3a/s+gLefalxdvBq1v0fBGt6+OhnXF05VN3boWZsNg3fUCNQl0zgdMdxH0YUVp4fnUPXX3z+m+gM='),
			this.addDataEntry(dt + 'participant property', 400, 80, 'Participant Property',
				'5ZZfT+MwDMA/TV+QDvXPxu4e18Hxckjo+ARZY9qINK7SjG18etwm3ShpUREDIfEwLXbi1P7FjhMkq3J3rVlV3CAHGSRXQbLSiMaOyt0KpAziUPAguQziOKRfEP8dmY3a2bBiGpSZYhBbg0cmN2A1qcTswalrs5dOXResaoYaMto4LUxJvl5GNLxHZe7cwkbeFsLAXcWyRrGlyEjHpMgViRm5BZoU7rOgDexGXW9Vzu9rwBKM3tOSreCmsCvmNrqwAJEXzspFHLLayvnB8siBBg7FMJZkGEv0nbE4g6Rj8gWYZh6mZV1jJpgRqN4D6wRxRzMX0N7KFz6GKP4kDnOPgxc78By6dFCo6C8FxZda4/ao8Yg0Vj0eNW50Br3aNUznYHp5O4GaBkmn9Njf/SMMLjwGlcaKTnQ/cJlQGQiV/4P7xsmkH3lXFLKdTZukEBmTS6deozFY0oRka5C3WIsm2Zqssmdq9SnLHnKNG8VXKFEfEbdlKZ7aqnQnn6FSlJFs3bkXTkrH+Zvp+MtZnJzzwuM8UGgf4Guw+rlwf48m8Sjk/+4qGaHcgZucxu5Yvgfoz+L8x78wFylqDhp4sCA5DM/Pz06MfDizfwTvzul3dqgXcP1mxVldAJ/erman703O9BYF7XiASMnTewlErzq8bZjO6BXDgxdDWEk8vszt8pcP92c='),
			    
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 300, 80, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'<b>Assoctiation1</b></p><hr/>' + 
	    			'<p style="margin:0px;margin-left:8px;text-align:center;">&lt;&lt;participant&gt;&gt; {end = property 1} p1 : Blcok 1<br/>' +
	    			'&lt;&lt;participant&gt;&gt; {end = property 2} p2 : Blcok 2</p>',
		    		'Association', null, null, this.getTagsForStencil(gn, '', dt + 'association').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 300, 80, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'<b>Assoctiation1</b></p><hr/>' + 
	    			'<p style="margin:0px;text-align:center;"><i>structure</i></p>',
		    		'Association', null, null, this.getTagsForStencil(gn, '', dt + 'association').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;dashed=1;whiteSpace=wrap;', 150, 80, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'&lt;&lt;participant&gt;&gt;<br/>' +
	    			'{end = property 1}<br/><br/>' +
	    			'<b>p1 : Block 1</b></p>',
		    		'Participant', null, null, this.getTagsForStencil(gn, '', dt + 'participant').join(' ')),
			this.addDataEntry(dt + 'connector property', 400, 250, 'Connector Property',
				'5ZhLb+MgEMc/jY+RDE6z6TGPbk8rVe1Keyb2xEbFxovJaz/9jg12bONUadNN1e0hCQwMjx/Df0S8YJHu7xXLkx8yAuEFd16wUFJqU0r3CxDCoz6PvGDpUerjx6PfT7SSqtXPmYJMn+NAjcOWiQ0Yi0cnAl3nOZoLfRDGPPm9KZc0T5mKeeYFMz/fN9WRljmaxpVJw16PmOBx2SvEZYBC63EELMX2t5pnVRvmQobPpDbjklf9rokqN9Izoinv216/9tGkbROwRocZ8d0dmabh/bAUh5oLtxbKLINQS9WYuy625oe4fR8nwe9ZUciQM81l1jBZ9fZ/+Xx0aD56Pd7DwbKWmR4V/A8cz+B0/PDaUGi1CfVGQWul/OXV0866aZGwvCwqZFduX6d4H5cEi3ILai3kDqtrjhcomO8SruEpZ2HpsMP7a1Ygn+EXj3Ri/XCkjSr4Fh7B7GfpNxPjkLj9k/e2MtlLew8yBa0O2GVnR8fWsW/utp8AjxPrRm+skRXGEDe+RxnAglWCYVUIHFXISRUmE48GpNzCz0MO5BUAyyN9sh3JCXw2DpYt0TiDEx3mZB2s/PkH618ja2GcDlAcvwPEsQuRuhDpJ4AY+B9H8cahGJIhhexBhCiGGlUmM+iChCyaKVVdZ9tY8uEhEzOLbyW1lmmDrxzuZXg4u9yoEDoXSKPkgW6Fg4tYgcAtbLujXwJs4gAbuKcYMzyLH+1RBV06dQgp03yajWArEA+y4OUZYIPNjZV5zsLnWMlNFi2kwETUkK6C2GghsfFh0xVb1evzzwramxeD1jq8O99vDt8hIbwIcJUivybdqSuagSuawScQzX7mmVxPM29diGMX4vgTQHQyzxUp1ven8za6MM28LZtM3Wxye6VsQsiXSSfG/eqKR9wn+P+ZUD6Kr/uYCenQm/dsMfwXQkfGXaFr1KcldIQOvffeQ+ncp8rFShexIoHINr9N9szJXSBy1vVBcpyllZh7OWXaQ2h01nr1KDbLGAKL1eM/d6Z7+4+9vw=='),
	
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 200, 120, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'<b>Block1</b><hr/>' +
	    			'&lt;&lt;connector&gt;&gt; c1 : Association1<br/>' +
	    			'&lt;&lt;connector&gt;&gt; c2 : Association2<hr/></p>',
		    		'Connector Property', null, null, this.getTagsForStencil(gn, '', dt + 'connector property').join(' ')),
			this.addDataEntry(dt + 'internal block diagram', 300, 100, 'Internal Block Diagram',
				'3ZbBjpswEIafhuOuwGxS9QhJu5f20q3UXg1MwIrB1JgE+vQdYzuAnGxXaqSqlYKC/5mx8TfjgSDe1cOzpG31WRTAg/hDEO+kEMrc1cMOOA9IyIog3geEhHgF5OMNazRZw5ZKaNRbAogJOFHeg1ECsuUYmrYod2rkRt7+6PUjpTWVJWuCOAnb4TJ8UKJF6WkpcTigfxIZPwWDeqCclTrUmNJ5Urwr7f+0dOYElhVOwy1ks19ofikX+TFauLSzC1k9P6lUjXD3Edo6JcURvrFCVU6paKv96qHUmXjsxq7mjy3Nj7REPeU0A/5dO4chDu1G9nYjHTqypvw0jdAFpcVq4gTywMUZhweG7OP0XDEFLxiklzzjgt4z6Skk5L3s2Am+QMd+glVtukAi0ZspnySb72cQNSg5osvZzo7WODRlEVbAysqFOZF2RigvsXMF4Y0tousFFXsF1SKFBPMSkHhi83VsIfLy41KA21ZrgAfRqBfrGN3A5zKSIwOQb+VErnNyARsTMTpkZrigGF2juLkDxCcfIvEhkn8B4vvwr1HceBRzXYrULz69RZZTnlgCmVBK1GuC0BSJlNM5bkSjuwIUJTimVjIza8PrvHB10cscVmdGYecEtagAn6oEThX2hNXsf8Jo6zHy6UjdgGjGXQ9aQHElI03m0psgpw6aYkMtpeibYie4kDO2qTpNk4ts4nPRNFjFdtnLe+x31bh5vRpNwN0pvvPPa3xPjNP79f9iiMP5K2eyrT6CfgE='),
			this.addDataEntry(dt + 'property', 300, 120, 'Property',
				'tVTLbsIwEPyaXCqBnEcR1wAt6qGXUqlnQ5bYaoJdx5CkX981dggpQUqk9gDsjr2v2cFeuMyrtaKSvYoEMi988sKlEkJbK6+WkGVeQHjihSsvCAh+vOD5zql/PiWSKjjoIQGBDTjR7AgWsUCh68wBBaPSmAp2mHLBdI5drnw0C63EJ3zwRDNEAkRKxjVsJN2ZgBKnurll4jDTURX8BG9Q8G9zlSDqOgGlobo7zRlyo6xB5KBVjVdKlx1PQ2InJgx4ypowRwOhhQXSS2xLDhqOn36uwh6uZpnhRHYYm30dzfoWOVUpP3hhTGR1cSdaIClxdA0p26gDcXw9oRlPTag7WuzFQU8sWbFv87WF0ErNL5lOH5qWcBjZ4KPa7JTfIfGgeos1SbcNIHE3uMcYv99rCf5VJ9vfQUwZ1h1YXeJesFqK9YyPHZKof5rBAhWopn0mSnT33Ox1oGTd+Kur8QdoM+jXpgtoFFh33Svl+lGPcud/INzoRrjKbxc15h9vZLhxF42f0IJBMuo5+A9u/XmX3LCH3L5n4XE8uei2r/P5rPN4/wA='),
		    	
		    this.createVertexTemplateEntry(s + 'package;html=1;overflow=fill;whiteSpace=wrap;', 300, 135, 
		    		'<p style="margin:0px;margin-top:4px;margin-left:10px;text-align:left;"><b>idb</b>   Block1</p>', 
		    		'Package', null, null, this.getTagsForStencil(gn, '', dt + 'package').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;align=center;', 100, 80, 
		    		'<p style="margin:0px;margin-top:4px;margin-right:4px;text-align:right;font-size:10px;">' +
	    			'0..*</p>' +
		    		'<p style="margin:0px;text-align:center;">' +
	    			'<b>p1 : Type1</b><hr/>' +
	    			'x : Integer = 4</p>',
		    		'Property', null, null, this.getTagsForStencil(gn, '', dt + 'property').join(' ')),
			this.addDataEntry(dt + 'property', 250, 160, 'Property',
				'tVXJbsIwEP0aXyqBHBu4s7Scemmr9mxgSKw62HUMJP36TuKsVUBBpYck4zeefZ5C+DJO11aY6FnvQBH+SPjSau28FKdLUIowKneErwhjFB/Cni5og0JLjbBwcEMMmDc4CXUEjxA2U2i6MAgnLlMenn0d85QWsbChPBA+pyatjyOnDUKTNmRlGLkadJC6kVAyzE1L1WKvD26UyG+MMA+8vyYQSmH+pePxQ5USlmEq/KY0O+G32BqwvcEM9o/iFXy/ZQaCKkhk8w7+itzNhnXyYEkkTC5a2BYOXIyjXQUo6hPYvdJnPO4lzoIvzpF08GrENjc44yogljirP+FD7lxU2qGno03kCV7A92xF68DoEku8uAIFVM5/DToGZzO8ci6952sw9WtCI/DDKcxmJSgSD4S1bbNRKJRL1b9g/O4LNnSYVZxNPV3emS5vDXJzfbhXtqC/ip7Vvn9hsgLkQTop1Hve46RVgRxS1R95rmDvmiI7JXhVTwGppxmGo9MxrefUbm/K6iuNvdM7kXXc/T8RBxGM9ROsNOAljTJ/rKjWol8w6aMfvZ1+eGz+HYWu82v5AQ=='),
	    	
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 100, 100, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'<b>p3 : Type3</b></p><hr/>' +
		    		'<p style="font-size:10px;margin:0px;margin-top:4px;text-align:center;">' +
	    			'<i>initialValues</i></p>' +
		    		'<p style="margin:0px;margin-top:4px;margin-left:10px;text-align:left;">' +
	    			'x1 = 5.0<br/>x2 = "today"</p>',
		    		'Property', null, null, this.getTagsForStencil(gn, '', dt + 'property').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 300, 70, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'<b>p1 : [Type1]</b></p><hr/>' +
		    		'<p style="font-size:10px;margin:0px;margin-top:4px;text-align:center;">' +
	    			'<i>values</i></p>' +
		    		'<p style="margin:0px;margin-top:4px;margin-left:10px;text-align:left;">' +
	    			'&lt;&lt;normal&gt;&gt; {mean = 2, stdDeviation = 0.1} x : Real</p>',
		    		'Property Specific Type', null, null, this.getTagsForStencil(gn, '', dt + 'property specific type').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 100, 70, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'<b>p2</b></p><hr/>' +
		    		'<p style="font-size:10px;margin:0px;margin-top:4px;text-align:center;">' +
	    			'<i>values</i></p>' +
		    		'<p style="margin:0px;margin-top:4px;margin-left:10px;text-align:left;">' +
	    			'y : Integer = 5</p>',
		    		'Property Specific Type', null, null, this.getTagsForStencil(gn, '', dt + 'property specific type').join(' ')),

			this.createEdgeTemplateEntry('edgeStyle=none;html=1;endArrow=open;endSize=12;dashed=1;verticalAlign=bottom;', 
					160, 0, '&lt;&lt;stereotype1&gt;&gt;\ndependency1', 'Dependency', null, null, this.getTagsForStencil(gn, '', dt + 'dependency').join(' ')),
			this.addDataEntry(dt + 'property', 160, 0, 'Property',
				'zVTBboMwDP2aXCatgjDtXmjX06RJPeycggtRQ4yM29F+/QJkpYx2qqYddohkv/g58XtRRJSUzYpUVbxiBkZESxElhMh9VDYJGCNkoDMRLYSUgVtCvtzYDbvdoFIElu8hyJ5wUGYPPdIDNR+NBw5ArFNl5kbn1kEbZMZSRHHBpbvvInQh2GxOhB8utWihRbIc1r4JEheYo1VmOaBxzYQ7eNcZF65GOqQ/umXenKaD/CgrwBKYjq6EwCjWhzFP1X2an+vO1DfUruNQUuOeUvDopVxfhY3v/ByMe7OiHHhCdMHF/QaoU/+6E9HEiXBiBUGtT2rTpcHYAeXdMbB1UsXfTWOsHGrUBkys0l1OuLdZggZpsGyLltf61DYP/ZgpWgsp+yPPrylo20Nz0yV53SVPePSMu00bqfqDhE8TCYPZ7OE3KpLOi/8u4x+p6NLhu+nf7eVv9Ak='),
			this.addDataEntry(dt + 'binding connector', 160, 0, 'Binding Connector',
				'zVSxboMwEP0aj5XAVNlDknaqVClDZwcuxorxpceRknx9DbgQmqTKkKEDku/53jN+72SRLMrmldS+eMMcrEhWIlkQIverslmAtUJGJhfJUkgZ+U/Ilxu7cbcb7RWB43sIsicclK2hR4ScqXIvktR6gXRawWet7ADpSUOoWrWKjzaoHYDYZMrOrdHOQxtkxtJ3Flz6yy7jVtXlcyL88qVDBy2Sa1gHESQuUKNTdjWiacWEO/gwORe+Rw5Ht8ybVnRQ8OEVsASmo28hsIrNYcpTVV/qoW+gvqPximNLhTVlENBzr38am6A8i6barEgDXxD94uz/RqiL7nqMyUWM8UUUBJU5qU1XRtMEVEjHwrZN8XdojN0EqA3YVGU7TVi7fIEWaYxsi47X5tSKx+GaGToHGYcjh1GMWnlobqYkr6cUCE+BcXdoE1f/sPD5MRaS0cV/9/BBFvpyfKj6oT1/x74B'),
			this.addDataEntry(dt + 'bidirectional connector', 160, 0, 'Bidirectional Connector',
				'3VXBboMwDP2aXCatCrD1XmjX06RJ/YIUXIgWYhRMR/v1C5BBGe1UTZ1U7QCKH89O/J5FWBDl9dqIInvFBBQLViyIDCJ1q7yOQCnmc5mwYMl8n9uH+S8XvnrtV14IA5quSfC7hL1QFXRIbGtwFizsW5QlxlKQRN3RSjooR9uDIRkLtVAy1RbaIhHmLAgzym0XS88uQScLY/DDhho1NEiSwsYVQUMZpqiFWg1o2G3U8C521EKunTVgDmQOlmJA2aPux3mi7MK05/WpbyhtxYFSYmVicOipZF/E2lWe83FtEiYFmiTaxcn5Bqh14LwbwcQNPpt5E+0NlPIotm3Ix5ILZ4eCnVUr/O4SYWFRJbagQhG/pwYrnUSo0Awe7VDTRh6b4p7rNEatISa3ZT9UvCkP9UWj/PNGuYRHl3G1byNhf1DxaaJicUsN+0n/5zI+nxvGh98IaWSa3fs0/pWK8+kw+rfU8M6m8UYy2nC4A7sf6ekV+Qk='),
			this.addDataEntry(dt + 'unidirectional connector', 160, 0, 'Unidirectional Connector',
				'3VXBboMwDP2aXCatCrD1XmjX06RJ/YIUXIgWYhRMR/v1C5BBGe1UTZ1U7QCKH89O/J5FWBDl9dqIInvFBBQLViyIDCJ1q7yOQCnmc5mwYMl8n9uH+S8XvnrtV14IA5quSfC7hL1QFXRIbGtwFizsW5QlxlKQRN3RSjooR9uDIRkLtVAy1RbaIhHmLAgzym0XS88uQScLY/DDhho1NEiSwsYVQUMZpqiFWg1o2G3U8C521EKunTVgDmQOlmJA2aPux3mi7MK05/WpbyhtxYFSYmVicOipZF/E2lWe83FtEiYFmiTaxcn5Bqh14LwbwcQNPpt5E+0NlPIotm3Ix5ILZ4eCnVUr/O4SYWFRJbagQhG/pwYrnUSo0Awe7VDTRh6b4p7rNEatISa3ZT9UvCkP9UWj/PNGuYRHl3G1byNhf1DxaaJicUsN+0n/5zI+nxvGh98IaWSa3fs0/pWK8+kw+rfU8M6m8UYy2nC4A7sf6ekV+Qk=')
		];
		
		this.addPalette('sysmlBlocks', 'SysML / Blocks', expand || false, mxUtils.bind(this, function(content)
		{
			for (var i = 0; i < fns.length; i++)
			{
				content.appendChild(fns[i](content));
			}
		}));
	};

	Sidebar.prototype.addSysMLPortsAndFlowsPalette = function(expand)
	{
		var gn = '';
		var dt = 'sysml port flow ';
		var sb = this;
		var s = 'html=1;shape=mxgraph.sysml.';

		var fns = [
			this.addDataEntry(dt + 'port', 160, 60, 'Port',
				'xVTRTsMgFP0aXpcOjO+21b1oYjJ/gLV3hQjcBphr9/XSQrvptmiixocmcA6HnntOU8IK3a0sb8UT1qAIuyessIg+rnRXgFKEZrImrCSUZuEh9OEKuxzZrOUWjP+OgEbBG1c7iMiL5cZp6ZxEE0nne5VI4XWwWC4Jy53g7YDqrhncL1zvtFq0aP3AbtH4ddIN+72QHtYtrwZgHwQB40o2Jmyr4BVsAJIXsB66q/OMUBpmBajB2z4c2cvai3TiNs6cCZCNSLIJ4y7um1l6TCcsUkCXw2JnYbXLs4imXCxU4dX5SWIWnDzwzZzJNL+NLvNhcFlxdZfwDXqPOhCKb0A9o5N+6ISVCran5x8/0R7bSZTz6rWxuDN1gQpDxqVBA1M/8jBayeboKzQm2E4e54/nq0ro5Ur6xKZLThqiFwqiv1DQzXlB9AcF/X+Ek+Am3fLnkYbt8eczch/+Te8='),
			this.addDataEntry(dt + 'port conjugated', 200, 60, 'Port (Conjugated Ports)',
				'xVTLboMwEPwaXyNiotwDaXNpparJDziwAau2F9lOAzn027uAyUMkaqVG6gHkndm1ZmcQLE51vbKiKl8xB8XiJxanFtH3J12noBTjkcxZvGScR/Qw/nyHnXZsVAkLxv9mgPcDn0LtoUc2VhinpXMSTU8636hAll6TxOWUxYkrRdWiui5a9RPXOK0mFVrPid2h8esw13VXIpOmeJdF2eoiVXFyKKWHNRFt04EuIUwoWRgqM9IPloCgD6yH+u6OHRQWXAFq8LahloPMfRn2jHofohKCBCrnAROur4vT6NkxOgTTbhsYjwysSA2tt6D312Y6snDwzUJGMpILRy04eRTbk2eDF7ZXnLQmyEyoRcC36D1qIpTYgnpDJ71scQW7y/aXM4st7bEaZhKRfRQW9yZPUSHZvTRoYIhPHjslwaQMjSHJQd/pw/opGn47mmaIpZ+4SmocFH9AULNxUPwiKP6HoP7Zy2FgFm657+38Md5Sef5DddzVD+wb'),
			this.addDataEntry(dt + 'port flow property', 160, 80, 'Ports with Flow Properties',
				'7ZTLboMwEEW/xtuI4KbqtoE2m1aqlP6AAxOwanuQPWkgX18DJi9S9aFI3XSBZN87V5o5g8x4ouuFFVX5jDkoxh8YTywi9SddJ6AUiyOZM56yOI78x+LHT9xp50aVsGDoO4G4D7wLtYFeebXCOC2dk2h601GjglmS9i2mU8bnrhRVq+q6aLufuMZpNanQEvfuGg0tQ66t3paSYFmJrBW2PuA1oWRh/DXzvYL1QugFLEH96TydFIZZAGog2/iSrcypDBW3/cxRCbIoQ+wuaML192IfPdDxhwDoMiw+glVNR4gsOLkTq+4a+aGOkA0D276teTupzIS6D/oKiVB7Q4kVqBd0ktol8FTB+rj+6cwmrIbQXGRvhcWNyRNU6KGmBg0MC5G7bh8BRYbGQEah1/2v8tUC4ssLaELgCpxvxpzjf86nnGdX4Dwbc+a/4XyG7TLmvyM2BIZnIRDkPyfor4enufNOXu4P'),
	
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 160, 70, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'<b>Transmission</b></p><hr/>' +
		    		'<p style="font-size:10px;margin:0px;margin-top:4px;text-align:center;">' +
	    			'<i>ports</i></p>' +
		    		'<p style="margin:0px;margin-top:4px;margin-left:10px;text-align:left;">' +
	    			'p1 : ITransCmd</p>',
		    		'Port (Compartment Notation)', null, null, this.getTagsForStencil(gn, '', dt + 'port compartment notation').join(' ')),
			this.addDataEntry(dt + 'nested port', 160, 60, 'Nested Port',
				'7ZXLboMwEEW/xtsIcJp9gTabVoqU/oADE7DqB7KdBvL1tbHJk6iPdFVlgeS54yvPnLEwwhlv54o09assgSH8hHCmpDR+xdsMGENJREuEc5Qkkf1Q8nwlG/fZqCEKhPmOIfGGD8I24JU3RYTmVGsqhU9q07GQrA23JeYxwqmuSeNU3lau+onuNGcTAdpAuZDKnp6upTDLYHaWbU0NLBtSOGFrXVYjjFbChoUtGJQVQkGgDLRXm+ql0NEcJAejOrtlS0tThx0z33hUA63qYBs0on1c7a0HRHYRKI0TwxfEmngSX5BSoOmOrPowsm0dkRtaVr6w1PVKC8Ieg85pWTpfysgK2EJqatwscM5gfbz/5SxtZDOYUlK8V0puRJlJJi3WXEgBw0jorp9IgFFIIaAwodb9jflqBMn4CLpgmN5OejpGOrmTPiWN/+BOP4yRxnfSp6Sns9tJz0ZI/4bzGbZ/gTkYhjdp+JP8/H7b8PCC9rmTB/YT'),
	
		    this.addEntry(dt + 'proxy port', function()
		    {
		    	var cardCell = new mxCell('Transmission', new mxGeometry(0, 0, 160, 60), s + 'port1;fontStyle=1;whiteSpace=wrap;align=center;');
		    	cardCell.vertex = true;
		    	var label1 = new mxCell('&lt;&lt;proxy&gt;&gt;\np1', new mxGeometry(0, 20, 20, 20), 'shape=rect;html=1;resizable=1;align=right;verticalAlign=bottom;labelPosition=left;verticalLabelPosition=top;labelBackgroundColor=none;fontSize=10');
		    	label1.geometry.relative = false;
		    	label1.setConnectable(false);
		    	label1.vertex = true;
		    	cardCell.insert(label1);
			    
			   	return sb.createVertexTemplateFromCells([cardCell], cardCell.geometry.width, cardCell.geometry.height, 'Proxy Port');
			}),

		    this.addEntry(dt + 'full port', function()
		    {
		    	var cardCell = new mxCell('Transmission', new mxGeometry(0, 0, 160, 60), s + 'port1;fontStyle=1;whiteSpace=wrap;align=center;');
		    	cardCell.vertex = true;
		    	var label1 = new mxCell('&lt;&lt;full&gt;&gt;\np1', new mxGeometry(0, 20, 20, 20), 'shape=rect;html=1;resizable=1;align=right;verticalAlign=bottom;labelPosition=left;verticalLabelPosition=top;labelBackgroundColor=none;fontSize=10');
		    	label1.geometry.relative = false;
		    	label1.setConnectable(false);
		    	label1.vertex = true;
		    	cardCell.insert(label1);
			    
			   	return sb.createVertexTemplateFromCells([cardCell], cardCell.geometry.width, cardCell.geometry.height, 'Full Port');
			}),
	
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 200, 100, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'<b>Transmission</b></p><hr/>' +
		    		'<p style="font-size:10px;margin:0px;margin-top:4px;text-align:center;">' +
	    			'<i>flow properties</i></p>' +
		    		'<p style="margin:0px;margin-top:4px;margin-left:10px;text-align:left;">' +
	    			'in gearSelect: Gear<br/>' +
	    			'in engineTorque: Torque<br/>' +
	    			'out wheelsTorque: Torque</p>',
		    		'Flow Property', null, null, this.getTagsForStencil(gn, '', dt + 'flow property').join(' ')),

		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 250, 150, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'<b>Transmission</b></p><hr/>' +
		    		'<p style="font-size:10px;margin:0px;margin-top:4px;text-align:center;">' +
	    			'<i>operations</i></p>' +
		    		'<p style="margin:0px;margin-top:4px;margin-left:10px;text-align:left;">' +
	    			'prov Boolean selectGear(g : Gear)<br/>' +
	    			'reqd Torque getTorque()</p><hr/>' +
		    		'<p style="font-size:10px;margin:0px;margin-top:4px;text-align:center;">' +
	    			'<i>properties</i></p>' +
		    		'<p style="margin:0px;margin-top:4px;margin-left:10px;text-align:left;">' +
	    			'prov temperature : Integer<br/>' +
	    			'reqd geometry : Spline</p>',
		    		'Required and Provided Features', null, null, this.getTagsForStencil(gn, '', dt + 'required provided feature').join(' ')),

		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 200, 80, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'&lt;&lt;interfaceBlock&gt;&gt;\n' +
	    			'<b>ISpeedObserver</b></p><hr/>' +
		    		'<p style="margin:0px;margin-top:4px;margin-left:10px;text-align:left;">' +
	    			'notifySpeedChange(): void</p>',
		    		'Interface Block', null, null, this.getTagsForStencil(gn, '', dt + 'interface block').join(' ')),
			this.addDataEntry(dt + 'item flow', 120, 180, 'Item Flow',
				'1ZXBbtswDIafRscFjt0Gu8bJ2ks3DEgO21GxGVuYLHkUk9h9+lG2nMRNuhVYVmAHA+JPUhY/UrZIFlXziLIuP9sctEg+iWSB1lK/qpoFaC3iSOUiWYo4jvgR8cMr3mnnjWqJYOgtCXGfsJd6B70CphDJnDVeKAMinok4mUYiSftQR60OoSVVfODllH2ulLVXq6bwtUxc6yo9UQTVg7YHDthaQ6uQ6hO2LC8VsrUK1rrtdrA7Pnh6KDl3VcvMSwfekjWpVWHYzLg2wOOB9oAEzav1d1Io/hFsBYQth4SEgCc6qJzKXvoYpBJUUYZNZkGTrreL40YntrwIeK+jTi5Qn7ElNK7HvkZpXKWcU9b8I+JfxsSVeQ/gbfBeIX7Ubo387gL52uJPXr/kCnkBAytjeeqT9Az1wAH706Vg8jmihzwEQ6PoG5vR5D5Y30MuY8H2zOVN7ztdKP/uEUxnd5jB6H6SxAJoNEdvQI6gJan9ePe/4Xl/wbO+QIng1LPcdGZ0naOGrcfoeNqUKZ46a9ldAz9aKpN6HiLJ+jnUcgP6q3WK/J045g/BTy/cG0tkqyEvldmPAu3O5AurLZ561t0P9Qz9u7syMmsMZBROf/x4/mni7377ifkQMm7ejdl7d2MM9r9tyI36webpP935Rr/xXw=='),
			this.addDataEntry(dt + 'item flow property', 140, 180, 'Item Flow (Item Property)',
				'1ZXfb5swEMf/Gj8uIpBGew3J2pdumpQ+bI8OXMCqsZl9SaB//c7YkFDardLSSntA8n3vB/bnfMCSddXcGV6XX3UOkiVfWLI2WqNfVc0apGRxJHKWbFgcR/Sw+PYV77zzRjU3oPAtCbFPOHJ5AK+AKliyIo0WQgGLlyxO5hFLUh9qsZUhtMSKNryZk8+WvHZq1RTuLDPb2krOBEJ1K/WJAvZa4TakuoQ9yRthyNoG66HtKugDbTw9lZS7rXnmpBOVJI1LUSgyMzobmGFDRzAIzavn76Rw+DvQFaBpKSQkLDye6CRyLL30OUgliKIMRZZB49bbxVDozJYWAe/LqJMJ6gu2aJT12B8MV7YS1gqt3on4tzFxoT4QeLiPURuC42kDBu3aHVhMOoDa/HLrDrxfP0cOeQE9RqVpIJL0ogs9IuN3moLKV8Y4/n0wNAJ/kBnNboL1M+QSMdNeuJzpfOdZc+8ecbb6YDIYjS5yUwCOrtgbumFAchTHcfV/YXszYVtPUBqw4onvOjN6maOEvcNo6SIKVdx31qabEHfrRMblKkSidldU8h3I79oKdOMy5PfB98/cO42oqz4v5dljYfRB5WsttTn3rBsd8QT+3d0xMq0UZBh2P3xX/zYMiz8Ow6eQcfVuLD+6G2Ow/21DrtQPMs+/8M43+sP/Bg=='),

		    this.createVertexTemplateEntry(s + 'itemFlow;fontStyle=1;flowDir=N;flowType=in;whiteSpace=wrap;align=center;', 
		    		200, 80, 'eng:Engine', 'Item Flow North In', null, null, this.getTagsForStencil(gn, '', dt + 'item flow north in').join(' ')),
		    this.createVertexTemplateEntry(s + 'itemFlow;fontStyle=1;flowDir=E;flowType=out;whiteSpace=wrap;align=center;', 
		    		200, 80, 'eng:Engine', 'Item Flow East Out', null, null, this.getTagsForStencil(gn, '', dt + 'item flow east out').join(' ')),
			this.addDataEntry(dt + 'item flow', 470, 370, 'Item Flow',
				'7Vnbkps4EP0aHsfFxZeZR18m2a2aVE0lrs3mUQYZVAOICDm25+vTumAbJBMHEye7ycPUoBYtus+RulttJ5hnu7cMFck7GuHUCR6dYM4o5eop281xmjq+SyInWDi+78Kf4785M+vJWbdADOf8EgVfKXxB6QYrCc5jJ5iCDB5IjtV8yfepnk94BlYuPCeYlQkqhDTbxcKBQbkvs3RAOM7epHQLL6xpzj9oVanAGX3BH0nEEy1Zw4sLwmD0qEfLvVwzp/Bt0ChQSPL4PYkT4Q94E8y2CXziA0yI97bwZZChlMQ5DEPwG8NyM+0XZhzvzmIjRRqYt5hmmLM9vKIVhgo6d6vtFQquliVYWwTDsZahUo3jw0pH4OFBY2/nITB44CwvFRFLhvIyRZzQ/Co2LOg3+Dmy8bGNjSe8Fq57oxuScUD5lI3hD2JjaLCxpOzzxjwMOIpxBaDG6ISRCodU4jUT/pMQpVMt5lSAhfNoypggqFoB7wj/Vy8hnj/BszsYyXfBETHlVoPjnLJNGFRDuKQbFuLaYeeIxZjX9t0FPDAstuCX+urXgDwyQw/gMX18NlBmuCSvaCWHbivE9Q06soC+opzTDCZStMLpMy2JPFcGSU+N6breDIUvMaObPJrTlLIjd/JEkVd5oPRGDGme45Br+w8R+VvHYdh6HO60Ru+sjM1AJFhZdmKFqWPZjOL/Y15+FC0TgxbHH6cCmKLGyvjzRpQOswzOOAF8pm6xOwzvZMSZDqUIfOR3mqjpSaSuVoCnWP+X31lVgtBTaWlaljQkMi2J3ajeAj9WTU2QFU1ZwoTrDeH3uKK2hc0XvWEE43elpHzqDh5wds47lIkwnJojYB22HCkQUF9N1JXUaCJiuCNKk4WIwIUzUf//zp9I/iInBF4Q2EYzzxktDog2MOjZEF4ZwhuGLJuGWMmwsXYRQfaNdRkdUKJsQr5h2G5FIwJVFQ+DY1wPQBQO8VpWPYs1EYfKWqeYBRGstGElHNz3WNkqI9s15ctez/pm+TKcWMoXf9RD/XJvSa3mbuxcS+o4bpb39TA/7LdYn7QG3kDDVuHtWsrFsQXvAzHX4P1gwXvgGQB3z5jCcyNlZiSKxFpGyqwWOZczVeF5q4R5354wx3Xigh7oqAyu8+H/4aMDH31cpzzPxkfwh48OfDz0wYfZ9eHN/GAp+C/OD0/HCsySHvTl7KbZwb//menBs3R3OuYH6z33+3b/Ny5Ut938aiueLZt6yQZmN4d3zAa/Gfq9xH6zzcM7xv7fDP1eIr3ZzvmHrJi9l9zezDzbsLm0gem3dTD9lhamEebrXU192Tntap5Dtve2jGf2Zf7CiN8a2o694V8ZWPMKO98wae6NsZ20gTv5j6JrXlhNWA18TlA9xRynK7p9PApmUgATCWXkFaIlEv2XCJUJjrT6GcROsZhY4uWV6GjVZ0rELrr0Aqo400oNiA9W2FCH4fF3XPX66c+8XwE='),
			this.addDataEntry(dt + 'item flow', 200, 120, 'Item Flow',
				'7ZXfasIwFMafJrdSm22wS1unDBwI7gVie2yD+VOSuLY+/U6bVN1WcYNdetGQfOd84ZzfKYTQVDZLw6ryTecgCH0hNDVaO7+TTQpCkDjiOaFzEscRfiReXIlO+2hUMQPK/cYQe8MHEwfwiqte1YqrPaqEznB9X/sc61oRckonsdL5lNDElqzqVNkUXRMT21opJtyBXAhdr2CHZSQ7rdwm2DtTXWLCpmJZJ9ToQ40JXig8Zlg5GBRCZWAcNFe766XQ2hK0BGdaTKl57srQYeQJRCXwohxsAUvErBeKk/cMCzeB1zg7OsJuMv0By4DlR7btj4g0uYA39Cw8JotEuCo8tHnXWNK1zzMmZiFT8jzvbkoE24JYa8sd1xdXDPmrb2Gnq8GUsGxfGH1QeaqFRtJzpRUMU+LHfkgBT6aVgsyF6k9/062pxONTaQO3f2D/MMY+vrO/xf7pH9g/jrGnd/a32D//nT0ez29BH/vyVHwC'),
			this.addDataEntry(dt + 'item flow', 200, 120, 'Item Flow',
				'7ZVdb4IwFIZ/TW8N0m3JLgXULHGJmb+gwhk09oO0dYC/fgco6hxmH/HSC0j79rzNOc9LAqGxrJeGlcWrzkAQOic0Nlq7fiXrGIQgYcAzQhMShgE+JFxcOZ12p0HJDCj3G0PYGz6Y2EOvQPmiVlztUCV0hu/5uq+xrhG+pnASO02mhEa2YGWryjpvh5jYxkox4Q7kQujqjecF9hG9a+U23t+6qgIrNiVLW6FCI2pM8FzhNsXWwaDgWwPjoL46Xif52ZagJTjTYEnFM1f4EYMeQVBA301n81wCZnshP3pPtHDhgY3DoyPwJtNvtAxYfmDbbotMozN6w8zGc7KIhKvcY0va0aIWAE+ZmPlaybOsvSsSbAtirS13XJ9fMhhWF+dOl4MrYukuN3qvslgLjbATpRUMQfFDl5MnlGqlIHV+gOMX9VMw4Xgw9UUojUd5gzgexuII73H8I46nG8TxOBYHvcfxjzie/x4Hbk9/ke7sy0/mEw=='),
			    			
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 200, 80, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'&lt;&lt;interface&gt;&gt;<br/>' +
	    			'<b>ISpeedObserver</b></p><hr/>' +
		    		'<p style="margin:0px;margin-top:4px;margin-left:4px;text-align:left;">' +
	    			'notifySpeedChange(): void</p>',
		    		'Interface', null, null, this.getTagsForStencil(gn, '', dt + 'interface').join(' ')),
			this.addDataEntry(dt + 'item flow', 250, 60, 'Required Interface',
				'3ZVNj5swEIZ/DdeImN2qPW7IdrXSrhR1e2iPDkzAqvFQe5LA/vqOwZAvokbVnhopkv2OZxi/jw1RklbNk5V1+Yo56Ch5jJLUIlI/qpoUtI5ErPIoWUZCxPyPxNcr0XkXjWtpwdAtCaJP2Em9hV75bqVxlXJOoemDjlodgiVV3OJyHiULV8raq1VT+O5nrnWVntVo6Y6jGzT0FvL86n2pCN5qmXlhzwmsSa0Kw9OMewXLQugFLEFzdT+dFDbzBFgB2ZaXhIQv/XbjvcqpDAmfglaCKspQZdCk6+fFWOlgFg+CX9PeJRfe1fMLxwabLGT86MWRgRacepfrbmF8ZIeGjV/pbVCZ1A9BXiMRVhzQcg16hU6RJ8SV+12NCS9nccJ6yFrI7FdhcWvyFDWy5UuDBgZc6r2jFY8kMjSG2w49jmfpb4TENKE2RC8JiQlA4gMA3V0Aeu5Od1rlF5wgL2A4sMGUI1a3sgGTP1iLe9b4Pry+fIPfz94WHwj+fvazRtGPgN2Pf/rx7N6DUFoPbCKRbLrfCMQ3eWK7w63N4OQq335XQg0LWpLanRaesj0UWqHi+oclJG0BFNQzOONDb+J1f4XXUpL8WGD9nTintbK4O8c1F/8Lr3b6zffP+Hh6+E71y48/Y38A'),
			this.addDataEntry(dt + 'provided interface', 250, 60, 'Provided Interface',
				'3ZVdb9owFIZ/jW9RcNppuyxhqyqtUrXuYrs0ySGxavtktoGkv37HiROgCRqaelUkJPs9Hzl+XkNYmunm3oq6esQCFEu/sjSziL5f6SYDpRhPZMHSNeM8oS/j3y5El100qYUF468p4H3BXqgd9MpPK4zT0jmJpg8636oYrLymEddLlq5cJeqg6qYM0y9c67Ra1Gj9DUW3aPxzrAvZh0p6eK5FHoQDFZAmlCwNbXOaFSwJcRawHpqL5+mkeJh7QA3etpQSC770x00OsvBVLPgUtQpkWcUugyZcvy/HTkdYtIi85tmlE3b1ckJswGQhp0evTgBacPJVbLrEhPZKbECtRP5SWtyZIkOFBGVt0MAAVL52PJORVY7GUOPYZXT7Xwz5PMM2RqcM+QxC/g4IbyYIH7r7l+liQhKKEoYrFaGc0Bwuk4Jt4BwAyFyouyhv0HvUFABT3FmLB9Loxj5+/wF/HgKWEIh8P4ddI/2vaExY/w7rxW0wQio1eMN4uu0+oyFhyDPsDnc2h7Mf2/W3OfawoISX+/PGc9hjoyeU1P+Y4oUtwUf1jTnjQ6/y6/aCX2vhxfsa5rGecevJ4v6tXUv+Ufxq5/+b/ts+2h7fJH366YvmLw==')
	    ];
	    
	    this.addPalette('sysmlPorts and Flows', 'SysML / Ports and Flows', expand || false, mxUtils.bind(this, function(content)
		{
			for (var i = 0; i < fns.length; i++)
			{
				content.appendChild(fns[i](content));
			}
		}));
	};

	Sidebar.prototype.addSysMLConstraintBlocksPalette = function(expand)
	{
		var s = 'html=1;shape=mxgraph.sysml.';
		var gn = '';
		var dt = 'sysml constraint block ';
		var sb = this;

		var fns = [
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 200, 180, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
		    		'&lt;&lt;constraint&gt;&gt;<br/>' +
		    		'<b>ConstraintBlock1</b></p><hr/>' +
		    		'<p style="font-size:10px;margin:0px;margin-top:4px;text-align:center;">' +
	    			'<i>constraints</i></p>' +
		    		'<p style="margin:0px;margin-top:4px;margin-left:10px;text-align:left;">' +
	    			'{{L1} x > y }<br/>nested: ConstraintBlock2</p><hr/>' +
		    		'<p style="font-size:10px;margin:0px;margin-top:4px;text-align:center;">' +
	    			'<i>parameters</i></p>' +
		    		'<p style="margin:0px;margin-top:4px;margin-left:10px;text-align:left;">' +
	    			'x: Real<br/>y: Real</p>',
		    		'Constraint Block', null, null, this.getTagsForStencil(gn, '', dt + '').join(' ')),
			this.addDataEntry(dt + 'parametric diagram', 300, 170, 'Parametric Diagram',
				'7Zddb5swFIZ/DZet+CjJdhlg600nTe3FsksHTsCKwcw4CezX7xibBAJ0VZt10jQpUfD5wPbzHh+I5YV5fS9ImX3hCTDL+2R5oeBc6qu8DoExy7VpYnmR5bo2fi3384zXab12SQQU8iUJrk44ELYHbbHcBcPUoERzJRumzYsfe7WkICcipYXlreyyPg1vJC/RdNc3Mdhi/MrRcRJqeUMYTVWqdgXnm+JVan7bqTedAffR2XALm3OcrT8B4/HO6YWU5xB3sH43kznCjRz0VRkplTWvU8X9tmqqnN2WJN6RFO0BIxtgaxWMk3iBWXZkll1hIC3Sh3YUOSqCH0BsGT/ieEsRrxccMyrhCSPVPEecRSVKwXfwjSYyMwsREO9FRQ/wCBX9qULt09LxlghtVtXWZCS9B56DFA2GHM3d0evZWnk7A5pmXdrSGEmlDekp91wkeGHqZLpmvFHNhLibFZpCXuAuCcVVvoK/IHmU5hiw5YV8MqnODM1OlRiRgHgpNncaW5fgGTqNHvtm2KPq+FNU7StQvRtRrVuo8xyFqhqyYV3hXBSqQkFjwlbGnNMkYaf6/sorKimfiH+4cA/zAjwmqeD7Igk54wg+KngBnWi6ittDMTwnCvtIV725mBcFxNJs5NSxfielNy2lkc71366IP1Kk+a/IqxVZXkGRxUgRBkWqzqbqPo9A2Eidrtlgr1VIe2Jd4pmj3T7cRtptuJQ8v07fuWg7C3/UdtyJruNeoeksR0DNpP8ST8d5P6AfJt6nLghCkayEaN8WzEHtQYQkhe5AGi/UVH5XDeUWO5Ierk1/QR6i0T6/G64HR1nd73mKuDa+FzEMnu0SX+JA9g7d/DNTJwhgROKbzMD4FpAf/yTI5V8BuXwPkDg8/3tofYM/F78A'),
			this.addDataEntry(dt + 'constraint property', 150, 100, 'Constraint Property',
				'7VTLbsIwEPwaX1FIinrOo+VCpap8gUkW26ofkW1Kwtd3nRgoDaituPYQyZ7dsXdmIpOsVN3S0pa/mAYkyZ5IVlpj/LhSXQlSkjQRDckqkqYJfiR9vlGdD9WkpRa0/w0hHQkfVO5gRMo5yfLSaOctFdrHE53vZWzgXuGYFbYVjtM2oKpjQcHM9U7JGd5OVcUUNmyN9utIDYQ9Fx7WLa0DsEcOYlQKpnFb48hgEYgjgfXQ3ZQ1QFHTEowCb3ts2YvG89ixGKUnHATjR1oSQepGgJ24Z5dwEY26blo2MQ3nzBF5Ayonfllw4kA3wzZBeV/8O0qXsMX5iiBZ1FTmEVaiaQKtkHQD8tU44YW50r/6Vr7kFbR+Z9bsdFMaadDgShsNx3DEYcgmDOYwF6HZaji8CvZO8hvF1UZrqH3UdPrHfoosvR5ZH6uL+4N5mATT/wdzbzCPfw8Gt+cnbKhdvHCf'),
			this.addDataEntry(dt + 'constraint property', 150, 120, 'Constraint Property',
				'3VTLboMwEPwaHxMRk0a9xtDmkkpR0x9wwAGrflDbSUi/vmswIPJQK/VS9YDwzu7Y3pkFFCeyXhlalS86ZwLFTyhOjNauXck6YUIgHPEcxSnCOIIH4ec72VmTjSpqmHI/IeCWcKTiwFoE4YUAKqkAtu4sWnjxcfBXIpKagisUL6Oq7sOJ0xVA8wZyrHYTKnjhqzK4BjOADjvAqghvKoFGxHWUaWWdoRx66PAxp4ua6p3x/Q3btmAHJDO4B/SS9HvOuhqg7S55gFWXWDk+AI+UwaWTYFsKxxBb0sqjsi68o1N7tlJMfTcb4yUi+sjMXugT1Ow5GBGTU8kd21Y087wTsPojoBS0vOtrAwVTV0xL5swZSk48d2WoeGi9j0rGi7KjhYGIqG2BoucOYwKLMCm3pya+mpq6FfmVUXElkGGWf9JdE0ZezkGwMCepYHuvrW+ZZ1QsAyx5nnsaEXTHxEZb7ri+Ub++SI95hGbvhdEHlSdaaJjGVGnlsxZk56pYN5ulXs4OevNupV6rmOy1ctvQzax3B0xVLHOhrf47+841fNu135gxvzLj/C/NePyDZkA4/Kub3OhX/gU=')
		];

	    this.addPalette('sysmlConstraint Blocks', 'SysML / Constraint Blocks', expand || false, mxUtils.bind(this, function(content)
		{
			for (var i = 0; i < fns.length; i++)
			{
				content.appendChild(fns[i](content));
			}
		}));
	};

	Sidebar.prototype.addSysMLActivitiesPalette = function(expand)
	{
		var s = 'html=1;shape=mxgraph.sysml.';
		var gn = '';
		var dt = 'sysml activity ';
		var sb = this;
		
		var fns = [
		    this.createVertexTemplateEntry('shape=rect;html=1;rounded=1;whiteSpace=wrap;align=center;', 
		    		160, 80, 'Action', 'Action', null, null, this.getTagsForStencil(gn, '', dt + 'action').join(' ')),
		    this.createVertexTemplateEntry(s + 'callBehAct;whiteSpace=wrap;align=center;', 
		    		160, 80, 'action name:\nbehavior name', 'Call Behavior Action', null, null, this.getTagsForStencil(gn, 'callBehAct', dt + 'call behavior action').join(' ')),
		    this.createVertexTemplateEntry(s + 'accEvent;strokeWidth=2;whiteSpace=wrap;align=center;', 
		    		100, 60, 'Event', 'Accept Event Action', null, null, this.getTagsForStencil(gn, 'accEvent', dt + 'accept event action').join(' ')),
		    this.createVertexTemplateEntry(s + 'timeEvent;strokeWidth=2;verticalLabelPosition=bottom;verticalAlignment=top;', 
		    		35, 40, '', 'Time Event', null, null, this.getTagsForStencil(gn, 'timeEvent', dt + 'time event').join(' ')),
		    this.createVertexTemplateEntry(s + 'sendSigAct;strokeWidth=2;whiteSpace=wrap;align=center;', 
		    		100, 60, 'Signal', 'Send Signal Action', null, null, this.getTagsForStencil(gn, 'sendSigAct', dt + 'send signal action').join(' ')),
		    this.createVertexTemplateEntry(s + 'actFinal;strokeWidth=2;verticalLabelPosition=bottom;verticalAlignment=top;', 
		    		40, 40, '', 'Activity Final', null, null, this.getTagsForStencil(gn, 'actFinal', dt + 'activity final').join(' ')),
		    this.createVertexTemplateEntry(s + 'actParamNode;align=left;spacingLeft=15;verticalAlign=top;spacingTop=-3;', 
		    		300, 135, 'act', 'Activity Parameter Node', null, null, this.getTagsForStencil(gn, 'act', dt + 'activity parameter node').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;rounded=1;html=1;whiteSpace=wrap;align=center;', 
		    		160, 80, '&lt;&lt;controlOperator&gt;&gt;\nCallBehaviorAction', 'Control Operator', null, null, this.getTagsForStencil(gn, '', dt + 'control operator').join(' ')),
		    this.createVertexTemplateEntry(s + 'package;align=left;spacingLeft=5;verticalAlign=top;spacingTop=-3;labelX=135;html=1;overflow=fill;', 
		    		250, 120, '<p style="margin:0px;margin-top:4px;margin-left:10px;text-align:left;"><b>act</b>   [ControlOperator]</p>', 'Control Operator', 
		    		null, null, this.getTagsForStencil(gn, 'package', dt + 'control operator').join(' ')),
			this.addDataEntry(dt + 'decision node', 200, 80, 'Decision Node',
				'7ZXJboMwEIafxneWpOo1kDSXVoqUJzBhBFaNB5kh29PXYIclTVS6ST30gDTzz+JhPpBZGBfHteZl/oIpSBauWBhrRLJWcYxBShZ4ImXhkgWBZx4WPN2J+m3UK7kGRVMKAluw57IGq1ihopN0QpXzsjF1jkVSVyyMcirMoEvfmHvQJHZcPvME5AYrQQKViSVIhMUgYSFFpgo7FWFpIu5kE4fj3elbyY2+BiyA9MmkuIJH+3Leyboz5x5ESvlYykFkOY01Xlk/6/r2izKG29XtvYUf7w3SDLbOBZngYdULwxW2MWPnqMUZFXETiHizrmbpduzxGof7BZUutG4bKFRNa421SqGZ0zOebMBEfPeatXqMEnWfWxHXdKnHEtRF24pzM7cfdKCa1xlhqrDWOxh9RhPIaZCcxH7c6hYJV7pBYTp2xH3vCp4ZNgNyWVf8umMnIZ29RzqPsprrlM2X36Z7ATiRpWPxGZam+q9SC7zxj/rwaxDntyCCrOCf4VcZ/jQz4/b3m00fXn9v'),
			    
		    this.createVertexTemplateEntry(s + 'flowFinal;strokeWidth=2;verticalLabelPosition=bottom;verticalAlignment=top;', 
		    		40, 40, '', 'Flow Final', null, null, this.getTagsForStencil(gn, 'flowFinal', dt + 'flow final').join(' ')),
			this.addDataEntry(dt + 'fork node', 200, 80, 'Fork Node',
				'7ZZNb4JAEIZ/DXdYrPZq0XppExMPPa8yhU2XHbKMn7++Czt+QDQ1RpMeJCHZfeeD2feBhCBOis3EyjL/xBR0EI+DOLGI5FfFJgGtAxGqNIhHgRChuwPxfiEaNdGwlBYMXVMgfMFK6iV4xQsVbTULVS7Lemlh4Vq+5VS4KUeRW34rrRPUaJvEOGwup6/AklpI/SHnoKdYKVJoXM4cibA4SRhqlZnCj0pYugiP4+KwuXikRuLzTAALILt1KVzQ9ycO1yql3Es9r+Sgspx7vHKWrPw+O/Q5uuUWbNh58+K/zYM0gxlvQc9xPT4Kp1Y2MbfO0aodGpK6Fk06tLbRDZq6wuLSpFA/vva5Imlpn4ElmEaz+ANffPZ4nzVTu3qESBw8ridrOVzh0i6g9VpcYboFLUmt2q3OmcqlU1Suowi3TKaDwc2aAXFSh8ThqVfB6d0fzv61baNh47touhhcxb+DwF+MCJkCQ4keBuXlCeVWKPHDoPSfUG6F8vIwKIMnlFuhDO4FxW2Pf2I+/fRH7Rc='),
			    
		    this.createVertexTemplateEntry('shape=ellipse;html=1;illColor=#000000;strokeWidth=2;verticalLabelPosition=bottom;verticalAlignment=top;', 
		    		40, 40, '', 'Initial Node', null, null, this.getTagsForStencil(gn, '', dt + 'initial node').join(' ')),
			this.addDataEntry(dt + 'join node', 200, 80, 'Join Node',
				'7ZZNb8IwDIZ/Ta6oNBvsugLjskmTdtg5tKbNltZVahjs189NMigfk5AAaQcqVXLs1076PjlUyFG5mlpVFy+YgRFyIuTIIpKPytUIjBFxpDMhxyKOI35F/PRHte+qUa0sVHRKQ+wblsoswGfEMPlAXTU1pJzo9XpiOPaihtYmiJpC1W1oIeVtkoJKPvm4z+FcGzNCg9YJZeQezi/Bkk6VeVYzMK/YaNJYsWaGRFiywLSFRKWfucVFlXVmzN3TmfFodN72EtacDV/ANVj96YJLBQumgCWQXbPkt0EOfMuXzqjwuTufKUDnRRjy4L2MVOPX+WbQ1mEOgsnHDZeHhu+bC1kOb2EJZoZfk22ia7WrcVyg1d9YkeJC4syDdrPWdaiyR2udCmtgz5KGLH7Ce/hO6TVv+rvdrB9v7GzPsGNmgwubws6lOcFfC0aRXu6OOmZfaH3lm0dbLnEUHF8HJnsASNkcKDTtMdic4iQsd5fH8ntbnenK0h6IDpoKKzhAdwjKTfl3qAKa/tXQ3N/QnIdGXg3N4IbmPDT3V0MzvKE5D83wUmh4uf2f8/Lu794P'),
			this.addDataEntry(dt + 'is control', 300, 60, 'Is Control',
				'zVTLboMwEPwaXyMCbaMeA0lzqlQpl/bowApbMjYymwD5+q7BQEgTKYdW6gFpd/bh8Qwyi5Ki2VleineTgWLRlkWJNQb7qGgSUIqFgcxYtGFhGNDHwrc71WVXDUpuQeMjA2E/cOLqCD2yTlEa3cMVtsrDAgsit1myKK4ELx1aNLnjvajaqlALWSVGozXUFddCIuxLnrq2mpoI40rmmtKUmIElwJ8MFqG5y76DPPUdmALQttTiB177ywW1zFD4AX/hQIDMhd/y4jFe9Xk+bpqkocCrc1up6IdSbBWn/sqrzQ/BIMth71NQB1NvJyC+ULOrUSyMlWdax52AFXKLa2u7iimBhIutOeoMHJvAjelsqGuj3U6npEy5WnuhDwbRFK61kfg5jFH85eLF83DMXp4dx2U4euKozxypzNGmMPtjHjDJguIoT/NVtyzwox9G0sYwaL3gV6YR1xzQN135Np76kJVPf2zl4MTcpps23jeN2LSjay6ZbKOl/860ZjDNu/bbJlI6vYp9++Wj+Q0='),
			this.addDataEntry(dt + 'is stream', 300, 60, 'Is Stream',
				'zVTLboMwEPwaXyMCbaMeA0lzqlQpl/bowAos2RjZmwD5+q7BQEgTKYdW6gFpd/bhYQbMokQ1O8Or4l1nIFm0ZVFitMY+Uk0CUrIwEBmLNiwMA3pY+HanuuyqQcUNlPjIQNgPnLg8Qo+sUxS67GGLrfRwgYrIbZYsim3BK4eqJne8F7a1Si6ETXSJRlNXXBcCYV/x1LXV1EQYlyIvKU2JGRgC/MlgEJq77DvIU9+BVoCmpRY/8Nq/XFCLDAs/4F84KEDkhd/y4jFu+zwfN03SUODVua1U9EMptootGuCKrTY/9IIsh71PQR50vZ2A+ELMrkZxoY04k4Dc6WeRG1wb01V0BaRbbPSxzMCRCdxYmQ31UpdupxNSpFyuvc4HjaiVa20Efg5jFH+5ePE8HLMXZ8dxGY6WOOozQ6w+mhRmH8wDHhmQHMVpvuqWA370QwvaGAat1/vKM+KaA/qmK9vGUx9y8ulvnRyMmLt008X7ntGf1I6muWRyjZb+O8+awTNv2m97SOl0J/btl1fmNw=='),
			this.addDataEntry(dt + 'is stream', 300, 60, 'Is Stream',
				'zVTJboMwEP0aXyMCbaUes58qVeKSHl0YYUtekJkEyNd3DCaQTcohhx6QZt4sfn7PgiUr3ewcL8WXzUGxZMOSlbMW+0g3K1CKxZHMWbJmcRzRx+Ltg+q8q0Yld2DwmYG4HzhydYAeWWQorenhClsVYIGayK3nLFlWgpce1U3hec+qttJqJqsUHXBNDbWQCGnJM99VUw9hXMnCUJoRMXAEhIPBITQPyXdQYL4DqwFdSy1h4LO/W1TLHEUYCPeNBMhChC0fAeNVnxfnTaMyFARx7guV3Ah1IxHkBaQhBfVr680ILCf6dTWKhXXyZA1y5UVF7nDhXFexJZBWS2cPJgdPIPJjJh/qxhq/ExqJ+6FK8Y+PZ+/DtlSePJV5fFbbM7zQurIHl8HFU3hCfgeKozxerronbhj9tpI2xlEbpLyyg7gWgKHpypHzqU+Z9PZ6k/wDlVln0cSABwYR0f00GQ2h2X9nRzPYEfx4tT2Ujj+yvn36n/sD'),
	
		    this.addEntry(dt + 'is stream', function()
		    {
		    	var cardCell = new mxCell('act', new mxGeometry(0, 0, 200, 100), s + 'isActStream;align=left;spacingLeft=5;verticalAlign=top;spacingTop=-3;');
		    	cardCell.vertex = true;
		    	var label1 = new mxCell('{stream}', new mxGeometry(200, 50, 0, 0), 'resizable=0;html=1;align=left;verticalAlign=top;labelPosition=left;verticalLabelPosition=middle;labelBackgroundColor=none;fontSize=10;spacingTop=5;');
		    	label1.geometry.relative = false;
		    	label1.setConnectable(false);
		    	label1.vertex = true;
		    	cardCell.insert(label1);
			    
			   	return sb.createVertexTemplateFromCells([cardCell], 250, 100, 'Is Stream');
			}),
			this.addDataEntry(dt + 'local pre precondition post postcondition', 150, 180, 'Local Pre- and Postconditions',
				'5ZVNb4MwDIZ/Te6QtL33a71s0qQeds7Ag2ghQcEtbX/9HEhbEEWqtHWatAPCfp03kCeGMLEsDhsny/zFpqCZWDOxdNZiGxWHJWjNeKRSJlaM84guxp9GqnFTjUrpwOA9Bt4a9lLvoFW0TaR+dZBYkypU1jA+Y1zEERML0ip0UtHcja3Cow62KpelD41Fui1yLGgtq5jCSp18IZ76GJ39hDeVYk4SJ0VqlRmKNXygH1DKRJnsuclW3lLnCmFLsp+kJlAdU0KrBEdCWAU4hMMoiUYKGDZgC0B3pCF1eBs/ItCKclBZHmyToMmqzbOL9cqVgoD2NmYxwDxPWrYjGIk/9jE6uzMppGeoA5AP53Q2BBzHNp1N27RLMbpBcfoDFCcjzWor/DfdGgy8vwvxuUm72yAe1MzTwTYM+EKawTakoN9tvb4KXdpNjeLcOnWyBqXudbrfRTDp3LlmlLEGLvj8I3rwKrtzCfR+ayhdBtj7BO9A7EBLVPv+7N8BNvv7wMQQ2OTXgFF6PfGaWu9A/AI='),
			this.addDataEntry(dt + 'merge node', 200, 80, 'Merge Node',
				'7ZXPboMwDMafJncInbRrS7teNqlSnyAUC6KFGAXTf0+/hKQUunbrpE7aYQck53PsON8PKSxJq/3SiLp8wxwUSxYsSQ0i+ajap6AU45HMWTJnnEf2Y/zlRjbuslEtDGi6p4D7gq1QLXjFCw0dVBCaUtQuNCVWWduwZFZSZQedxzbcgiG5EepVZKBW2EiSqG2OsB5kp0oWuvIjZUiElU2Gk+0W2N+cvpPC6EvACsgc7JZQ8OwvF+1kTqWXJkEqQRYljTXR+HXRNzo7Y4NgznWjku+NgryAdViCynC3OAtDz7qcjUs08oiahE3MhLPIuezHHls3tM1gq3NwU0V2pZzvM7F5Lzo9RYXGpjRqdyjofGpMdxjWoL2ylkc3Ycx7Bm7wEYEGW7OB0R9yBxQDSpDcjltd8zyUrlDajj3MOAqYDmO4pw4kTAEUii7A9VPcxXLyeJYnXF+Ra+wN6DOPkxKY/YRv1/Gv8uQXPPmv8Xz65/mbPB/Nzy7PD5zfPnz/PgA='),
			this.addDataEntry(dt + 'no buffer', 300, 60, 'No Buffer',
				'zZTBboMwDIafJteKwlZpx9JuPU2a1Mt2TMGFSCFGwW2hTz8HApSulXrYoQck+4/t2P4AEa2KemNlmX9iClpE7yJaWUTqrKJegdYiDFQqorUIw4AfEX7cOZ23p0EpLRh6JCHsEo5SH6BTlgkpNJ1cUaO9nFPBza3nIoqrXJZOLerM9T2rmqrQM1Wt0JBFjopPuSLYljJxYScOYk1qlRl2E+4MLAv+ZrAE9d3uW8m3vgEsgGzDIT7hrRsuOKmUcp/gBw5yUFnuqyy8JqvOz4ZK42rY8Nu5vanoz6ZEuJCFG01TO86lZzA+7Pc8Z69mkxjvXe0Y0gy23gW9w9P7KMQXANoztnO06sxLl27nFUlLS2vbEyyBdx1bPJgU3ACBSzNpf27QuJpu+SqReunZ7JAICxdaK/ru09j+cfbstb9mq86ux3k4TOFan0Cs8GATmLxkD3C1oCWp47TULWo+9QsVVwyDxjO64sy9ZkA+6Ar1cOtD9F+ej34Pb0r2Jvn7nPmLbQbQzhlJc9Gn41z3nD3o/+bO7vjv7cIvf82/'),
	
		    this.createVertexTemplateEntry('shape=rect;html=1;whiteSpace=wrap;align=center;', 
		    		160, 80, 'object node name:\n type name\n[state, state ...]', 'Object Node', null, null, this.getTagsForStencil(gn, '', dt + 'object node').join(' ')),
	    	
		    this.addEntry(dt + 'object node', function()
		    {
		    	var cardCell = new mxCell('Action', new mxGeometry(0, 0, 120, 60), s + 'isControl;whiteSpace=wrap;align=center;');
		    	cardCell.vertex = true;
		    	var label1 = new mxCell('pin name: type name\n[state, state ...]', new mxGeometry(0, 30, 0, 0), 'resizable=0;html=1;align=right;verticalAlign=middle;labelPosition=left;verticalLabelPosition=middle;labelBackgroundColor=none;spacingRight=5;');
		    	label1.geometry.relative = false;
		    	label1.setConnectable(false);
		    	label1.vertex = true;
		    	cardCell.insert(label1);
			    
			   	return sb.createVertexTemplateFromCells([cardCell], cardCell.geometry.width, cardCell.geometry.height, 'Object Node');
			}),
			this.addDataEntry(dt + 'optional', 300, 60, 'Optional',
				'zZTBboMwDIafJteKwlZpx9J2PU2a1Mt2TMGCSAlGwS3Qp58DAUrXSj3ssAOS/cd2bH+AiDam2VtZ5h+YghbRTkQbi0i9ZZoNaC3CQKUi2oowDPgR4fuD02V3GpTSQkHPJIR9wlnqE/TKOiGFRS9X1Gov52S4ue1SRHGVy9Kppslc34uqrYxeqGqDBVnkqLjOFcGhlIkLqzmINalVVrCbcGdgWfA3gyVoHnbfSb71PaABsi2H+IS3frigVinlPsEPHOSgstxXWXlNVr2fjZWm1bDht3N/U9GvTYlwJY0bTVM3zrWHpdui1KOazWK8d7NjSDM4eBf0EevdJMRXALoztnO06sJLl27nFUlLa2u7EyyBdx1bPBUpuAECl1akw3mBhavplq8SqdeezRGJ0LjQRtHXkMb2t7MXr8M1B3VxPS7DcQrX+gxihSebwOwle4KrBS1Jneel7lHzqZ+ouGIYtJ7RDWfuNQPyQTeox1ufov/y/+gP8OZk75J/zJm/2HYE7ZyJNBf9d5ybgbMH/dfc2Z3+vX349a/5Bw=='),
	
		    this.addEntry(dt + 'optional', function()
		    {
		    	var cardCell = new mxCell('act', new mxGeometry(0, 0, 200, 100), s + 'isActStream;align=left;spacingLeft=5;verticalAlign=top;spacingTop=-3;fontStyle=1;');
		    	cardCell.vertex = true;
		    	var label1 = new mxCell('&lt;&lt;optional&gt;&gt;', new mxGeometry(200, 50, 0, 0), 'resizable=0;html=1;align=left;verticalAlign=top;labelPosition=left;verticalLabelPosition=middle;labelBackgroundColor=none;fontSize=10;spacingTop=5;');
		    	label1.geometry.relative = false;
		    	label1.setConnectable(false);
		    	label1.vertex = true;
		    	cardCell.insert(label1);
			    
			   	return sb.createVertexTemplateFromCells([cardCell], cardCell.geometry.width, cardCell.geometry.height, 'Optional');
			}),
			this.addDataEntry(dt + 'overwrite', 300, 60, 'Overwrite',
				'zZTBboMwDIafJteKwlZpx9J2PU2a1Mt2TMGCSCFGwS3Qp58DAUrXSj3ssAOS/cd2bH+AiDZFs7eyzD8wBS2inYg2FpF6q2g2oLUIA5WKaCvCMOBHhO8PTpfdaVBKC4aeSQj7hLPUJ+iVdUIKTS9X1Gov51Rwc9uliOIql6VTiyZzfS+qtir0QlUbNGSRo+I6VwSHUiYurOYg1qRWmWE34c7AsuBvBkvQPOy+k3zre8ACyLYc4hPe+uGCWqWU+wQ/cJCDynJfZeU1WfV+NlaaVsOG3879TUW/NiXClSzcaJq6ca495Llqy1sY5WwW5L2bJUOawcG7oI9Y7yYhviLQnbGdo1UX3rp0S69IWlpb251gCbzs2OLJpOAmCFyaSYdzg8bVdNtXidRrD+eIRFi40EbR15DG9rezF6/DNQd1cT0uw3EK1/qMYoUnm8DsLXsCrAUtSZ3npe5h86mfqLhiGLQe0g1o7jUD8kE3rMdbn8L/8g/xD/TmaO+ifwyav9l2JO2cCTUX/XegmwG0J/3X4Nmd/r59+PXP+Qc='),
	
		    this.createVertexTemplateEntry(s + 'paramSet;whiteSpace=wrap;align=center;', 
		    		160, 100, 'Action', 'Parameter Set', null, null, this.getTagsForStencil(gn, 'paramSet', dt + 'parameter set').join(' ')),
		    this.createVertexTemplateEntry(s + 'paramActSet;align=left;spacingLeft=15;verticalAlign=top;spacingTop=-3;fontStyle=1;', 
		    		250, 120, 'act', 'Parameter Set', null, null, this.getTagsForStencil(gn, 'paramActSet', dt + 'parameter set').join(' ')),
			this.addDataEntry(dt + 'probability', 120, 160, 'Probability',
				'zVTLboMwEPwaXyNi2uQcoM2llSqlP2DMBqwaG9lOA/n6rsEhb7WRqqoHJO/sjj2eQSZxWrdLw5rqVRcgSfxE4tRo7YZV3aYgJaGRKEicEUoj/Ah9vtGd9t2oYQaU+wmBDoRPJjcwIAvuhFYDbF0nA1y5GsVlUxIntmKNR+u29LontrO1nDRG5ywXUrgOZ7aVcLBqGPeDWxxDjElRKiw5agODQDgbjIP2pv4eCuKXoGtwpsORrShcFSbCHaMKRFntabMAMjsA5cg92IGL4Mh1d+ILd8g88fqO7oqH+86M0HiKy6QfXjXAxVpwNngZkXl24agBK3Ys70tPPHJ475SEtfNbokO4l1wEONfO6RobkuUg37QV/TEX8y9n7VNewvhHafRGFamWGvPIlFYoJllr5VZi53X1N7IYo1BlEtgZfRyz41op4C7cYvzbvsuUXs+0PcuzG+qHX0jy4X8m6XRzf4xHpHszfPfUPw9wrO9IEMvDK9j3Th7JLw=='),
			this.addDataEntry(dt + 'probability', 120, 160, 'Probability',
				'zVRdb4MgFP01PK6x0I/nqVtfuqRJ9wdQqZIh1yDttL9+gFRb22Zrsix7MOGec0+4nCMgEpXNStGqeIOMCUReEIkUgO5WZRMxIRAOeIZIjDAOzIfw6x126tigoopJ/RMB7gQHKvasQ2iqO6zWrfBYoUszWTxFJKwLWlm0bHI79KRu61JMjGijIDE8FTyXhhdsp217RVMu87Wr4rlBDkxpnlLx7Bs1VEPfuy3iJ2KQHUi99SPYjf2gRs2au4d1kD/pikHJtGpNyyfPdOE7vCFBwXhenGQLD9K6A/JeO3hnFt6+21aSKyvRMrTzGWNowgXXdhTHLBAm08CaYZu3FUv5zniiOUjbsoyvElCs5keauNIKzxIZOT72NwGtoTSEoAkTG6i52+aqfz2iL3UhTT9yBXuZRSBAGV6CZKeY+NGlFAxBhl4d43mfXQpSslT7U/S/5neZ4tuZNqM8266e/UKSs/+ZZHdTHozxTPRoht1l/OsA+/qBBE05PJmOu3hRvwA='),
	
		    this.createVertexTemplateEntry('shape=rect;html=1;whiteSpace=wrap;align=center;', 
		    		120, 60, '&lt;&lt;continuous&gt;&gt;\nObject Node', 'Rate', null, null, this.getTagsForStencil(gn, '', dt + 'rate').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;whiteSpace=wrap;align=center;', 
		    		120, 60, '&lt;&lt;discrete&gt;&gt;\nObject Node', 'Rate', null, null, this.getTagsForStencil(gn, '', dt + 'rate').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;whiteSpace=wrap;align=center;', 
		    		140, 120, '{ rate = constant }\n{ rate = distribution }\n&lt;&lt;continuous&gt;&gt;\n&lt;&lt;discrete&gt;&gt;\nObject Node', 'Rate', 
		    		null, null, this.getTagsForStencil(gn, '', dt + 'rate').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;', 
		    		140, 80, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
		    		'Object Node</p><hr/>' +
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
		    		'&lt;&lt;rate&gt;&gt;<br/>' +
		    		'rate = constant<br/>' +
	    			'rate = distribution</p>',
		    		'Rate', null, null, this.getTagsForStencil(gn, '', dt + 'rate').join(' ')),
	    	
		    this.addEntry(dt + 'rate', function()
		    {
		    	var cardCell = new mxCell('act', new mxGeometry(0, 0, 200, 100), s + 'isActStream;align=left;spacingLeft=5;verticalAlign=top;spacingTop=-3;fontStyle=1;');
		    	cardCell.vertex = true;
		    	var label1 = new mxCell(
		    			'{ rate = constant }\n{ rate = distributuion}\n&lt;&lt;continuous&gt;&gt;\n&lt;&lt;discrete&gt;&gt;', 
		    			new mxGeometry(200, 50, 0, 0), 'resizable=0;html=1;align=left;verticalAlign=top;labelPosition=left;verticalLabelPosition=middle;labelBackgroundColor=none;fontSize=10;spacingTop=5;');
		    	label1.geometry.relative = false;
		    	label1.setConnectable(false);
		    	label1.vertex = true;
		    	cardCell.insert(label1);
			    
			   	return sb.createVertexTemplateFromCells([cardCell], cardCell.geometry.width, cardCell.geometry.height, 'Rate');
			}),
			this.addDataEntry(dt + 'rate', 300, 60, 'Rate',
				'7ZVNj5swEIZ/ja8RgTarHgO73dNKK+XSHh0YgbXGg+xhA/vrOwZDlnxUqOqhhx5QPK/H43dGD0EkWd09W9lUL1iAFsmTSDKLSOOq7jLQWsSRKkTyKOI44kfE3+/sbofdqJEWDK05EI8H3qVuYVT2OSk0o+yo10GuqGZzj1uRpK6SjVfrrvS+N653td4ol6Ehi5yVnipFcGhk7tNOnMSa1Ko0HObsDCwL4WawBN1d94MUrD8D1kC255Rw4NvYXHRSBVXhQGg4qkCVVaiyC5p0Y1zOlc6j4UWYzu1JJVeTEg/cQ2QlAf8MUpSjcSTZPAsPLOxEnGwj3+x1bqEcWXVsqfXzXmbHO1n7oWm6ivgKUqbF1s16uciaojXF2ENuwZv6XakLFKAo4RBC0Ec8PZ2F9BMnwx6vK7Tqg11LjwaPx9Le2mEHG2AkUoutKcDP2fsFU0z7Bo2v6RlRudT7gBChNwedoh/TGV7/9OvNV9+aPIJOZf5WDpUz1GjP1QYHB/Xh7W/juUHf1QJDh63NYfGarCDTgpak3pelbnEXjr6iGnDpA2UXpLLXEigkXcA637qK3y//+f1Dfif8lmzeZPcOqfy/2M+o+mAtq3zfP0dqN5EaUP3b5HJ4/v6N6Z8/j78A'),
	
		    this.addEntry(dt + 'control flow', function()
		    {
			   	var cardCell = new mxCell('', new mxGeometry(0, 0, 60, 40), 'shape=rect;html=1;rounded=1;whiteSpace=wrap;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('', new mxGeometry(100, 0, 60, 40), 'shape=rect;html=1;rounded=1;whiteSpace=wrap;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;endArrow=open;labelBackgroundColor=none;endSize=12;');
		    	edge1.geometry.relative = true;
			   	edge1.edge = true;
		    	cardCell.insertEdge(edge1, true);
		    	cardCell2.insertEdge(edge1, false);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 160, 60, 'Control Flow');
			}),
			this.addDataEntry(dt + 'control flow', 160, 60, 'Control Flow',
				'zVNNb4MwDP01ufNR7d7Srqed+AUpsUi0ECMTCu2vnyEZDGnVusu0QyT72c/4PRKRF814JtnqN1RgRX4SeUGIPkTNWIC1IkuMEvlRZFnCR2SvD6rpXE1aSeD8M4QsEK7S9hCQAHT+ZiPQadlOIUHFIw/aN7zlMeWQsHcKVMwGbTyUraym5oEVMRanA3kYH244Q3G9M2ADnm7cMhjldeh4CSISDabWkbWLmOxCXi/MVS4HUfH36vP/q/6TkESZf+DG7mc3QNVQxhTsBYfTCnz1Zq5xrJHMHZ2XdgKd2hPNOLbgGLHyAvYgq/d6NrNAi8RVh26ap2SnF3+ZXJr79N00W6yd1tkY22FPFWyutpdUg9/87yfsJ7DSm+t2+i/M5XR9xHNt88Y/AA=='),
			this.addDataEntry(dt + 'object flow', 260, 60, 'Object Flow',
				'3ZVNb8IwDIZ/Te4lZdxHYZw49bBzaKwmIo0rN1Dg189tM1g10JDQkLZDJft1X8d5+hGRZtVhRao2a9TgRLoUaUaIYYiqQwbOCZlYLdKFkDLhS8i3G9VJX01qReDDPQY5GPbK7WBQBqEJRxeFxqi6CwkKbjk3oeIpFxMOCXdeg45ZEwi38G51MKxIVlpjA+S1Kjp7y3tkLa4HFOBwc+ZeigOvACsIdORb2tibq7NhW4kBW5romkZNNUNenp0XABxEBtd5pI/w+H0Cn4YkbvUJRKZ/6Q2JBvlEPi8/8wFdQh5TcBtslxfhK62+xrFBsif0QblO9PqVqNexBs+KUxtwc1Vsyx5vhg6Jqx49XIXMHXJ76hafyDPfbqYR3QZ3VMDorxAUlRBGH8Ydz4DAqWD34+6PEJ79Q8Lpd8LTpxHm9HLC9LXRAfQB'),
						
			this.addEntry(dt + 'object flow', function()
		    {
			   	var cardCell = new mxCell('', new mxGeometry(0, 0, 60, 40), s + 'objFlowR;strokeWidth=2;whiteSpace=wrap;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('', new mxGeometry(140, 0, 60, 40), s + 'objFlowL;strokeWidth=2;whiteSpace=wrap;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;endArrow=open;labelBackgroundColor=none;strokeWidth=2;endSize=12;');
		    	edge1.geometry.relative = true;
			   	edge1.edge = true;
		    	cardCell.insertEdge(edge1, true);
		    	cardCell2.insertEdge(edge1, false);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 200, 60, 'Object Flow');
			}),
	
		   	this.createVertexTemplateEntry(s + 'objFlowR;whiteSpace=wrap;', 
		   			120, 60, '', 'Object Flow', null, null, this.getTagsForStencil(gn, 'objFlowR', dt + 'object flow').join(' ')),
		    this.createVertexTemplateEntry(s + 'objFlowL;whiteSpace=wrap;', 
		    		120, 60, '', 'Object Flow', null, null, this.getTagsForStencil(gn, 'objFlowL', dt + 'object flow').join(' ')),
			this.addDataEntry(dt + 'probability', 350, 80, 'Probability',
				'7ZXbboMwDIafhnsKZb3uabvZpEp9ggAeiRZiFExPTz+H0FK2Vuu0TdvFLpCc3wdsf0EE8bzcPVhRySfMQQfxMojnFpG8Ve7moHUQhSoP4kUQRSE/QXR/xTtqvWElLBi6JSHyCRuhG/CKF2ra606opaicaSWWaVMH8UxSyY0uRmxupSJYVyJzEVseg7UNWFKZ0I8iBb3CWpFCw+4UibA8C5hqVZjSd0roUrtu2A+7qxO1UjfOA2AJZPccckxIEp+y9+exX0C4VTnJoSRBFZKGmqj9uTgV7rfHRrfAy8uMP14m5AWsuyPoFLfLXjjfa+tjW6JVBzQk2DETbl+OhG97uMfzBYPJp9a2BQwaV9piY3JwfYZ80o7MTGQvRavPUaPtY2sSlo75WIE5amt1cH2PohMpN86AU42NzWBwt25AZ0ELUpthqUskutQVKq7YI58kwxRutgDqot7wO732JqTj90gnMzeUxVSkSity/bceH7SuIFPPTKW99OyaLL58CY6cb0TeIfsMcs7+q3DjJBx8z3fhT7FO/ln/FuvvZsvH/h/qw89/sa8='),
			this.addDataEntry(dt + 'probability', 250, 60, 'Probability',
				'7VRNb4MwDP01uVYU1vVc6NrTpGlctmMAF7IFjEJaYL9+Dkk/aJlU7bTDkBD284t5PIewICq7reJ18YwZSBY8sSBSiNpGZReBlMz3RMaCNfN9j27mb36ozoeqV3MFlb5ngW8XHLjcg0VWqRZYWbjRvXRwoUsSt56zIGwKXhu07HKje9b0TSlnmHxsJLavRGgLoSGueWpYLXEI41LkFaUpCQNFgHsxKA3dj+IHyCnfApagVU+UVmS6cIxH+4FeASIv3LIjxhub56elZysocG5MOxPcOMOWoZGnMOGJkEIbJUPFkuIaUrETKbf+eWy5vnERshxil1ZY0SO8MPbGI+MONZQrV0hQayypAFW2UgpbwrCGyiKx+DJ9575JO6HfXFsTv1PszRaU7YSUEUpUg6JgN1yES56ADHn6mSvcV9mR4lTaLzHyR7NqcK9SGG2lO8Y3nrcCSZYdxo2nJucavaCg/qcu/uJq2JqrHLRjXc37JOKuLfDwB7eAxvp//pPz76f//V9vB0rP57ClXx7T3w=='),
			this.addDataEntry(dt + 'probability', 250, 60, 'Probability',
				'3VRNb4MwDP01XCcK23ou7dbTPiQu2zGAC9lCjIJb6H79HJK2o2ulqqdpSAj72THPfoYgntf90oimesICVBA/BPHcIJKz6n4OSgVRKIsgXgRRFPIdRI9nopMhGjbCgKZLDkTuwEaoNTjkJfuAnBh7Zj4u2tJW+WhbicaaxubESVdJgrQRucU67oIxoWSp2c2ZAhgG/CvAEPRnaQ6Q57gErIHMllM6WVDlM+5dK2EFsqz8sR0mWueX+6OHptnwfZ+eQfxrBsE0sfQMZiKTSpJlMkRcUtpALlcyFyRR29B08WtQUJSQelej5kdSUc0UFpNTM7LT4YJq5gMZEmHNAdDFzBjsGMMGtENS+WXrTiLr9pLefFlrv7Md3sTsraRSc1RoBkbxargYVyIDlYj8szS41sUuxbN0nVj6I61aXJscRktzgXxjvQ0oHtlmXPiUcr7QK0pNhyrR3ZHYJEwJ5LOO9N6TuGgFbv/gChA21+s//c/6b09/+1evA7uHP65L//lD/gY='),
			    
			this.createEdgeTemplateEntry('edgeStyle=none;html=1;endArrow=open;endSize=12;verticalAlign=top;labelBackgroundColor=none;', 160, 0, 
					'{ rate = constant }\n{rate = distribution}\n&lt;&lt;continuous&gt;&gt;\n&lt;&lt;discrete&gt;&gt;', 
					'Rate', null, null, this.getTagsForStencil(gn, '', dt + 'rate').join(' ')),
			this.addDataEntry(dt + 'in block definition diagram activity association', 400, 250, 'In Block Definition Diagrams, Activity, Association',
				'7ZZNc5swEIZ/jY7NgGSTXBM7yaW91JlprwI2oFgfjJA/6K/vCoQNxe64044znfbgGfbdXSQ9i98RYQu1f7a8Kj+ZHCRhj4QtrDGue1L7BUhJaCRywpaE0gh/hD6dycZtNqq4Be0uaaBdw5bLDXRKmuedVrtGBq10Cne2jAl7qEteeVXtC7/pm7qplbypeLbmBeoPkqcgv2LBbI4Rl6LQGEh4db4Z64QuPrbR0hdswTqRcXkfCp2pjnUvPlh+YKi8Gu1WYUPtNpw1a/giclcGxUK2sbXYwmeoxTdfF6EajoerwP4solYKfJ7BKHC2wZJdeDtmGeswRiWIogxtdB5EXndCceg9EseHAP30ANhkAIQmXHkK0rUHGEY8c2IrXHNQi1FNHxHK4mhUHmmuYDLXfpjIzncOxrwrhYMVjsGndzjpwTAzBAf2Urj0NNzQ0HNtunAWwgH6mJ5An/wB8rP/5Afk4+SK6OcT9J6X0QOAJ6mBzu+tNTuMtNEwBgd5Ab1FhCzWPwm/i9YLaset6/tzwZXR+UspdJ8KpXEfrzobienUyH60rdQ4Z9RhMH4rPx8LHstsbAYjE8BFC3CDr/Ps8MJrLUiO39l4rd8ZTPJv/yfiu/ezo9tfQp9Kk60v5B5q/xboV3Wiuwl1k755FAMnwnvZFYzp/dwnmbrP7TXcB8PjRbfNje7B3wE='),
		    	
			this.createVertexTemplateEntry(s + 'actPart;strokeWidth=3;verticalAlign=top;rotation=-90;whiteSpace=wrap;', 
					100, 100, 'Partition Name', 'Activity Partition', null, null, this.getTagsForStencil(gn, 'actPart', dt + 'activity partition').join(' ')),
			this.createVertexTemplateEntry('shape=rect;html=1;rounded=1;strokeWidth=2;verticalAlign=top;whiteSpace=wrap;align=center;', 
					140, 50, '(Partition Name)\nAction', 'Activity Partition', null, null, this.getTagsForStencil(gn, '', dt + 'activity partition').join(' ')),
		    
		    this.addEntry(dt + 'interruptible activity region', function()
		    {
		    	var cardCell = new mxCell('region name', new mxGeometry(0, 0, 160, 60), 'shape=rect;html=1;rounded=1;verticalAlign=top;dashed=1;strokeWidth=2;whiteSpace=wrap;align=center;');
		    	cardCell.vertex = true;
		    	var assoc1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'shape=mxgraph.lean_mapping.electronic_info_flow_edge;html=1;edgeStyle=none;align=center;verticalAlign=bottom;exitX=1;exitY=0.5;fillColor=#ffffff;');
		    	assoc1.geometry.setTerminalPoint(new mxPoint(250, 30), false);
		    	assoc1.geometry.relative = true;
		    	assoc1.geometry.x = 1;
		    	assoc1.edge = true;
		    	cardCell.insertEdge(assoc1, true);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, assoc1], 250, 60, 'Interruptible Activity Region');
			}),
			    
		    this.createVertexTemplateEntry('shape=rect;html=1;rounded=1;dashed=1;strokeWidth=2;verticalAlign=top;whiteSpace=wrap;align=center;', 
		    		160, 60, '&lt;&lt;structured&gt;&gt; node name', 'Structured Activity Node', null, null, this.getTagsForStencil(gn, '', dt + 'structured activity node').join(' '))
		];
		
		this.addPalette('sysmlActivities', 'SysML / Activities', expand || false, mxUtils.bind(this, function(content)
		{
			for (var i = 0; i < fns.length; i++)
			{
				content.appendChild(fns[i](content));
			}
		}));
	};

	Sidebar.prototype.addSysMLInteractionsPalette = function(expand)
	{
		var s = 'html=1;shape=mxgraph.sysml.';
		var gn = '';
		var dt = 'sysml interaction ';
		var sb = this;
		
		var fns = [
		    this.createVertexTemplateEntry(s + 'package;overflow=fill;labelX=95;align=left;spacingLeft=5;verticalAlign=top;spacingTop=-3;', 160, 80, 
		    		'<p style="margin:0px;margin-top:4px;margin-left:5px;text-align:left;"><b>sd</b>  Interaction1</p>', 
		    		'Sequence Diagram', null, null, this.getTagsForStencil(gn, 'package', dt + 'sequence diagram').join(' ')),

		    this.addEntry(dt + 'lifeline', function()
		    {
		    	var cardCell = new mxCell('b1:Block1', new mxGeometry(0, 0, 160, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
		    	cardCell.vertex = true;
		    	var assoc1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'edgeStyle=none;html=1;dashed=1;endArrow=none;align=center;verticalAlign=bottom;exitX=0.5;exitY=1;');
		    	assoc1.geometry.setTerminalPoint(new mxPoint(80, 150), false);
		    	assoc1.geometry.relative = true;
		    	assoc1.geometry.x = 1;
		    	assoc1.edge = true;
		    	cardCell.insertEdge(assoc1, true);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, assoc1], 160, 150, 'Lifeline');
			}),
			this.addDataEntry(dt + 'execution specification', 160, 220, 'Execution Specification',
				'xZTbboMwDIafJveU7NDbQrdeTZrUJ8iIR6IFgkJa6NvPJS40W6sxddKQkOLTj/1hhfG86jdONOrFSjCMPzGeO2t9OFV9DsawNNGS8TVL0wRflj5fiS6GaNIIB7WfU5CGgr0wOwietwXjq8zY4oPEWn8wFGuVaI5HBwWqZ8pX2PAaC7JOaQ/bRhTHcIfjoE8YXdZoFtgLOHTQt8B56K/2O7io2Q3YCrw7YEqnpVeU8RBmShToUlHZySfaYJdj6TQ9HgjAZRj8G4xfEHjXxuTWWDckchieG4emgkea7UDJCdlnTNILSJZ/gOTuZyQgS9iSWdsaYixStAokGVDLlXO2mzKD2lEiYtPanSsgWlEvXAk++lEzCDowwut9rH4LkPv/BzJ/+njhZrMgoVerUX9UWcZbOK7cSSH8ICr6AnTs6RJjNKcLL6Sf34ef'),
			this.addDataEntry(dt + 'execution specification', 160, 220, 'Execution Specification',
				'zZTNbsIwDMefJvfSbBNXKBsnpEl9giyxmmhpU6WBlrefIaaQUaRKm7QdKsVf/9q/WGG8qIetF63eOQWW8VfGC+9ciKd6KMBalmdGMb5heZ7hx/K3B9HFOZq1wkMT5hTkseAg7B6i52PB+GptnfwksS4cLcU6LdrT0YNE9bUONTa8wYJ1r02AshXyFO5xHPQJa6oGTYm9gEcH/Qt8gOFhv2cXNbsFV0PwR0zpjQqaMl7iTJkGU2kqu/hEF+1qLL1OjwcCMA2D38GAAWTZgvxPJKiALjY7UnJG9i2ofALU8hdAPd2BugMEqoKSzMY1kEJSotOgyIBGrbx3/TUzqp0kEjid23sJyeIG4SsIyfXNQOjBimAOqfpPgDz/PZD506cbN5sFCb07g/qjyjJdw3EtLwrxgqjoG9CxpynGaF6fwZh++0p+AQ=='),
			    
		    this.addEntry(dt + 'use', function()
		    {
		    	var cardCell = new mxCell('Interaction3', new mxGeometry(0, 0, 160, 60), s + 'package;labelX=40;whiteSpace=wrap;align=center;');
		    	cardCell.vertex = true;
		    	var label1 = new mxCell('ref', new mxGeometry(0, 0, 0, 0), 'html=1;align=left;verticalAlign=top;labelPosition=left;verticalLabelPosition=top;labelBackgroundColor=none;spacingLeft=5;spacingTop=-2;fontStyle=1;');
		    	label1.geometry.relative = false;
		    	label1.setConnectable(false);
		    	label1.vertex = true;
		    	cardCell.insert(label1);
			    
			   	return sb.createVertexTemplateFromCells([cardCell], cardCell.geometry.width, cardCell.geometry.height, 'Interaction Use');
			}),
			this.addDataEntry(dt + 'combined fragment', 350, 320, 'Combined Fragment',
				'1ZhRb9owEIB/TR6Z4pjQ9pHAVk3apGmdtL2a5EiiOnHmmAL79btghyQYSsTCSiUQ8fnuHH/nO9s4dJZtHiUrkq8iAu7Qjw6dSSGUfso2M+Dc8dw0cujc8TwXv4736UQv2fW6BZOQqz4GnjZ4YXwFWuJ4E46mQYHiUm25Fk9+r6pXCjIm4zR36NQtNvvmSIkCReO2iMMS9adE6ynYqBHjaVyZ6q6gcYpPsfndDb2oBWVUi3AGi0bN1Z/PuQLJQpWKnLQUi0bR60zCS1SGhOekcp2wopJmm7iC/6Hclhn/ULDwmcUoDzhbAP9VKbsuNluW4gXkkos1NpcpwkRfSopn+JlGKjE6EsKVLNMX+A5l+qcax92/D5ojjpPx2olMsB5BZKDkFlXWxjv2Ul/H1E0gjRNjRk2gXVZqQby3bcKPD2YFHF8N1FoNC5zNFEUBF+EzsYDWFHG+qktpnaQKnpBn1b1GxCgzC2AeQhW4vkC840CMATXT3urm2DRbuO6P0RoA1tiG5bVgeTcIi4zfjJZv06ItWvQGaXn+m9GaWLQYVrchyhn1sbUUuXoyfkiLnqnMFbU0ZHxqxLvyHpToLc3jLzudud9IflTd8xEdiHoX+oMN3XOPUCeTAbDfHdkND5hDHk2l3FX/XOTQXZkQxVBzNb0RKxOITL/2Vmm9DgdHFCsZQqsq27wkcKZwi+m4OjZ7Y/pNpDjInvNdlzN1D/gp3MdBGaMDhPu36EX1/iapjq9Cldz/N6wPN4nVvwrWfRm4Plbi3gjX4SF2GZK7fgxtP+cc6fUwSDCIHQw/SJe7l6leoz70uxg2f/5aoEQB+dlAHe58C6GUyOr9M8DtNJZilUczwYVszHCYJ33MJ94/RdgQHhmLYUs88fvF6WxRsxwNmH32hTQrY/viUZ9YpD4BtMN6YQz1EKHIczxwskU9UF0NzlzaTtzauha9w9n3vELsCxumB/AS3jAZDkPzPpLDOrZfmhyWowGTw75yYnLY29OtJceJA+y1k8O+ciIt+6L53vaIgdf9w4Xr/vBIZjm6eN1js/kDVKu3/x/9Cw=='),
			this.addDataEntry(dt + 'state invariant configuration', 120, 220, 'State Invariant / Continuations',
				'xVTLboMwEPwaXyMCpfeEtDlFqpRTjxbeYksGI9sJ8Pdd4gVCHhJSpfSAvM9hZ7wyS7Ky3Vtey4MRoFnywZLMGuODVbYZaM3iSAmW7FgcR/ix+PNJdn3JRjW3UPklDXFoOHN9ghBhyeY7BJ3vNAWd5HVvWsgRdit9iZPu1mg2Unk41jzv0w3ywBjXqqjQzXEIsBign4D10D4d9BKiKfdgSvC2w5JGCS+pgshEElQhqS2lGHfBL8bWiTYaxPyxCsmdCnV/IMP0Toor7oMqZVv0F7hynSv1Kjc9o+0PHkdqe4lQHWUjEuQVwr3dr8+tXiAKGHSoTAXz9RHcSRDkQCU21ppmqgxoPcRMDWdONofZBntuC/Cz61ygmQXNvTrP0f8iSPr/gixnP1+xxVoQ0JdRiD+ivNM60RoOD8+IEC6Imm4EHWd6pDG603sYyq+fy18='),
			this.addDataEntry(dt + 'coregion', 250, 220, 'Coregion',
				'1ZZbb4IwFIB/TV8NUJjuUXHzackSH/bcwRk0K5S09bZfv0ILCmjmJmpmYtJz5ZzvlFKEw2y7EKRIX3gMDOEnhEPBuTKrbBsCY8hzaIzwHHmeo//Iez5hdSurUxABuTonwDMBa8JWYDQSBbMVCuYIT2fGKNWO1caUFOVSQKTTz1KV6Yrnrl5uUqpgWZCoNG90P1pHGE1yLUa6GBBaYR8GQsH2ZMGVyla7AJ6BEjvtsqGxSq2HY5pyUqBJasMCqyPSyEkTum9fLyyB4zRwj0aPwEHLNYxsm5TzG8mdzNgo4gISyvPSQQn+CW+2cHwhABvg2z53HRYHfLwjeMYD4PF/xlMz0YG0kNDeIx+UsZAzLipf7FS/gahM2lTcSY+K34fiX84k+D9M/FsxefiZCcQJLK2Y87wDJSYyhdgKkMdTIfhm72mylSlaZCRfiQha55oiIoF2Y2fwE8CIout29kuAjO8PxO8DCe4HZHJ/IFfo3oa+cqozNq9h0D6wm9O5zmBGYoM6CJsqzqL62KOa4WG5Sl2sqnW8gPIrV55RNCJsar/271wpntXOS/pVPsn1frVNrz+V7ljc643FdfpzGXi/X30uN3tbenPp3uv+PBct7u/Vxv3w2v0N'),
			this.addDataEntry(dt + 'creation destruction event', 250, 220, 'Creation/Destruction Event',
				'1Zdtb4MgEIB/jd8VtNs+tt3LlzVZ0l9A9aZkKAZZbffrh4J2SJfZ9W0zacLdcVfuOTzEw/N88yRImS14AszDDx6eC86lHuWbOTDmIZ8mHr73EPLVz0OP31iD1uqXREAhxzgg7bAm7B20ZhV4eDpjPH4zwSq5ZcZWZaRshgJiFX2WyVwt+F45zOqMSliWJG7MtUpH6QijaaHEWK0FhFKY/wIhYfPteluVWewT8Byk2KopNU1kZmb4Oic/A5pmxg0bHam0nPauu+zVwADYDwO7MFAHA/0lGJ1DZJLeajk04iVYhQ6rnwC9UsbmnHHRWjG0jw3uFEzubCY3LhO0B0nP6Rgm0XgmypGWFbhY/PY5OZbw1qISYYdK6EIJj0cy+TdIgk4+O5Obn5lAksLSiAUvGigJqTJITPpQJFMheL0zO2yaEBaZir+LGKy2L4lIQVqbdwQ/AYxIurajHwPk9vpAIhfI5HpA7q4P5AzZG9cXTlXE/jUcnGF9d+4i6JIYpwHCfhWjqAa+gzUWQCSMgfuFJy9BneSzpvnQmLCpOdlXXEqe66lL+tH4BugUGxFfqhTDWgRnrEVw2BYHtuL1w06xpx7tFCV2dTm2EhO3EuHVKhGdrxLuFeDA96HaVovnjYW7SczuR4exvxxof9B+ht+BvwatxN01Tk//esv7BA=='),
			this.addDataEntry(dt + 'duration constraint', 250, 250, 'Duration Constraint',
				'zZbNjpswEMefxpdKQXwsjXoMod1DVW2ltA/g4hFYMhjZzibp03ccuwnBREFbVO0himfsGWZ+/5GBZNv2+Kxo33yTDATJPpNsq6Q0btUetyAESWPOSFaSNI3xR9Ivd3aT827cUwWdmROQuoBXKvbgPCTb/NSgnF+bk/B+3dDeLhVUmLloTIvFlgkuDw03sOtpZbcP2Ar6qOB1h2aFdWCyrPDPAWXgeLfWs8sX+gyyBaNOeOTAmWn8idj1EzfA68aH5d5HtbPrS+i1c1z45qdBZCGIdcGiKPvAyLoMaAza/wumPdZWxkifdCsixlvoNJcIoVDSUHNelqtPMTosBl5RsfGUjLTMNCLkXf3DGuUq/xdiPmDl1Y9PI3qPiD4tQPQpJDqmCKyGnTc72eFfwahugHm00LGNUvJw3R5wd9lsihs6Wu5VBTfTPQOYAoESvd6mmureh36XHDNeQOe3nIOJNFTVYHzQCOGlillU84DqFu8N9Nh9tldu0GaAHpAcYJY9dBMD+ksaI1t3dMd/2zRJel+D/w58PeLthiDgHaR5lGc53T6GulHFXva2GLxp4ihKsqmLZjHl/O1SeLvM36+ayUwZHsoZJLozF2/Qcx3o+fJ1cfEm3gvvWLY0Xkq28evnzbKhef2WcseHn1p/AA=='),
			this.addDataEntry(dt + 'duration constraint', 250, 200, 'Time Constraint',
				'3ZbbUoMwEIafJpcyHFq5LqC9cJw6U18gJStkDIQJoQef3kBiQZFprVSrF0yzm/13tv9HMiAvzLZzgYv0nhNgyLtBXig4l3qVbUNgDLk2JciLkOva6kHu7cCu0+zaBRaQy2MErhasMatAZ3SilDtmEkASWJow57n6CVKZqUkjRy0JLlMgJoCczITgm7ZSd6tbDA7YpMx0c+AZSLFTJQIYlnT9XodLHSb7ur30gVPV0bW35o/Z7xUlr0QMpqhryIBu9xZ+6COxSED2+qhFZ/o21dj9ufXev7XeO9V778fMn/TMD7Egi6qeBvmBbVmOh/zoi0Q6EHgBucqsQUgaYzZjNFFxtOJS8kxtlAWOaZ4EJo6mWr6kL3Vrx72Es2MwOJPjMBzk2Ws08GKcwHPa47m4Gx2e5EVL7rEOLhqbPxY252zYrvt3oB9Iy1J9g++dP7OJDTpBk1SZHzC8Ahbg+DkRvMpJyBkXY1yZxroro/htkkPC8cj5PXKy8XEzGjIGT3+I2KGr7ujDNz3XnanC9rtSl3c/O18B'),
			this.addDataEntry(dt + 'message', 250, 250, 'Message',
				'zZbfboIwFMafhmS7gzJ1t4LTqyVLeIIKJ9CsUFKqyJ5+B1tUQDNHCHpB6L/zcc7vowXL9dPDRtI8+RQRcMv9sFxfCqF0Kz34wLlFbBZZ7soixMbLIusbs85x1s6phEzdE0B0wJ7yHeiRrWO5S4+L8NuIFariZq5IaF43JYSo7iUqxYRXGOCVCVMQ5DSsp0ssB8coZ3GG3RBzAYkD5lkgFRxu5nscMsluQKSgZIVLShapxKywdU12AixOTJhrxmih+/Ep9Fw9NgyA6zDcPgzSwCDPBKMJmJmip4Dz1oPTIwJRDIHpZiLDmxfRIoHIcLlABFm0lFKU55VarZZo0SjETobQelnvACSBU8X2balr1ZvQL8FQ8QS24VqZ5846/BSVMSgT1EF4yuIuqrPHU3WnokrsybDOe1hpUWVhgHuQ8nsIX4cqcsA97NWbloWUL82e3gqlRKqXBuynlnHIbfiTv7+LDmftfo/zn4Z1dcbza9Hzq7bLp5y/IC2avg73bFuf3v8wDbtrxhuhZ7HQmY/kYU9oPBPfB51lo+y0tmmt4/FhDvaOO3ughd2vUVdnsIPYPf9p6uWXP6K/'),
			    
			this.createEdgeTemplateEntry('edgeStyle=none;html=1;endArrow=sysMLLost;endSize=12;verticalAlign=bottom;', 
					160, 0, 'lost', 'Lost Message', null, this.getTagsForStencil(gn, '', dt + 'lost message').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=none;html=1;endArrow=open;endSize=12;verticalAlign=bottom;startArrow=sysMLFound;startSize=12;', 
					160, 0, 'found', 'Found Message', null, this.getTagsForStencil(gn, '', dt + 'found message').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=none;html=1;endArrow=none;verticalAlign=bottom;dashed=1;strokeWidth=2;', 
					160, 0, '', 'General Ordering', null, this.getTagsForStencil(gn, '', dt + 'general ordering').join(' '))
		];
		
		this.addPalette('sysmlInteractions', 'SysML / Interactions', expand || false, mxUtils.bind(this, function(content)
		{
			for (var i = 0; i < fns.length; i++)
			{
				content.appendChild(fns[i](content));
			}
		}));
	};

	Sidebar.prototype.addSysMLStateMachinesPalette = function(expand)
	{
		var s = 'shape=mxgraph.sysml.';
		var gn = '';
		var dt = 'sysml state machine ';
		var sb = this;
		
		var fns = [
			this.addDataEntry(dt + 'choice pseudo state', 150, 100, 'Choice Pseudo State',
				'zZXbcoIwEIafJvcctPeC1ulFZ5zxCYLZQqaBZUJQ9OmbkKCgMqVjnfaCmd1/k+zyfxxIGOfNWtIye0cGgoQrEsYSUdkob2IQggQeZyRckiDw9EWC15Gq31a9kkoo1JQNgd2wp6IGq1ihUkfhhCqjpQllhnlSVySMMpXrQZe+DgVNQGyw4opjYRbxNNONIyp4anIBHybdg1R8R8XCyTlnTJ9ve+saNKPzt5Ibfg2Yg5JHveTo5re35x04U5mVZk7KwM7S12hl8/R80MUbHTh77lsVfm8VsBS2LgWR4GF1EfqutTUdZyj5CQtFRc+yzsJrzxJUCnNdkFgXDMxUXkcgorvPtNVjFCh1qcDCNIWCLaRsm2EJhVW2/GQm9LWvkb0HM/iAgKIyBTV4RiZAkSCo4vvhUfc8d1s3yPWJgdcMYXY7KqzlDtyiK1DnrpPYzW7ZzaM3RoIXYaw2ZnhkvnwYaMfsDs5bEj/kOIGaNeyPqLk30veuKNpH6TcozkcppsbhpyF0H7HHCI6+zv8YrT9/FludXn5ydnn/H/gF'),
			this.addDataEntry(dt + 'composite state', 220, 190, 'Composite State',
				'zZXbbqMwEIafhsutACc9XDak25uuVG1X2msXJmDVMMienPr0HRunCQ20lTZbFQnJ888B+2NsRyKrN7dGttUvLEBH4iYSmUGkblRvMtA6SmNVRGIepWnMb5T+HPEm3hu30kBDn0lIu4SV1EvolAzrFq0ieCBJEApa2urgt5Vs3bDelG7WZ3Zra32Wc5ZPiMRMalU2HKFhwXOYrcCQyqW+DjJhy6ptZa6a8o8z5j/EXrnzWfPk0klk8An+qoIqJ7FiIF8aq1bwG6x6dvOIWQ2L4A/BZhSElwKFW8AayGw5ZB2qOxgBVlyBKqtd2lUQpe2E8jV3z5UHAe0wZnGEeZQrJ6rWOo4V1Tose6G0zlCj8bEi9s8B2zv5CPre/TaFjvEjEmHNAdo5ZjJ/Kg0um+KgxsI/o//nU0jTYaQhYUdz25nTYB4CH+CdngD35Aj3B83MbUV94h4XFMFaV25DcIO64DX3/UGb54wDzGmQXfaRnR8jS+IBZpMTMJsOMxtv1G/KLBFfCO38430NRclHaWc22LzZ2NAU18bgmk1soemUh+5kS9JXQK7I+3j4m7g0OfTOG5KmhN1yhyEa0JL4PO1V/xckF98UyeQYyfT/IGFzf4F7X+9+fwE='),
			    
		    this.createVertexTemplateEntry(s + 'compState;html=1;align=left;verticalAlign=top;spacingTop=-3;spacingLeft=18;', 
		    		200, 160, 'CompositeState1', 'Composite State', null, null, this.getTagsForStencil(gn, 'compState', dt + 'composite state').join(' ')),
		    this.createVertexTemplateEntry('ellipse;html=1;labelPosition=left;verticalLabelPosition=bottom;spacingBottom=10;align=right;verticalAlign=bottom;resizable=0;', 
		    		20, 20, 'again', 'Entry Point', null, null, this.getTagsForStencil(gn, 'compState', dt + 'entry point').join(' ')),

		    this.addEntry(dt + 'exit point', function()
		    {
			    var cardCell = new mxCell('aborted', new mxGeometry(0, 10, 20, 20), s + 'flowFinal;labelPosition=right;verticalLabelPosition=top;spacingTop=5;spacingLeft=3;align=left;verticalAlign=top;resizable=0;');
		    	cardCell.vertex = true;
			    
			   	return sb.createVertexTemplateFromCells([cardCell], cardCell.geometry.width, cardCell.geometry.height, 'Exit Point');
			}),
		    
		    this.createVertexTemplateEntry(s + 'actFinal;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;', 
		    		40, 40, '', 'Final State', null, null, this.getTagsForStencil(gn, 'actFinal', dt + 'final state').join(' ')),
		    this.createVertexTemplateEntry('shape=ellipse;html=1;fontSize=18;align=center;', 
		    		40, 40, 'H*', 'History, Deep Pseudo State', null, null, this.getTagsForStencil(gn, '', dt + 'history deep pseudo state').join(' ')),
		    this.createVertexTemplateEntry('shape=ellipse;html=1;fontSize=18;align=center;', 
		    		40, 40, 'H', 'History, Shallow Pseudo State', null, null, this.getTagsForStencil(gn, '', dt + 'history shallow pseudo state').join(' ')),
		    this.createVertexTemplateEntry('shape=ellipse;html=1;fillColor=#000000;fontSize=18;fontColor=#ffffff;', 
		    		40, 40, '', 'Initial Pseudo State', null, null, this.getTagsForStencil(gn, '', dt + 'initial pseudo state').join(' ')),
		    this.createVertexTemplateEntry('shape=ellipse;html=1;fillColor=#000000;fontSize=18;fontColor=#ffffff;', 
		    		40, 40, '', 'Junction Pseudo State', null, null, this.getTagsForStencil(gn, '', dt + 'junction pseudo state').join(' ')),
		    this.createVertexTemplateEntry(s + 'accEvent;flipH=1;whiteSpace=wrap;align=center;', 
		    		140, 40, 'Req(Id)', 'Receive Signal Action', null, null, this.getTagsForStencil(gn, 'accEvent', dt + 'receive signal action').join(' ')),
		    this.createVertexTemplateEntry(s + 'sendSigAct;whiteSpace=wrap;align=center;', 
		    		140, 40, 'TurnOn', 'Send Signal Action', null, null, this.getTagsForStencil(gn, 'sendSigAct', dt + 'send signal action').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;whiteSpace=wrap;align=center;', 
		    		140, 40, 'MinorReq := Id;', 'Action', null, null, this.getTagsForStencil(gn, '', dt + 'action').join(' ')),
		    this.createVertexTemplateEntry(s + 'region;align=left;verticalAlign=top;spacingTop=-3;spacingLeft=25;', 
		    		200, 160, 'S', 'Region', null, null, this.getTagsForStencil(gn, '', dt + 'region').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;rounded=1;html=1;whiteSpace=wrap;align=center;', 
		    		100, 40, 'State1', 'Simple State', null, null, this.getTagsForStencil(gn, '', dt + 'simple state').join(' ')),

		    this.createVertexTemplateEntry(s + 'simpleState;html=1;overflow=fill;whiteSpace=wrap;align=center;', 200, 100, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'State2<hr/></p>' +
					'<p style="margin:0px;margin-left:8px;text-align:left;">entry / entryActivity<br/>do / doActivity<br/>exit / exitActivity</p>',
		    		'Simple State', null, null, this.getTagsForStencil(gn, 'simpleState', dt + 'simple state').join(' ')),

		    this.createVertexTemplateEntry('shape=rect;rounded=1;html=1;whiteSpace=wrap;align=center;', 
		    		120, 40, 'State1, State2', 'State List', null, null, this.getTagsForStencil(gn, '', dt + 'state list').join(' ')),
		    
		    this.addEntry(dt + 'state machine', function()
		    {
		    	var cardCell = new mxCell('ReadAmountSM', new mxGeometry(0, 0, 160, 120), s + 'stateMachine;verticalAlign=top;whiteSpace=wrap;align=center;');
		    	cardCell.vertex = true;
		    	var label1 = new mxCell('aborted', new mxGeometry(160, 60, 0, 0), 'resizable=0;html=1;verticalAlign=top;align=left;labelBackgroundColor=none;spacingLeft=5;spacingTop=-2;');
		    	label1.geometry.relative = false;
		    	label1.setConnectable(false);
		    	label1.vertex = true;
		    	cardCell.insert(label1);
			    
			   	return sb.createVertexTemplateFromCells([cardCell], cardCell.geometry.width, cardCell.geometry.height, 'State Machine');
			}),
			    
		    this.createVertexTemplateEntry(s + 'x;', 
		    		40, 40, '', 'Terminate Node', null, null, this.getTagsForStencil(gn, 'x', dt + 'terminate node').join(' ')),
		    
		    this.addEntry(dt + 'submachine state', function()
		    {
		    	var cardCell = new mxCell('ReadAmount :\nReadAmountSM', new mxGeometry(0, 0, 160, 120), s + 'submState;whiteSpace=wrap;align=center;');
		    	cardCell.vertex = true;
		    	var label1 = new mxCell('aborted', new mxGeometry(160, 60, 0, 0), 'resizable=0;html=1;verticalAlign=bottom;align=left;labelBackgroundColor=none;spacingLeft=5;spacingBottom=2;');
		    	label1.geometry.relative = false;
		    	label1.setConnectable(false);
		    	label1.vertex = true;
		    	cardCell.insert(label1);
			    
			   	return sb.createVertexTemplateFromCells([cardCell], cardCell.geometry.width, cardCell.geometry.height, 'Submachine State');
			}),
			    
			this.createEdgeTemplateEntry('edgeStyle=none;html=1;endArrow=open;endSize=12;strokeWidth=3;verticalAlign=bottom;', 
					160, 0, 'trigger[guard]/activity', 'Transition', null, this.getTagsForStencil(gn, '', dt + 'transition').join(' '))
		];
		
		this.addPalette('sysmlState Machines', 'SysML / State Machines', expand || false, mxUtils.bind(this, function(content)
		{
			for (var i = 0; i < fns.length; i++)
			{
				content.appendChild(fns[i](content));
			}
		}));
	};

	Sidebar.prototype.addSysMLUseCasesPalette = function(expand)
	{
		var s = 'html=1;shape=mxgraph.sysml.';
		var gn = '';
		var dt = 'sysml use case ';
		var sb = this;
		
		var fns = [
			this.createVertexTemplateEntry('shape=ellipse;html=1;strokeWidth=3;fontStyle=1;whiteSpace=wrap;align=center;', 
					120, 60, 'UseCaseName', 'Use Case', null, null, this.getTagsForStencil(gn, '', dt + 'use case').join(' ')),

			this.addEntry(dt + '', function()
			{
		    	var cardCell = new mxCell('\nextension points\np1, p2', new mxGeometry(0, 0, 160, 80), s + 'useCaseExtPt;whiteSpace=wrap;align=center;');
		    	cardCell.vertex = true;
		    	var label1 = new mxCell('UseCaseName', new mxGeometry(80, 17, 0, 0), 'resizable=0;html=1;verticalAlign=middle;align=center;labelBackgroundColor=none;fontStyle=1;');
		    	label1.geometry.relative = false;
		    	label1.setConnectable(false);
		    	label1.vertex = true;
		    	cardCell.insert(label1);
			    
			   	return sb.createVertexTemplateFromCells([cardCell], cardCell.geometry.width, cardCell.geometry.height, 'Use Case');
			}),
			    
		    this.createVertexTemplateEntry('shape=umlActor;html=1;verticalLabelPosition=bottom;verticalAlign=top;align=center;', 
		    		30, 60, 'ActorName', 'Actor', null, null, this.getTagsForStencil(gn, 'umlActor', dt + '').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;html=1;whiteSpace=wrap;align=center;', 80, 40, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
		    		'&lt;&lt;actor&gt;&gt;<br/>' +
	    			'<b>ActorName</b></p>',
		    		'Actor', null, null, this.getTagsForStencil(gn, '', dt + '').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;verticalAlign=top;fontStyle=1;whiteSpace=wrap;align=center;', 
		    		120, 60, 'SubjectName', 'Subject', null, null, this.getTagsForStencil(gn, '', dt + 'subject').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=none;html=1;endArrow=none;verticalAlign=bottom;', 
					160, 0, '', 'Communication Path', null, this.getTagsForStencil(gn, '', dt + 'communication path').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=none;html=1;endArrow=open;verticalAlign=bottom;dashed=1;labelBackgroundColor=none;', 
					160, 0, '&lt;&lt;include&gt;&gt;', 'Include', null, this.getTagsForStencil(gn, '', dt + 'include').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=none;html=1;startArrow=open;endArrow=none;startSize=12;verticalAlign=bottom;dashed=1;labelBackgroundColor=none;', 
					160, 0, '&lt;&lt;extend&gt;&gt;', 'Extend', null, this.getTagsForStencil(gn, '', dt + 'extend').join(' ')),
			this.addDataEntry(dt + 'extend condition', 250, 80, 'Extend with Condition',
				'tVTLjtswDPwaXQvH2kevsbfdSwsUyKU9KjFrC5VFQ1Y2Tr++pMRknWyyj0MPgcUhh6JmFCld99NjMEP3HRtwSn9Rug6IMa/6qQbnVFnYRukHVZYF/VT59Up2kbLFYAL4+B5CmQlPxm0hIzX6xkaLXuklZdR9tUZ0YDwFMA0BxpGT91R7p0q9KJSuYIrgE0x7o+WtmTvQODV/ZZcx7p3sMnZm4KXHSJ9qtH85WtzyejAb69tv8JtPwIhxtqVxHlyCql1nI6yoiik7ko4wOQaECNNVKRIkOjwC9hDDnkqEIEoVO9vETiAtWAe27aTLjWBmzHF77PSsMy1E6suy6xeyk5qm55O4mI4zj5K8zRFrTyokOtP3IFnIc1dd7B0LTEsWyW6MW0rJGmPEnhIBt74BnpA9dWYNrjKbP23Ca3QYkmGeDaN5liHgjhAcwGdkJS6SyFVjxi71WhzHg6aFj3oTwJlon055l5QX6o90+8pinys+n3kVTWghStH8b3HgHS7PnRCv9BlxGzbwok+y/Tj9u27CzYWbcOYl67aSUOSf2TlzQpIf8fHEJphs/Mm0T7cS/XrdwCzDyUvyHz09eFO87s0Vj9/2hsLnhzeXz9/lfw=='),
			    
			this.createEdgeTemplateEntry('edgeStyle=none;html=1;endArrow=block;endFill=0;endSize=12;verticalAlign=bottom;', 
					160, 0, '', 'Generalization', null, this.getTagsForStencil(gn, '', dt + 'generalization').join(' '))
		];
		
		this.addPalette('sysmlUse Cases', 'SysML / UseCases', expand || false, mxUtils.bind(this, function(content)
		{
			for (var i = 0; i < fns.length; i++)
			{
				content.appendChild(fns[i](content));
			}
		}));
	};

	Sidebar.prototype.addSysMLAllocationsPalette = function(expand)
	{
		var s = 'html=1;shape=mxgraph.sysml.';
		var gn = '';
		var dt = 'sysml allocation ';
		var sb = this;
		
		var fns = [
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;html=1;whiteSpace=wrap;align=center;', 120, 60, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
		    		'&lt;&lt;allocated&gt;&gt;<br/>' +
	    			'<b>Named<br/>Element</b></p>',
		    		'Allocated Stereotype', null, null, this.getTagsForStencil(gn, '', dt + 'allocated stereotype').join(' ')),

		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;strokeWidth=2;whiteSpace=wrap;align=center;', 200, 120, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'<b>BlockName</b></p><hr/>' +
					'<p style="font-size:10px;margin:0px;text-align:center;"><i>allocatedFrom</i></p>' +
					'<p style="margin:0px;margin-left:8px;text-align:left;">&lt;&lt;elementType&gt;&gt; ElementName</p><hr/>' +
					'<p style="font-size:10px;margin:0px;text-align:center;"><i>allocatedTo</i></p>' +
					'<p style="margin:0px;margin-left:8px;text-align:left;">&lt;&lt;elementType&gt;&gt; ElementName</p>',
		    		'Allocation derived properties (Block)', null, null, this.getTagsForStencil(gn, '', dt + 'derived property block').join(' ')),
			this.addDataEntry(dt + 'derived property comment', 270, 140, 'Allocation derived properties (Comment)',
				'xVRNb+MgEP01HCPZOK16rZO2l3Yv6R8g9sRGHQzF5Ku/fgdM7bKJpVZa7R4sz7xhhuHxGFas1OnJCtO+6BqQFQ+sWFmt3WCp0woQGc9kzYo14zyjj/HHmWgeopkRFjr3nQQ+JBwE7mFAGL9FSi0Nwb074wDfvu99S6UStpEdK+4zcxrdhdOGoDzBEHZuAh2c3EKgbHzuECqnqmQ18R/23n4CAlFXwkH9aLX6jNJpthcZ1p9xAoWijkq89ABBETevZwNjIE2KXvYwrPwlFMztMtPsq/7/rdIeZtqEJ5fJ+1YYb3ba0a9snSLhrXMye/nhA/mNt42oZNc8h9ta34QThgtcxwv8kqcPYHeoj+TuJCmsKI+tdLChEr7ekQT+Jb+iZsGOnVEu6WNWwQGK8n0CrcDZMy2JCctB4NlR1q6Noi4i1oJs2ljlLmKiH/xmrDQ9DzLiC7n+WoqL15IwP8OyhcqztdOd28Ro/i8IOsdodslQzq8wtPwLDC2vzJM/aLF639Xg12ephlBsAUtRvTVhyUqjtkGknRcpdPW9tUFhEalF34Y6+UgU1A0kNPV6bytIZp2j+QQuudBvkGkBhZOHtPoPmCJ3muohlgz93w=='),
			this.addDataEntry(dt + 'derived property internal block diagram', 250, 160, 'Allocation derived properties (Internal Block Diagram)',
				'xVVNb8IwDP01OSKVdENcKV+nTdM2aedQTBstIVkaoOzXz2nSQqFssAuHqvaz/XCcZ0risSznhun8SS1BkHhK4rFRynpLlmMQgtCIL0k8IZRG+BA6uxDtV9FIMwNre00B9QVbJjbgEUIHAksTjXBh98LDg6+NaymRzGR8TeJRpMvG7VmlEXqoIAul7THBM5eVYhtgED0woJWFN5NYlohzbyFU+tlA7fTa84nGHe3A6MEaSBzNM5NQRzB5cZqNmD7F8jYtbY2CFjnTzjSQVslW4rVN+miqLZiVUDt0VxznHCeFNeoTPvjS5ghSRHY5t/CmWeoodnjxiIVxTZpxIY/lKROjEKgGfELmfhBb2JiCb+EVCv7tGKOmY8cB5UVdVFAQxRyUBGv2mLIL7E4bj147UQ48y+uyQQBZ4YGsqT3IDI2gtG7VxfdUXVsjL8zYvySSd6msSzfd3a/U2vb89Yz6xydoDnRr97wGmECJMwvLmVHyqDP+/267Zy1ghcHR8LxdH7lxwUGAxGO+7zX8vubR1GeeXJG+53JetV60e71CQfhXjvberXfqePn6Hcs3vH330D18TapY62PzAw=='),
			    
		    this.createVertexTemplateEntry(s + 'simpleState;html=1;overflow=fill;whiteSpace=wrap;align=center;', 200, 100, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'<b>ActivityName</b><hr/></p>' +
					'<p style="font-size:10px;margin:0px;text-align:center;"><i>allocatedTo</i></p>' +
					'<p style="margin:0px;margin-left:8px;text-align:left;">&lt;&lt;elementType&gt;&gt; ElementName</p>',
		    		'Allocation Derived Properties (Activity Diagram)', null, null, this.getTagsForStencil(gn, '', dt + 'derived property activity diagram').join(' ')),
		   	
			this.addEntry(dt + 'activity partition', function()
			{
			   	var cardCell = new mxCell(
			    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
		    			'&lt;&lt;allocate&gt;&gt;<br/>:ElementName<hr/></p>',
			   			new mxGeometry(0, 0, 250, 160), 'shape=rect;html=1;overflow=fill;whiteSpace=wrap;align=center;verticalAlign=top;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('ActionName', new mxGeometry(65, 70, 120, 60), s + 'cont;fontStyle=1;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2], 250, 160, 'Allocation Activity Partition');
			}),
			    
			this.addEntry(dt + 'general', function()
			{
			   	var cardCell = new mxCell('Client',	new mxGeometry(0, 0, 100, 60), 'shape=rect;html=1;fontStyle=1;whiteSpace=wrap;align=center;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('Supplier', new mxGeometry(200, 0, 100, 60), 'shape=rect;html=1;fontStyle=1;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('&lt;&lt;allocate&gt;&gt;', new mxGeometry(0, 0, 0, 0), 'rounded=0;html=1;verticalAlign=top;labelBackgroundColor=none;endArrow=open;dashed=1;endSize=12;');
			   	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cardCell.insertEdge(edge1, true);
			   	cardCell2.insertEdge(edge1, false);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 300, 60, 'Allocation (General)');
			})
		];
		
		this.addPalette('sysmlAllocations', 'SysML / Allocations', expand || false, mxUtils.bind(this, function(content)
		{
			for (var i = 0; i < fns.length; i++)
			{
				content.appendChild(fns[i](content));
			}
		}));
	};

	Sidebar.prototype.addSysMLRequirementsPalette = function(expand)
	{
		var s = 'html=1;shape=mxgraph.sysml.';
		var gn = '';
		var dt = 'sysml requirement ';
		var sb = this;
		
		var fns = [
			this.createVertexTemplateEntry(s + 'package;overflow=fill;labelX=110;strokeWidth=2;align=center;', 160, 80, 
		    		'<p style="margin:0px;margin-top:4px;margin-left:7px;text-align:left;"><b>req</b>  ReqDiagram</p>', 
		    		'Requirement Diagram', null, null, this.getTagsForStencil(gn, 'package', dt + 'diagram').join(' ')),

		    this.createVertexTemplateEntry('shape=rect;overflow=fill;html=1;whiteSpace=wrap;align=center;', 200, 100, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'&lt;&lt;requirement&gt;&gt;<br/><b>Requirement Name</b><hr/></p>' +
					'<p style="margin:0px;margin-left:8px;text-align:left;">text="The system shall do"<br/>Id="62j32."</p>',
		    		'Requirement', null, null, this.getTagsForStencil(gn, 'package', dt + '').join(' ')),
		   	
		    this.createVertexTemplateEntry('shape=rect;overflow=fill;html=1;whiteSpace=wrap;align=center;', 200, 100, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'&lt;&lt;testCase&gt;&gt;<br/><b>TestCaseName</b><hr/></p>',
		    		'Test Case', null, null, this.getTagsForStencil(gn, 'package', dt + 'test case').join(' ')),
			this.addDataEntry(dt + 'containment relationship', 300, 180, 'Requirement Containment Relationship',
				'5ZXfboIwFMafpvdQnNkuB27ezMTEJ6hwQpsVykoR2dPvtBRdjSYmy5zJLkjOn37fob8GSpKs2i81a/hKFSBJ8kKSTCtlxqjaZyAloZEoSLIglEb4EPp6oRu7btQwDbW5RkBHwY7JDsYKoXNWNSRJJRqkYabhoxMaKms+Ncpg2ZQRmsQRhuvxTdyQ1gzSD2k5a2yoIbcCbirc+SLGsOfCwKZhuW33yAVrTIqyxjRHK9BugHtp0Ab2FzfuSn7XS1AVGD3gEi94GrlEvSgM9wLPKuIgSu5d5r7G2jEvD05Hqhh4sOchJ78MOeNCFvE9QR5OiN6C8uwWlOk9UZ4Ej57eX1B/OEP9hJBWXV2AXR+FgCTbgkxZ/l66JZmSCpEsalWjMoW6eNZa9d8qRQkb7wtyq/qXYyF1BWxYlCJnOCNtDdNm8miHdvW2xmGZsljH5kZ8WrOYHk7CzgjOoVWdziH4W6KyBBN821eclgbJjNiF7j9BP//n6Gc3Q4/p8Up2veDG/gI='),
			    
			this.addEntry(dt + 'copy dependency', function()
			{
			   	var cardCell = new mxCell('&lt;&lt;requirement&gt;&gt;\nSlave',	new mxGeometry(0, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('&lt;&lt;requirement&gt;&gt;\nMaster', new mxGeometry(240, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('&lt;&lt;copy&gt;&gt;', new mxGeometry(0, 0, 0, 0), 'endArrow=open;edgeStyle=none;endSize=12;dashed=1;html=1;');
			   	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cardCell.insertEdge(edge1, true);
			   	cardCell2.insertEdge(edge1, false);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 360, 60, 'Copy Dependency');
			}),
			    
			this.addEntry(dt + 'master callout', function()
			{
			   	var cardCell = new mxCell('Master\n&lt;&lt;requirement&gt;&gt; Master',	new mxGeometry(0, 0, 160, 60), 'shape=note;html=1;size=15;align=left;spacingLeft=5;whiteSpace=wrap;align=center;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('&lt;&lt;requirement&gt;&gt; Slave', new mxGeometry(200, 0, 160, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'endArrow=none;html=1;edgeStyle=none;dashed=1;');
			   	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cardCell.insertEdge(edge1, true);
			   	cardCell2.insertEdge(edge1, false);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 360, 60, 'Master Callout');
			}),
			    
			this.addEntry(dt + 'derive dependency', function()
			{
			   	var cardCell = new mxCell('&lt;&lt;requirement&gt;&gt;\nClient',	new mxGeometry(0, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('&lt;&lt;requirement&gt;&gt;\nSupplier', new mxGeometry(240, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('&lt;&lt;deriveReq&gt;&gt;', new mxGeometry(0, 0, 0, 0), 'endArrow=open;html=1;edgeStyle=none;endSize=12;dashed=1;');
			   	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cardCell.insertEdge(edge1, true);
			   	cardCell2.insertEdge(edge1, false);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 360, 60, 'Derive Dependency');
			}),
			    
			this.addEntry(dt + 'derive callout', function()
			{
			   	var cardCell = new mxCell('&lt;&lt;requirement&gt;&gt;\nReqA',	new mxGeometry(0, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('Derived\n&lt;&lt;requirement&gt;&gt; ReqB', new mxGeometry(200, 0, 160, 60), 'shape=note;html=1;size=15;align=left;spacingLeft=5;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'endArrow=none;html=1;edgeStyle=none;dashed=1;');
			   	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cardCell.insertEdge(edge1, true);
			   	cardCell2.insertEdge(edge1, false);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 360, 60, 'Derive Callout');
			}),
			    
			this.addEntry(dt + 'derive callout', function()
			{
			   	var cardCell = new mxCell('DerivedFrom\n&lt;&lt;requirement&gt;&gt; ReqA', new mxGeometry(0, 0, 160, 60), 'shape=note;html=1;size=15;align=left;spacingLeft=5;whiteSpace=wrap;align=center;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('&lt;&lt;requirement&gt;&gt;\nReqB',	new mxGeometry(240, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'endArrow=none;edgeStyle=none;dashed=1;html=1;');
			   	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cardCell.insertEdge(edge1, true);
			   	cardCell2.insertEdge(edge1, false);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 360, 60, 'Derive Callout');
			}),
			    
			this.addEntry(dt + 'satisfy dependency', function()
			{
			   	var cardCell = new mxCell('NamedElement', new mxGeometry(0, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('&lt;&lt;requirement&gt;&gt;\nSupplier', new mxGeometry(240, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('&lt;&lt;satisfy&gt;&gt;', new mxGeometry(0, 0, 0, 0), 'endArrow=open;edgeStyle=none;endSize=12;dashed=1;html=1;');
			   	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cardCell.insertEdge(edge1, true);
			   	cardCell2.insertEdge(edge1, false);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 360, 60, 'Satisfy Dependency');
			}),
			    
			this.addEntry(dt + 'satisfy callout', function()
			{
			   	var cardCell = new mxCell('NamedElement',	new mxGeometry(0, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('Satisfies\n&lt;&lt;requirement&gt;&gt; ReqA', new mxGeometry(200, 0, 160, 60), 'shape=note;size=15;align=left;spacingLeft=5;html=1;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'endArrow=none;edgeStyle=none;dashed=1;html=1;');
			   	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cardCell.insertEdge(edge1, true);
			   	cardCell2.insertEdge(edge1, false);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 360, 60, 'Satisfy Callout');
			}),
			    
			this.addEntry(dt + 'satisfy callout', function()
			{
			   	var cardCell = new mxCell('SatisfiedBy\nNamedElement', new mxGeometry(0, 0, 160, 60), 'shape=note;size=15;align=left;spacingLeft=5;html=1;whiteSpace=wrap;align=center;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('&lt;&lt;requirement&gt;&gt;\nReqA',	new mxGeometry(240, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'endArrow=none;edgeStyle=none;dashed=1;html=1;');
			   	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cardCell.insertEdge(edge1, true);
			   	cardCell2.insertEdge(edge1, false);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 360, 60, 'Satisfy Callout');
			}),
			    
			this.addEntry(dt + 'verify dependency', function()
			{
			   	var cardCell = new mxCell('NamedElement', new mxGeometry(0, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('&lt;&lt;requirement&gt;&gt;\nSupplier', new mxGeometry(240, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('&lt;&lt;verify&gt;&gt;', new mxGeometry(0, 0, 0, 0), 'endArrow=open;edgeStyle=none;endSize=12;dashed=1;html=1;');
			   	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cardCell.insertEdge(edge1, true);
			   	cardCell2.insertEdge(edge1, false);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 360, 60, 'Verify Dependency');
			}),
			    
			this.addEntry(dt + 'verify callout', function()
			{
			   	var cardCell = new mxCell('NamedElement',	new mxGeometry(0, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('Verifies\n&lt;&lt;requirement&gt;&gt; ReqA', new mxGeometry(200, 0, 160, 60), 'shape=note;size=15;align=left;spacingLeft=5;html=1;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'endArrow=none;edgeStyle=none;dashed=1;html=1;');
			   	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cardCell.insertEdge(edge1, true);
			   	cardCell2.insertEdge(edge1, false);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 360, 60, 'Verify Callout');
			}),
			    
			this.addEntry(dt + 'verify callout', function()
			{
			   	var cardCell = new mxCell('VerifiedBy\nNamedElement', new mxGeometry(0, 0, 160, 60), 'shape=note;size=15;align=left;spacingLeft=5;html=1;whiteSpace=wrap;align=center;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('&lt;&lt;requirement&gt;&gt;\nReqA',	new mxGeometry(240, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'endArrow=none;edgeStyle=none;dashed=1;html=1;');
			   	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cardCell.insertEdge(edge1, true);
			   	cardCell2.insertEdge(edge1, false);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 360, 60, 'Verify Callout');
			}),
			    
			this.addEntry(dt + 'refine dependency', function()
			{
			   	var cardCell = new mxCell('NamedElement', new mxGeometry(0, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('&lt;&lt;requirement&gt;&gt;\nClient', new mxGeometry(240, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('&lt;&lt;refine&gt;&gt;', new mxGeometry(0, 0, 0, 0), 'endArrow=open;edgeStyle=none;endSize=12;dashed=1;html=1;');
			   	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cardCell.insertEdge(edge1, true);
			   	cardCell2.insertEdge(edge1, false);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 360, 60, 'Refine Dependency');
			}),
		    
			this.addEntry(dt + 'refine dependency', function()
			{
			   	var cardCell = new mxCell('NamedElement',	new mxGeometry(0, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('Refines\n&lt;&lt;requirement&gt;&gt; ReqA', new mxGeometry(200, 0, 160, 60), 'shape=note;size=15;align=left;spacingLeft=5;html=1;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'endArrow=none;edgeStyle=none;dashed=1;html=1;');
			   	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cardCell.insertEdge(edge1, true);
			   	cardCell2.insertEdge(edge1, false);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 360, 60, 'Refine Callout');
			}),
			    
			this.addEntry(dt + 'refine dependency', function()
			{
			   	var cardCell = new mxCell('RefinedBy\nNamedElement', new mxGeometry(0, 0, 160, 60), 'shape=note;size=15;align=left;spacingLeft=5;html=1;whiteSpace=wrap;align=center;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('&lt;&lt;requirement&gt;&gt;\nReqA',	new mxGeometry(240, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'endArrow=none;edgeStyle=none;dashed=1;html=1;');
			   	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cardCell.insertEdge(edge1, true);
			   	cardCell2.insertEdge(edge1, false);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 360, 60, 'Refine Callout');
			}),
		    
			this.addEntry(dt + 'trace dependency', function()
			{
			   	var cardCell = new mxCell('&lt;&lt;requirement&gt;&gt;\nClient', new mxGeometry(0, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('&lt;&lt;requirement&gt;&gt;\nSupplier', new mxGeometry(240, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('&lt;&lt;trace&gt;&gt;', new mxGeometry(0, 0, 0, 0), 'endArrow=open;edgeStyle=none;endSize=12;dashed=1;html=1;');
			   	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cardCell.insertEdge(edge1, true);
			   	cardCell2.insertEdge(edge1, false);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 360, 60, 'Trace Dependency');
			}),
			    
			this.addEntry(dt + 'refine callout', function()
			{
			   	var cardCell = new mxCell('NamedElement',	new mxGeometry(0, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('TracedFrom\n&lt;&lt;requirement&gt;&gt; ReqA', new mxGeometry(200, 0, 160, 60), 'shape=note;size=15;align=left;spacingLeft=5;html=1;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'endArrow=none;edgeStyle=none;dashed=1;html=1;');
			   	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cardCell.insertEdge(edge1, true);
			   	cardCell2.insertEdge(edge1, false);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 360, 60, 'Refine Callout');
			}),
			    
			this.addEntry(dt + 'trace callout', function()
			{
			   	var cardCell = new mxCell('TracedTo\nNamedElement', new mxGeometry(0, 0, 160, 60), 'shape=note;size=15;align=left;spacingLeft=5;html=1;whiteSpace=wrap;align=center;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('&lt;&lt;requirement&gt;&gt;\nReqA',	new mxGeometry(240, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'endArrow=none;edgeStyle=none;dashed=1;html=1;');
			   	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cardCell.insertEdge(edge1, true);
			   	cardCell2.insertEdge(edge1, false);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 360, 60, 'Trace Callout');
			})
		];
		   	
		this.addPalette('sysmlRequirements', 'SysML / Requirements', expand || false, mxUtils.bind(this, function(content)
		{
			for (var i = 0; i < fns.length; i++)
			{
				content.appendChild(fns[i](content));
			}
		}));
	};

	Sidebar.prototype.addSysMLProfilesPalette = function(expand)
	{
		var s = 'shape=mxgraph.sysml.';
		var gn = '';
		var dt = 'sysml profile ';
		var sb = this;
		
		var fns = [
		    this.createVertexTemplateEntry('shape=rect;html=1;whiteSpace=wrap;align=center;', 
		    		160, 80, '&lt;&lt;stereotype&gt;&gt;\nStereotypeName', 'Stereotype', null, null, this.getTagsForStencil(gn, '', dt + 'stereotype').join(' ')),
		    this.createVertexTemplateEntry('shape=rect;html=1;whiteSpace=wrap;align=center;', 
		    		160, 80, '&lt;&lt;metaclass&gt;&gt;\nMetaClassName', 'Metaclass', null, null, this.getTagsForStencil(gn, '', dt + 'metaclass').join(' ')),
		    this.createVertexTemplateEntry('shape=folder;tabWidth=80;tabHeight=20;tabPosition=left;html=1;whiteSpace=wrap;align=center;', 
		    		160, 100, '&lt;&lt;profile&gt;&gt;\nProfileName', 'Profile', null, null, this.getTagsForStencil(gn, '', dt + 'profile').join(' ')),
		    this.createVertexTemplateEntry('shape=folder;tabWidth=80;tabHeight=20;tabPosition=left;html=1;whiteSpace=wrap;align=center;', 
		    		160, 100, '&lt;&lt;modelLibrary&gt;&gt;\nLibraryName', 'Model Library', null, null, this.getTagsForStencil(gn, '', dt + 'model library').join(' ')),
		   	
			this.addEntry(dt + 'extension', function()
			{
			   	var cardCell = new mxCell('&lt;&lt;metaclass&gt;&gt;\nMetaClassName', new mxGeometry(0, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('&lt;&lt;stereotype&gt;&gt;\nStereotypeName', new mxGeometry(0, 120, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('{required}', new mxGeometry(0, 0, 0, 0), 'endArrow=block;html=1;endFill=1;edgeStyle=none;endSize=12;labelBackgroundColor=none;align=left;');
			   	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cardCell.insertEdge(edge1, false);
			   	cardCell2.insertEdge(edge1, true);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 120, 180, 'Extension');
			}),
		    
			this.addEntry(dt + 'generalization', function()
			{
			   	var cardCell = new mxCell('&lt;&lt;stereotype&gt;&gt;\nStereotypeName', new mxGeometry(0, 0, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell.vertex = true;
			   	var cardCell2 = new mxCell('&lt;&lt;stereotype&gt;&gt;\nStereotypeName', new mxGeometry(0, 120, 120, 60), 'shape=rect;html=1;whiteSpace=wrap;align=center;');
			   	cardCell2.vertex = true;
			   	var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'endArrow=block;html=1;endFill=0;edgeStyle=none;endSize=12;labelBackgroundColor=none;align=left;');
			   	edge1.geometry.relative = true;
			   	edge1.edge = true;
			   	cardCell.insertEdge(edge1, false);
			   	cardCell2.insertEdge(edge1, true);
			    
			   	return sb.createVertexTemplateFromCells([cardCell, cardCell2, edge1], 120, 180, 'Generalization');
			}),
			    
			this.createEdgeTemplateEntry('edgeStyle=none;html=1;endArrow=open;endSize=12;dashed=1;verticalAlign=bottom;', 
					160, 0, '&lt;&lt;apply&gt;&gt;{strict}', 'Profile Application', null, this.getTagsForStencil(gn, '', dt + 'profile application').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=none;html=1;endArrow=open;endSize=12;dashed=1;verticalAlign=top;', 
					160, 0, '&lt;&lt;reference&gt;&gt;', 'Metamodel Reference', null, this.getTagsForStencil(gn, '', dt + 'metamodel reference').join(' ')),
			this.createEdgeTemplateEntry('edgeStyle=none;html=1;endArrow=open;endSize=12;verticalAlign=bottom;', 
					160, 0, 'propertyName', 'Unidirectional Association', null, this.getTagsForStencil(gn, '', dt + 'unidirectional association').join(' '))
		];
		
		this.addPalette('sysmlProfiles', 'SysML / Profiles', expand || false, mxUtils.bind(this, function(content)
		{
			for (var i = 0; i < fns.length; i++)
			{
				content.appendChild(fns[i](content));
			}
		}));
	};

	Sidebar.prototype.addSysMLStereotypesPalette = function(expand)
	{
		var s = 'html=1;shape=mxgraph.sysml.';
		var gn = '';
		var dt = 'sysml stereotype ';
		var sb = this;
		
		var fns = [
			this.addDataEntry(dt + 'note', 320, 150, 'Stereotype Note',
				'3ZZdb5swFIZ/DZeVwCTRbgPpetNOkSLt3oETsGYwM4ck7NfvGDtQAkk7tdKkXkSx3/Nh8/Aa8MK4OD9pXuUvKgXphY9eGGul0I6KcwxSeswXqRduPMZ8+nns+41o0EX9imso8T0FzBYcuWzAKh5bSSqNKpJrbKWVV78bs6Wo4DoTpReu/ercTx9QVSQFI03CAQcR4YwPXIrM1NpQNHSlUeb+u7X3rwReUO9ITmc1ggaFbQU/eAF9bFw3bqsNCNd6q1UFGtuuONz8NAR2qEWZzaa/NBLFvZqYeL3VJFJKAi9HbVweZe2vMZBWDRob3RBW57wyw1IhGBrij5kFSzOueEJbeO4wb4ySYyFNlIbqCPog1YmmB0FeCKNTLhB2VGManMiK/XKUSjfuprU6yfnqCVQBqFtKcQUL6zz/JFLMndu+OS0HkeWuy0XjtZ1nfafBtzRw1p23cTix8aOEwmyUrTwWBj5dkqV9g6KGxFA+qBJ3LhqMuc1RcobeJLQS6A9ia100mHKbw7b4BGyLL4DNFVwedP8D43KCccsxnwWnVVOmYOoMW8n3ICOe/Mo6PVZS6e5Il+ZIGx4i4XLtcHVP2QjKdK11d35d3h36dn1IMxhhrVWjExgdHaSnNuDIFu+Ar0FyFMdx94+gXM28j+4inOJIeZ134X9nwT7/wl3pVglzqi5uDZZXbg2vbGhvh6u6wtdvY44oTYevB5v++uPiLw=='),
			this.addDataEntry(dt + 'note', 320, 150, 'Stereotype Note',
				'rZRNj9owEIZ/jY8rJTGLet3Adi/daiWk3r1kSCw5tutMgPTXdxybZA2hXak9IMbvfNg8fjHjm/b84oRtXk0FivFnxjfOGAxRe96AUqzIZMX4lhVFRh9WfL2TzcdsZoUDjZ9pKELDUagegsKKtaLW0pLc4aCCvP7Z+yOVrXC11Iw/ZfY8LR/QWJLyRFNwwFlEOOODULL2vSFVzlMpquP3uPf7B0G0NLtUt6sOwYHBwcJ30cKUS/vSsc6DiKPfnLHgcBib+faHJ7BDJ3W9WP7aK5R/6tkQr78NKY1RIHQyJtZR1fs1BtLsrBXJhRRdI6wPtUHwNOQvv8offWzFno7wbcS89UqDrfJZCs0R3EGZEy0PkrzAy1MjEXbU4wecyIrTdlRKF3fXWqMUffUCpgV0A5XEhlVwXnaSFTbRbV+i1oCsmzjlookurOtp0uxbCqJ1l23Mb2z8rKD1By3WrOB5Rj8p0L5D0cHeUz4YjbuYzVNuS5Siobd72gncP2IbYja/5baEbfUfsK0W/v1XgJzpdQW+3jMEXT05N5pHG+19V4muGdNXuMIgqGpIOHSmd3tI3h6k9wIwucdP0HKgBMpjOn2JRWx9M9K74WLO/DHiu1DnVzjDqWLXFdHpGEuQaTk/36H84+v+Gw=='),
			    
		    this.createVertexTemplateEntry('shape=rect;html=1;whiteSpace=wrap;align=center;', 160, 80, 
		    		'&lt;&lt;stereotypeName&gt;&gt;\n{PropertyName=ValueString;\nBooleanPropertyName}\nNodeName', 
		    		'Stereotype (Node)', null, null, this.getTagsForStencil(gn, '', dt + 'node').join(' ')),
		   	
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;align=center;', 400, 100, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'<b>NodeName</b><hr/></p>' + 
		    		'<p style="margin:0px;margin-left:10px;text-align:left;">' +
	    			'&lt;&lt;stereotypeName&gt;&gt;{PropertyName=ValueString}ElementName<br/>' + 
	    			'&lt;&lt;stereotypeName&gt;&gt;{PropertyName=ValueString};<br/>' + 
	    			'BooleanPropertyName<br/>' + 
	    			'ElementName</p>',
		    		'Stereotype (Compartment)', null, null, this.getTagsForStencil(gn, '', dt + 'compartment').join(' ')),
			this.addDataEntry(dt + 'edge', 200, 180, 'Stereotype (Edge)',
				'3VTBboMwDP2a3CmZ2vOgXU+bKlXaPQM3iRYSZEwp+/oFCO2ytVJ32WEHJD8/G/OeQxjPq9MWRa2eXQmG8Q3jOTpHU1SdcjCGpYkuGV+zNE38w9KnG+xiZJNaIFi6pyGdGo7CtDBlNgaqoTldspQvEsazF1HBVNZQb0JZo0Q9hAiFH5QdnKV9YBceK6pMCDulCfa1KAau80p9ThgtrYeFnwToE+EzAAlON6WMqaBjC64Cwt6XdLokFSqC3ESBliq0LUNONBOW59aLMT4I3lz3if8Dn/pvHv2Fbw8/fPOGiWrQZmjU8xU1XiRQ72CyMlAyKpzR7DpbZTt0tXekH7v4+nUYtifUVsalmXMGhI3KV+udIHV1dWDLR0TXeWSdhXhbUEqYFxlYI97AZKJ4l+haW+bOOLyw8yoNHK4dhBHrjxEm50UPU6I1N67FAqIzSQIlUPQ733EYEIwgfYzf/otNe3i5pUYuusQ+AQ=='),
			    
		    this.createVertexTemplateEntry('shape=rect;html=1;overflow=fill;whiteSpace=wrap;align=center;', 300, 120, 
		    		'<p style="margin:0px;margin-top:4px;text-align:center;">' +
	    			'<b>&lt;&lt;stereotypeName&gt;&gt;</br>NodeName</b><hr/></p>' + 
		    		'<p style="margin:0px;margin-left:10px;text-align:left;">' +
	    			'&lt;&lt;stereotypeName&gt;&gt;<br/>PropertyName=ValueString<br/>' + 
	    			'MultiPropertyName=ValueString, ValueString<br/>' + 
	    			'BooleanPropertyName<br/></p>', 
		    		'Stereotype (Compartment)', null, null, this.getTagsForStencil(gn, '', dt + 'compartment').join(' '))
		];
		
		this.addPalette('sysmlStereotypes', 'SysML / Stereotypes', expand || false, mxUtils.bind(this, function(content)
		{
			for (var i = 0; i < fns.length; i++)
			{
				content.appendChild(fns[i](content));
			}
		}));
	};

})();
