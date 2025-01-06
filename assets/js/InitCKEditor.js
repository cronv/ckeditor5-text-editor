


import {
	ClassicEditor,
	AccessibilityHelp,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	Base64UploadAdapter,
	Bold,
	Code,
	CodeBlock,
	Essentials,
	FullPage,
	GeneralHtmlSupport,
	Heading,
	HtmlComment,
	HtmlEmbed,
	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	MediaEmbed,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	Mention,
	PageBreak,
	Paragraph,
	SelectAll,
	ShowBlocks,
	SourceEditing,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	TodoList,
	Undo
} from 'ckeditor5';

import translations from 'ckeditor5/translations/ru.js';


const editorConfig = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'mediaEmbed',
			'|',
			'sourceEditing',
			'showBlocks',
			'|',
			'heading',
			'|',
			'bold',
			'italic',
			'code',
			'|',
			'pageBreak',
			'link',
			'insertImage',
			'insertTable',
			'codeBlock',
			'htmlEmbed',
			'|',
			'bulletedList',
			'numberedList',
			'todoList'
		],
		shouldNotGroupWhenFull: false
	},
	plugins: [
		AccessibilityHelp,
		Autoformat,
		AutoImage,
		AutoLink,
		Autosave,
		Base64UploadAdapter,
		Bold,
		Code,
		CodeBlock,
		Essentials,
		MediaEmbed,
		FullPage,
		GeneralHtmlSupport,
		Heading,
		HtmlComment,
		HtmlEmbed,
		ImageBlock,
		ImageCaption,
		ImageInline,
		ImageInsert,
		ImageInsertViaUrl,
		ImageResize,
		ImageStyle,
		ImageTextAlternative,
		ImageToolbar,
		ImageUpload,
		Italic,
		Link,
		LinkImage,
		List,
		ListProperties,
		Mention,
		PageBreak,
		Paragraph,
		SelectAll,
		ShowBlocks,
		SourceEditing,
		Table,
		TableCaption,
		TableCellProperties,
		TableColumnResize,
		TableProperties,
		TableToolbar,
		TextTransformation,
		TodoList,
		Undo
	],
	heading: {
		options: [
			{
				model: 'paragraph',
				title: 'Paragraph',
				class: 'ck-heading_paragraph'
			},
			{
				model: 'heading1',
				view: 'h1',
				title: 'Heading 1',
				class: 'ck-heading_heading1'
			},
			{
				model: 'heading2',
				view: 'h2',
				title: 'Heading 2',
				class: 'ck-heading_heading2'
			},
			{
				model: 'heading3',
				view: 'h3',
				title: 'Heading 3',
				class: 'ck-heading_heading3'
			},
			{
				model: 'heading4',
				view: 'h4',
				title: 'Heading 4',
				class: 'ck-heading_heading4'
			},
			{
				model: 'heading5',
				view: 'h5',
				title: 'Heading 5',
				class: 'ck-heading_heading5'
			},
			{
				model: 'heading6',
				view: 'h6',
				title: 'Heading 6',
				class: 'ck-heading_heading6'
			}
		]
	},
	htmlSupport: {
		allow: [
			{
				name: /^.*$/,
				styles: true,
				attributes: true,
				classes: true
			}
		]
	},
	image: {
		toolbar: [
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
			'imageStyle:inline',
			'imageStyle:wrapText',
			'imageStyle:breakText',
			'|',
			'resizeImage'
		]
	},
	initialData:
		'<h2>Поздравляем с участием в нашем конкурсе! 🎉</h2>\n<p>\n    Вы успешно зарегистрировались для участия в конкурсе. Это замечательная возможность продемонстрировать свои навыки и творческие идеи.\n    Ожидайте насыщенную программу и интересные задания!\n</p>\n<h3>Что делать дальше?</h3>\n<ol>\n    <li>\n        <strong>Ищите идеи:</strong> начните размышлять о том, как вы можете представить свои проекты. Не бойтесь выходить за рамки привычного.\n    </li>\n    <li>\n        <strong>Изучите примеры:</strong> ознакомьтесь с примерами новостей и работ предыдущих участников, чтобы вдохновиться и понять, чего ожидаем мы.\n    </li>\n    <li>\n        <strong>Настройте свое участие:</strong> позаботьтесь о том, чтобы ваша заявка соответствовала всем требованиям конкурса и выделялась среди остальных.\n    </li>\n</ol>\n<p>\n    Продолжайте творить и не стесняйтесь экспериментировать! Ваши идеи важны для нас и помогут сделать конкурс еще более увлекательным. Удачи!\n</p>\n<h3>Полезные ресурсы</h3>\n<ul>\n    <li>📝 <a href="https://example.com/trial/sign-up">Регистрация на конкурс</a>,</li>\n    <li>📕 <a href="https://example.com/docs/competition-guidelines">Документация</a>,</li>\n    <li>⭐️ <a href="https://github.com/example/competition">GitHub</a> (поставьте звезду, если можете!),</li>\n    <li>🏠 <a href="https://example.com">Главная страница конкурса</a>,</li>\n    <li>🧑‍💻 <a href="https://example.com/demo">Примеры работ участников</a>,</li>\n</ul>\n<h3>Контакты</h3>\n<p>\n    Если у вас есть вопросы, вы можете связаться с нами через:</p>\n<figure class="table" style="width:17.64%;">\n' +
		'    <table class="ck-table-resized" style="border-style:none;">\n' +
		'        <colgroup><col style="width:33.33%;"><col style="width:33.33%;"><col style="width:33.34%;"></colgroup>\n' +
		'        <tbody>\n' +
		'            <tr>\n' +
		'                <td style="border-style:none;text-align:center;">\n' +
		'                    <a target="_blank" rel="noopener noreferrer" href="https://vk.com/your_profile"><img src="/assets/images/example/icon_vk.png" alt="VK" width="24" height="24"></a>\n' +
		'                </td>\n' +
		'                <td style="border-style:none;text-align:center;">\n' +
		'                    <a target="_blank" rel="noopener noreferrer" href="https://t.me/your_username"><img src="/assets/images/example/icon_tg.png" alt="Telegram" width="24" height="24"></a>\n' +
		'                </td>\n' +
		'                <td style="border-style:none;text-align:center;">\n' +
		'                    <a target="_blank" rel="noopener noreferrer" href="https://wa.me/your_number"><img src="/assets/images/example/icon_wa.png" alt="WhatsApp" width="24" height="24"></a>\n' +
		'                </td>\n' +
		'            </tr>\n' +
		'        </tbody>\n' +
		'    </table>\n' +
		'</figure>\n<h3>Нужна помощь?</h3>\n<p>\n    Если у вас возникли вопросы или проблемы с регистрацией, проверьте электронную почту на наличие уведомлений. Это может быть связано с отсутствующей информацией или ошибками в форме заявки. Если вы не можете решить вопрос, напишите нам, и мы поможем вам как можно скорее!\n</p>\n',
	language: 'ru',
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: {
					download: 'file'
				}
			}
		}
	},
	list: {
		properties: {
			styles: true,
			startIndex: true,
			reversed: true
		}
	},
	mention: {
		feeds: [
			{
				marker: '@',
				feed: [
					/* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
				]
			}
		]
	},
	placeholder: 'Type or paste your content here!',
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
	},
	translations: [translations]
};

const editor = document.querySelector('#editor');
ClassicEditor.create(editor, editorConfig);




