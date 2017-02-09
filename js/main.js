/* © 2017 NauStud.io
 * @author ...
 */
$(function() {
	'use strict';
	// For fun, displaying Nau ASCII Art:
	var NAU_ASCII_ART = '   _.._             _.._           .--┐\n .`--.  \'.        .\'  .-`\'.       |   |\n.   .-\\   \\  (`) .   /-.   \\      |   |\n|   |  \\   \\     |   |  \\   \\     |   |\n|   |   \\   \\    |   |   \\   \\    |   |\n|   |    \\   \\   |   |    \\   \\   |   |\n|   |     \\   \\  |   |     \\   \\  |   |\n|   |      \\   `-/   |      \\   \\-\'   |\n|   |       \\_.-`   ,\'  (`)  \\   `-._.\'\n└--`         `-...-`          `-...-`\nNau Studio';

	var dataSet = [
		['An Giang',            '67', '67'],
		['Bà Rịa - Vũng Tàu',   '72', '72'],
		['Bắc Cạn',             '97', '97'],
		['Bắc Giang',           '13, 98', '13, 98'],
		['Bạc Liêu',            '94', '94'],
		['Bắc Ninh',            '13, 99', '13, 99'],
		['Bến Tre',             '71', '71'],
		['Bình Định',           '77', '77'],
		['Bình Dương',          '61', '61'],
		['Bình Phước',          '93', '93'],
		['Bình Thuận',          '86', '86'],
		['Cà Mau',              '69', '69'],
		['Cần Thơ',             '65', '65'],
		['Cao Bằng',            '11', '11'],
		['Cục CSGT ĐB-ĐS',      '80', '80'],
		['Đắk Lắk',             '47', '47'],
		['Đắk Nông',            '48', '48'],
		['Điện Biên',           '27', '27'],
		['Đồng Nai - Biên Hòa', '39, 60', '39; 60'],
		['Đồng Tháp',           '66', '66'],
		['Gia Lai',             '81', '81'],
		['Hà Nam',              '90', '90'],
		['Hà Giang',            '23', '23'],
		['Hà Nội',              '29 đến 33; 40', '29, 30, 31, 32, 33; 40'],
		['Hà Tĩnh',             '38', '38'],
		['Hải Dương',           '34', '34'],
		['Hải Phòng',           '15, 16', '15, 16'],
		['Hậu Giang',           '95', '95'],
		['Hòa Bình',            '28', '28'],
		['Hưng Yên',            '89', '89'],
		['Khánh Hòa',           '79', '79'],
		['Kin Giang',           '68', '68'],
		['Kon Tum',             '82', '82'],
		['Lai Châu',            '25', '25'],
		['Lâm Đồng - Đà Lạt',   '49', '49'],
		['Lạng Sơn',            '12', '12'],
		['Lào Cai',             '24', '24'],
		['Long An',             '62', '62'],
		['Nam Định',            '18', '18'],
		['Nghệ An - Vinh',      '37', '37'],
		['Ninh Bình',           '35', '35'],
		['Ninh Thuận',          '85', '85'],
		['Phú Thọ',             '19', '19'],
		['Phú Yên',             '78', '78'],
		['Quảng Bình',          '73', '73'],
		['Quảng Nam',           '92', '92'],
		['Quảng Ngãi',          '76', '76'],
		['Quảng Ninh',          '14', '14'],
		['Quảng Trị',           '74', '74'],
		['Sóc Trăng',           '83', '83'],
		['Sơn La',              '26', '26'],
		['Tây Ninh',            '70', '70'],
		['Thái Bình',           '17', '17'],
		['Thái Nguyên',         '20', '20'],
		['Thanh Hóa',           '36', '36'],
		['Thừa Thiên Huế',      '75', '75'],
		['Tiền Giang',          '63', '63'],
		['TP. Đà Nẵng',         '43', '43'],
		['TP. Hồ Chí Minh',     '41; 50 đến 59', '41; 50, 51, 52, 53, 54, 55, 56, 57, 58, 59'],
		['Trà Vinh',            '84', '84'],
		['Tuyên Quang',         '22', '22'],
		['Vĩnh Long',           '64', '64'],
		['Vĩnh Phúc',           '88', '88'],
		['Yên Bái',             '21', '21'],
	];

	$('#data-table').DataTable({
		data: dataSet,
		paging: false,
		columns: [
			{ title: 'Tỉnh / Thành phố' },
			{ title: 'Chữ số đầu biển số' },
			{ title: 'Giá trị để search', visible: false },
		],
		'language': {
			'zeroRecords': 'Không có kết quả nào',
			'info': '', // don't show the paging
			'infoEmpty': '',
			'infoFiltered': '(kết quả lọc lại từ tổng số _MAX_)'
		}
	});
});
