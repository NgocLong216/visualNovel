import lienxo from "../../assets/backgrounds/LienXoAlexei.png";
import Alexei from "../../assets/characters/Alexei.png";

export const alexeiStory = [
    {
        id: 1,

        speaker: "Bối cảnh",

        nextId: 2,

        text: "Tuyết phủ trắng thành tầng nơi tâm lòng Moscow, chất chồng theo đó là những niềm trắc trở về nền kinh tế nơi đây. Gió đông bắc rít qua khe cửa kính của văn phòng làm việc rộng lớn nhưng lạnh lẽo, nơi ánh đèn dầu và chiếc lò sưởi cũ bằng gạch đang cố chống chọi lại cái lạnh khắc nghiệt bên ngoài.",

        background: lienxo,

        characters: [
        ],
    },

    {
        id: 2,

        speaker: "Bối cảnh",

        nextId: 3,

        text: "Đối diện bạn là một người đàn ông cao lớn, vóc dáng toát rõ sự uy nghiêm và vững chãi như một khối thép thành thục qua năm tháng.",

        background: lienxo,

        characters: [
        ],
    },

    {
        id: 3,

        speaker: "Bối cảnh",

        nextId: 4,

        text: "Bên ngoài ông khoác chiếc áo măng-tô dạ dày đã sờn cũ ở gấu áo — vết tích của những chuyến thực địa dài ngày tại các đại công trường vùng Siberia. Alexei Vladimir đăm chiêu nhìn, lật giở từng trang của tập tài liệu dày cộm đặt trên chiếc bàn gỗ sồi lớn.",

        background: lienxo,

        characters: [
        ],
    },

    {
        id: 4,

        speaker: "Bối cảnh",

        nextId: 5,

        text: "Hôm nay bạn được cử đi trao đổi với Alexei Vladimir, hiện thân của Mô Hình Công Nghiệp Hóa Liên Xô, và nhiệm vụ của bạn lần này là tư vấn nội dung cho kế hoạch 5 năm của ông.",

        background: lienxo,

        characters: [
        ],
    },

    {
        id: 5,
    
        speaker: "Bối cảnh",
    
        nextId: 6,
    
        text: "Alexei đập mạnh tay xuống xấp tài liệu trên bàn, thẳng thắn nói.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 6,
    
        speaker: "Alexei",
    
        text: "Chúng tôi đang bị bao vây bởi các thế lực thù địch bên ngoài. Việc trì trệ công tác là thứ chúng tôi không thể chấp nhận. Theo đồng chí, để xây dựng tiềm lực quốc phòng và tự chủ nhanh nhất, mô hình của tôi phải ưu tiên phát triển ngành nào ngay từ đầu?",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Bắt đầu tuần tự từ công nghiệp nhẹ (dệt may, tiêu dùng) để tích lũy vốn từ từ rồi mới làm công nghiệp nặng.",
                nextId: 7,
                score: 0,
            },
    
            {
                text: "B. Ưu tiên phát triển công nghiệp nặng ngay từ đầu (như luyện kim, chế tạo máy, năng lượng, quốc phòng).",
                nextId: 10,
                score: 10,
            },
    
            {
                text: "C. Bỏ qua hoàn toàn công nghiệp, dồn 100% nguồn lực để phát triển các sàn giao dịch tài chính ảo và tiền điện tử.",
                nextId: 13,
                score: 5,
            },
        ],
    },
    
    {
        id: 7,
    
        speaker: "Bạn",
    
        nextId: 8,
    
        text: "Tôi nghĩ chúng ta nên đi từng bước vững chắc. Hãy bắt đầu tuần tự từ các ngành công nghiệp nhẹ như dệt may, hàng tiêu dùng. Ngành này cần ít vốn, thu hồi nhanh, giúp chúng ta tích lũy nguồn tài chính một cách an toàn rồi mới tính đến công nghiệp nặng.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 8,
    
        speaker: "Alexei",
    
        nextId: 9,
    
        text: "Alexei đứng phắt dậy, đẩy chiếc ghế gỗ ra phía sau tạo nên một tiếng 'két' chói tai trên sàn nhà.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 9,
    
        speaker: "Alexei",
    
        nextId: 16,
    
        text: "Tích lũy từ từ? Khâu từng tấm áo, dệt từng tấm vải sao? Đồng chí đang tư duy giống hệt một gã nhà buôn tư sản rồi! Lũ đế quốc phương Tây đang mài gươm rạch súng ngay sát vách biên giới, chúng sẽ không đứng yên chờ chúng ta dệt xong những chiếc áo ấm đâu. Trong vòng vây của kẻ thù, đi tuần tự kiểu đó chẳng khác nào tự sát. Đồng chí đã lầm tưởng cái mảnh đất đang rực lửa tự chủ này với mô hình tích lũy tư bản lề mề của gã James West bên kia đại dương rồi. Tỉnh lại đi!",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 10,
    
        speaker: "Bạn",
    
        nextId: 11,
    
        text: "Tình thế này bắt buộc chúng ta phải ưu tiên phát triển công nghiệp nặng ngay từ vạch xuất phát. Phải dồn lực vào luyện kim, chế tạo máy, năng lượng và công nghiệp quốc phòng để xây dựng bộ khung tự chủ và năng lực bảo vệ Tổ quốc.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 11,
    
        speaker: "Alexei",
    
        nextId: 12,
    
        text: "Alexei chợt rực sáng lên một tia lửa đầy phấn khích. Ông đập mạnh lòng bàn tay xuống bàn một lần nữa, nhưng lần này đi kèm với một điệu cười hào sảng, vang vọng khắp bốn bức tường gạch.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 12,
    
        speaker: "Alexei",
    
        nextId: 16,
    
        text: "Chính xác! Tư duy rất có tầm vóc, rất có khí chất của một người cộng sản! Công nghiệp nặng chính là xương sống, là đôi cánh thép của một quốc gia muốn đứng thẳng lưng trước thế giới. Có thép để đúc đại bác, có nhà máy chế tạo ra máy móc, có dòng điện chạy dọc đất nước, chúng ta mới có vũ khí để bảo vệ thành quả cách mạng của nhân dân. Chúng ta không đi xin, không đi cầu cạnh ai cả, chúng ta tự đúc nền móng bằng chính đôi tay của mình. Rất tốt, đồng chí!",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 13,
    
        speaker: "Bạn",
    
        nextId: 14,
    
        text: "Quên công nghiệp đi, thời đại này phải bứt phá bằng cách dồn 100% nguồn lực để xây dựng các sàn giao dịch tài chính ảo và khai thác tiền điện tử phi tập trung!",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 14,
    
        speaker: "Alexei",
    
        nextId: 15,
    
        text: "Căn phòng đột ngột rơi vào một sự im lặng đông cứng, đáng sợ hơn cả trận bão tuyết ngoài cửa sổ. Alexei đứng lặng người, ông chằm chằm nhìn bạn, khí chất sắc lẹm như lưỡi dao, áp lực vĩ mô từ một nhà lãnh đạo thép khiến không khí như nghẹt lại. Ông chậm rãi ngồi xuống, ném xấp tài liệu sang một bên.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 15,
    
        speaker: "Alexei",
    
        nextId: 16,
    
        text: "Tiền điện tử? Sàn giao dịch ảo? Đồng chí đang mang thứ bong bóng đầu cơ, những trò bịp bợm vô hình của chủ nghĩa tư bản vào đây để đầu độc nền kinh tế thực của chúng tôi đấy à? Đất nước này cần những tấn thép thật, những cỗ máy cày thật, những khẩu súng thật để nuôi sống và bảo vệ đồng bào mình, chứ không cần những con số vô tri trên một cái màn hình vô hình. Đừng để tôi phải nghe thấy những lời phát ngôn điên rồ và suy đồi đó thêm một lần nào nữa.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },

    {
        id: 16,
    
        speaker: "Bối cảnh",
    
        nextId: 17,
    
        text: "Alexei quay người lại phía mảng tường trung tâm, nơi treo một tấm bản đồ sơ đồ phân phối tài nguyên chằng chịt những đường kẻ, biểu đồ và các ô số liệu đan xen như một mạng lưới huyết mạch khổng lồ. Ông thô bạo chỉ thẳng ngón tay vào tâm điểm của sơ đồ, thanh âm đanh thép vang lên đầy tính áp đặt.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 17,
    
        speaker: "Alexei",
    
        text: "Thị trường tự do chỉ là một mớ hỗn loạn đầy rủi ro, nơi lũ đầu cơ thao túng giá cả và bỏ mặc vận mệnh nhân dân cho sự may rủi. Để dồn được toàn lực, gom từng đồng rúp, từng thỏi sắt cho những công trình vĩ đại của thời đại, cơ chế quản lý kinh tế của chúng tôi bắt buộc phải vận hành dựa trên điều gì?",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Cơ chế kế hoạch hóa tập trung, mệnh lệnh. Nhà nước quyết định toàn bộ các chỉ tiêu sản xuất, phân bổ nguồn lực thông qua kế hoạch.",
                nextId: 18,
                score: 10,
            },
    
            {
                text: "B. Cơ chế 'Bàn tay vô hình', để mặc cung cầu và giá cả tự do cạnh tranh hoàn toàn ngoài thị trường.",
                nextId: 21,
                score: 0,
            },
    
            {
                text: "C. Cơ chế phó mặc cho các bộ tộc địa phương tự quản lý, không cần bất kỳ sự can thiệp hay kế hoạch nào từ trung ương.",
                nextId: 24,
                score: 5,
            },
        ],
    },
    
    {
        id: 18,
    
        speaker: "Bạn",
    
        nextId: 19,
    
        text: "Để tập trung được sức mạnh tổng lực, hệ thống của ngài phải vận hành dựa trên cơ chế kế hoạch hóa tập trung và mệnh lệnh. Nhà nước sẽ làm tổng công trình sư, quyết định toàn bộ các chỉ tiêu sản xuất, phân bổ nguồn lực từ trung ương xuống.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 19,
    
        speaker: "Alexei",
    
        nextId: 20,
    
        text: "Alexei gật đầu đầy nghiêm nghị. Ông dùng lòng bàn tay vuốt phẳng một góc sơ đồ bị quăn, giọng nói vang lên chắc nịch như đinh đóng cột.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 20,
    
        speaker: "Alexei",
    
        nextId: 27,
    
        text: "Chính xác! Khi toàn bộ quốc gia vận hành nhịp nhàng như một cỗ máy thống nhất dưới bộ tổng tham mưu của Nhà nước, chúng ta sẽ đập tan sự lãng phí vô nghĩa của cạnh tranh tự do. Kế hoạch không phải là lời gợi ý, kế hoạch là luật pháp, là mệnh lệnh của Tổ quốc. Ý chí sắt đá của tập thể sẽ biến những mục tiêu trên giấy thành những đại công xưởng sừng sững giữa đời thực!",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 21,
    
        speaker: "Bạn",
    
        nextId: 22,
    
        text: "Tôi nghĩ tốt nhất là nên áp dụng cơ chế 'Bàn tay vô hình', cứ để mặc cho quy luật cung cầu và thị trường tự do cạnh tranh hoàn toàn tự điều tiết lẫn nhau.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 22,
    
        speaker: "Alexei",
    
        nextId: 23,
    
        text: "Alexei bật ra một tiếng cười khan đầy vẻ mỉa mai. Ông khoanh tay trước ngực, nhìn bạn với đầy sự bài xích đối với học thuyết kinh tế tư bản.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 23,
    
        speaker: "Alexei",
    
        nextId: 27,
    
        text: "Bàn tay vô hình? Phó mặc cho thị trường tự điều tiết sao? Đó là cơ chế tạo ra sự bất công bè phái, khủng hoảng và bóc lột! Nếu cứ để cung cầu tự do cạnh tranh, bọn gian thương sẽ chỉ lao vào nơi nào đẻ ra lợi nhuận nhanh nhất, chứ chẳng ai chịu đổ mồ hôi đúc thép xây đường ray cho quốc gia đâu. Đồng chí lại bị tiêm nhiễm thứ lý thuyết ru ngủ của Adam Smith rồi. Ở đây chúng tôi không chơi trò may rủi!",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 24,
    
        speaker: "Bạn",
    
        nextId: 25,
    
        text: "Nhà nước trung ương không cần can thiệp đâu. Cứ phó mặc cho các bộ tộc và giáo khu địa phương tự quản lý, tự sản xuất theo nhu cầu riêng của họ là được.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 25,
    
        speaker: "Alexei",
    
        nextId: 26,
    
        text: "Nét mặt của Alexei đanh lại, cái lắc đầu của ông lộ rõ sự thất vọng tột cùng như vừa nghe thấy một lời đề nghị điên rồ. Ông gõ mạnh nắm đấm xuống bàn nghe một tiếng 'bộp' khô khốc.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 26,
    
        speaker: "Alexei",
    
        nextId: 27,
    
        text: "Cát cứ địa phương? Chia rẽ đất nước thành các bộ tộc tự trị ư? Đồng chí đang muốn đưa cả một quốc gia vĩ đại quay ngược thời gian về thời kỳ phong kiến phân quyền nguyên thủy đấy à? Một đất nước muốn xây dựng đại công nghiệp trong vòng vây họng súng kẻ thù mà lại không có một bộ chỉ huy thống nhất từ trung ương, thì chỉ là một nắm cát vụn chờ chết mà thôi. Đừng nói những lời phi lý ấy nữa.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },

    {
        id: 27,
    
        speaker: "Bối cảnh",
    
        nextId: 28,
    
        text: "Alexei bước chậm rãi quanh chiếc bàn làm việc gỗ sồi cũ kỹ, bước đến kệ sách cao dài tựa cửa kính. Tiếng ủng da của ông nện xuống sàn nhà đều đặn. Ông nhìn sâu vào mắt bạn, kiên định và sắc lẹm như thép nguội khiến căn phòng như thắt lại.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 28,
    
        speaker: "Alexei",
    
        text: "Các nước tư bản hận chúng tôi thấu xương, chúng không đời nào cho chúng tôi vay một xu tiền. Chúng tôi cũng là người chính trực, không đi cướp bóc, vơ vét thuộc địa hải ngoại như cách bọn chúng đã làm. Vậy đồng chí hãy nói xem, nguồn vốn khổng lồ để đổ vào cuộc cách mạng công nghiệp hóa thần kỳ này được huy động từ đâu?",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Chủ yếu bằng cách thu hút dòng vốn đầu tư nước ngoài (FDI) và mở cửa cho các tập đoàn đa quốc gia vào khai thác.",
                nextId: 29,
                score: 0,
            },
    
            {
                text: "B. Từ nguồn tích lũy nội bộ nền kinh tế, thông qua việc Nhà nước tập trung quản lý thu chi, thắt lưng buộc bụng và sự đóng góp, đồng lòng của toàn dân.",
                nextId: 32,
                score: 10,
            },
    
            {
                text: "C. Đi vay nợ vô điều kiện từ ngân hàng của các nước đối thủ mà không cần kế hoạch trả nợ.",
                nextId: 35,
                score: 5,
            },
        ],
    },
    
    {
        id: 29,
    
        speaker: "Bạn",
    
        nextId: 30,
    
        text: "Chúng ta có thể thực hiện chính sách mở cửa thị trường, thu hút mạnh mẽ dòng vốn đầu tư nước ngoài (FDI) và tạo cơ chế ưu đãi cho các tập đoàn đa quốc gia vào khai thác.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 30,
    
        speaker: "Alexei",
    
        nextId: 31,
    
        text: "Alexei lắc đầu một cách dứt khoát. Ông cao giọng, thanh âm vang lên sang sảng khắp căn phòng.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 31,
    
        speaker: "Alexei",
    
        nextId: 38,
    
        text: "Đồng chí quá ngây thơ rồi! Lũ tài phiệt quốc ngoài tràn vào chỉ mục đích hút máu công nhân và biến đất nước này thành thuộc địa kiểu mới của chúng mà thôi. Chưa kể, chúng đang giăng thiên la địa võng cấm vận chúng ta, lấy đâu ra vốn FDI? Đồng chí đang lấy râu ông nọ chắp cằm bà kia, đem cái mô hình của các nước công nghiệp mới thời hậu thế để áp đặt vào thực tế xương máu của chúng tôi rồi!",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 32,
    
        speaker: "Bạn",
    
        nextId: 33,
    
        text: "Nguồn vốn bắt buộc phải được siết chặt và huy động từ nội lực nền kinh tế. Thông qua việc Nhà nước tập trung quản lý toàn bộ thu chi, thực hiện chính sách thắt lưng buộc bụng, tích lũy từ nông nghiệp và trên hết là sự hy sinh, đồng lòng lao động quên mình của toàn dân.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 33,
    
        speaker: "Alexei",
    
        nextId: 34,
    
        text: "Alexei đứng lặng người đi trong vài giây, khí chất đanh thép ban đầu bỗng chốc dịu lại. Ông đưa bàn tay to lớn vỗ mạnh lên vai bạn, giọng trầm xuống đầy uy nghiêm nhưng ấm áp.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 34,
    
        speaker: "Alexei",
    
        nextId: 38,
    
        text: "Chính xác! Chúng tôi đi lên từ đống đổ nát bằng đôi bàn tay trắng và ý chí sắt đá của chính mình. Sự đóng góp, mồ hôi và lòng quả cảm của giai cấp công nhân lẫn nông dân chính là bệ phóng cho các đại công trường vĩ đại. Không vay mượn, không bán mình lệ thuộc, dòng vốn của chúng tôi được đúc bằng tinh thần yêu nước vĩ đại của nhân dân. Đồng chí hiểu rất sâu sắc!",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 35,
    
        speaker: "Bạn",
    
        nextId: 36,
    
        text: "Cách nhanh nhất là cứ ngửa tay đi vay nợ vô điều kiện từ ngân hàng tư nhân của các nước đối thủ phương Tây, cứ vay thật nhiều rồi quỵt nợ, không cần lên kế hoạch chi trả làm gì.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 36,
    
        speaker: "Alexei",
    
        nextId: 37,
    
        text: "Alexei gõ mạnh tay xuống bàn, gương mặt ông bừng bừng nổi giận như sấm sét chuẩn bị giáng xuống. Ông chỉ thẳng tay vào mặt bạn, giọng nói đanh thép không khoan nhượng.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 37,
    
        speaker: "Alexei",
    
        nextId: 38,
    
        text: "Đi vay nợ từ kẻ thù ư? Đó không phải là gọi vốn, đó là hành vi tự tròng cổ mình vào sợi dây thòng lọng tài chính của chủ nghĩa đế quốc! Chúng sẽ dùng những khoản nợ đó để bóp nghẹt chủ quyền và bẻ gãy ý chí tự chủ của chúng ta từ trong trứng nước. Một đề xuất cực kỳ ngớ ngẩn và nguy hiểm đến vận mệnh quốc gia!",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },

    {
        id: 38,
    
        speaker: "Bối cảnh",
    
        nextId: 39,
    
        text: "Alexei bước dứt khoát đến bên cửa sổ, dùng bàn tay thô ráp lau đi lớp sương muối bám chặt trên mặt kính. Bên ngoài, dưới ánh sáng nhập nhòe của những ngọn đuốc và đèn pha công suất lớn, công trường xây dựng tổ hợp nhà máy thép đang hoạt động rầm rộ bất kể ngày đêm, khói từ lò cao cuồn cuộn bốc lên thách thức bão tuyết. Ông quay đầu lại, hỏi bạn với vẻ đầy thách thức.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 39,
    
        speaker: "Alexei",
    
        text: "Thế giới tư bản phải mất gần cả thế kỷ, đi qua bao nhiêu đời thế hệ để hoàn thành công nghiệp hóa. Nhưng dưới sự điều hành tối cao của tôi, đồng chí nghĩ chúng tôi dự kiến rút ngắn thời gian, hoàn thành cơ sở vật chất kỹ thuật của nền đại công nghiệp trong bao lâu?",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Rất ngắn, thường chỉ mất khoảng vài kế hoạch 5 năm (khoảng 15 - 20 năm) nhờ sự tập trung nguồn lực tối đa của Nhà nước.",
                nextId: 40,
                score: 10,
            },
    
            {
                text: "B. Kéo dài cực kỳ, phải mất từ 60 đến 80 năm tuần tự từng bước một vì không áp dụng công nghệ mới.",
                nextId: 43,
                score: 0,
            },
    
            {
                text: "C. Mất khoảng 500 năm vì chúng tôi vừa làm vừa chơi, không áp đặt chỉ tiêu thời gian.",
                nextId: 46,
                score: 5,
            },
        ],
    },
    
    {
        id: 40,
    
        speaker: "Bạn",
    
        nextId: 41,
    
        text: "Với sự tập trung nguồn lực và quyền lực tuyệt đối của Nhà nước, chúng ta có thể tạo ra một kỳ tích bứt tốc. Tôi dự đoán chỉ mất khoảng vài kế hoạch 5 năm — tức tầm 15 đến 20 năm — để hoàn thành toàn bộ bộ khung đại công nghiệp.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 41,
    
        speaker: "Alexei",
    
        nextId: 42,
    
        text: "Alexei gật đầu đầy đắc ý, sự kiêu hãnh nở rộ trên mặt vị lãnh đạo thép. Ông chỉ tay ra dòng thác người đang lao động quên mình giữa màn tuyết trắng, giọng nói tràn đầy hào khí cách mạng.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 42,
    
        speaker: "Alexei",
    
        nextId: 49,
    
        text: "Không sai! Chúng tôi đang tụt hậu hơn một trăm năm so với các quốc gia tiên tiến. Nếu không chạy bứt tốc, không vắt kiệt thời gian trong vòng 15-20 năm bằng những kế hoạch 5 năm thần kỳ, bánh xe lịch sử của kẻ thù sẽ nghiền nát chúng tôi. Tốc độ của hệ thống mệnh lệnh là một kỳ tích vô tiền khoáng hậu mà thế giới tư bản lề mề không bao giờ có thể hiểu nổi!",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 43,
    
        speaker: "Bạn",
    
        nextId: 44,
    
        text: "Tiến trình vĩ đại này bắt buộc phải diễn ra cực kỳ kéo dài, phải mất từ 60 đến 80 năm tuần tự từng bước một để tránh gây sốc cho nền kinh tế xã hội.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 44,
    
        speaker: "Alexei",
    
        nextId: 45,
    
        text: "Alexei khẽ thở dài, lắc đầu ngao ngán, rõ chê bai sự chậm chạp. Ông khoanh tay lại, giọng nói lạnh lùng cắt đứt dòng suy nghĩ của bạn.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 45,
    
        speaker: "Alexei",
    
        nextId: 49,
    
        text: "60 đến 80 năm? Nếu đi với cái nhịp độ rùa bò đó, bộ máy chiến tranh của kẻ thù đã san phẳng đất nước này từ lâu rồi! Đồng chí lại đem cái tư duy lề mề, tự mò mẫm vô tổ chức của mô hình tư bản cổ điển ra để áp đặt lên chúng tôi. Ở đây, chúng tôi không đi dạo, chúng tôi đang chạy đua sinh tồn với thời gian từng ngày từng giờ!",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 46,
    
        speaker: "Bạn",
    
        nextId: 47,
    
        text: "Mô hình này chắc phải mất khoảng 500 năm. Chúng ta cứ vừa làm vừa chơi, hưởng thụ cuộc sống chứ không nên áp đặt chỉ tiêu thời gian làm gì cho mệt mỏi đầu óc.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 47,
    
        speaker: "Alexei",
    
        nextId: 48,
    
        text: "Căn phòng một lần nữa rơi vào không khí ngắt lạnh, ánh nhìn của Alexei chuyển sang sắc lẹm, ghê gớm như thể nhìn một tên gián điệp biệt kích. Ông tiến một bước dài áp sát, giọng nói trầm xuống đầy sát khí.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 48,
    
        speaker: "Alexei",
    
        nextId: 49,
    
        text: "Vừa làm vừa chơi? 500 năm? Đồng chí có biết vận mệnh của hàng triệu con người và tương lai của cả một lý tưởng vĩ đại đang đè nặng lên từng giây phút ở văn phòng này không? Sự cợt nhả vô trách nhiệm, suy đồi đạo đức đó không có chỗ ở điện Kremlin. Hãy nghiêm túc đối thoại, hoặc tôi sẽ cho người tống cổ đồng chí ra khỏi đây ngay lập tức!",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },

    {
        id: 49,
    
        speaker: "Bối cảnh",
    
        nextId: 50,
    
        text: "Alexei lật mở một tập bản đồ quy hoạch điện quốc gia khổng lồ — Kế hoạch GOELRO danh tiếng — những đường mực đỏ nối liền các nhà máy thủy điện, nhiệt điện tương lai chạy dọc khắp các vùng lãnh thổ như những dây thần kinh rực sáng.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 50,
    
        speaker: "Alexei",
    
        text: "Lãnh tụ vĩ đại của chúng tôi từng khẳng định: 'Chủ nghĩa xã hội là chính quyền Xô viết cộng với điện khí hóa toàn quốc'. Đồng chí hãy suy nghĩ cho thật kỹ, mô hình đại công nghiệp tập trung của tôi được xây dựng và phát triển rực rỡ nhất dựa trên những thành tựu của cuộc Cách mạng công nghiệp lần thứ mấy?",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. CMCN lần thứ nhất, với cốt lõi là máy hơi nước và cơ giới hóa ngành dệt.",
                nextId: 51,
                score: 0,
            },
    
            {
                text: "B. CMCN lần thứ tư, với cốt lõi là trí tuệ nhân tạo (AI) và hệ thống thực-ảo kết nối internet.",
                nextId: 54,
                score: 5,
            },
    
            {
                text: "C. CMCN lần thứ hai, với cốt lõi là nền sản xuất điện - cơ khí, sử dụng năng lượng điện và động cơ đốt trong để sản xuất hàng loạt.",
                nextId: 57,
                score: 10,
            },
        ],
    },
    
    {
        id: 51,
    
        speaker: "Bạn",
    
        nextId: 52,
    
        text: "Mô hình này chắc chắn gắn liền với cuộc Cách mạng công nghiệp lần thứ nhất, lấy động cơ máy hơi nước và cơ giới hóa các xưởng dệt thủ công làm lõi cốt sản xuất.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 52,
    
        speaker: "Alexei",
    
        nextId: 53,
    
        text: "Alexei đan lại hai bàn tay thô ráp vào nhau rồi lắc đầu. Ông nhìn bạn, giọng nói trầm quánh đầy vẻ phủ định.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 53,
    
        speaker: "Alexei",
    
        nextId: 60,
    
        text: "Máy hơi nước và xưởng dệt vải sao? Đồng chí lại lùi sâu về thế kỷ trước của gã James West mất rồi! Động cơ hơi nước quá chậm chạp, cồng kềnh và lạc hậu, hoàn toàn không đủ sức gánh vác một nền đại công nghiệp nặng đại quy mô, thần tốc mà chúng tôi đang ngày đêm dựng xây.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 54,
    
        speaker: "Bạn",
    
        nextId: 55,
    
        text: "Mô hình này phát triển rực rỡ nhất dựa trên cuộc Cách mạng công nghiệp lần thứ tư (4.0), lấy trí tuệ nhân tạo (AI), dữ liệu lớn và hệ thống thực-ảo kết nối internet làm trung tâm điều hành.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 55,
    
        speaker: "Alexei",
    
        nextId: 56,
    
        text: "Alexei lật mạnh trang bản đồ bằng giấy thô nghe một tiếng 'xoạch', ánh mắt nhìn bạn đầy vẻ dò xét xen lẫn sự nghi ngại sâu sắc. Ông gạt tay ra hiệu, thanh âm lộ rõ sự thực tế.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 56,
    
        speaker: "Alexei",
    
        nextId: 60,
    
        text: "Trí tuệ nhân tạo? Internet vô hình? Đồng chí lại mang những thuật ngữ viễn tưởng hão huyền từ tương lai xa xôi nào đến đây để ru ngủ tôi rồi. Đừng xây lâu đài trên cát! Hãy nhìn vào thực tại trước mắt đi: đất nước này cần những tổ hợp nhà máy khổng lồ bằng bê tông và thép đặc, chứ không sống bằng những con số ảo trên màn hình!",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 57,
    
        speaker: "Bạn",
    
        nextId: 58,
    
        text: "Trọng tâm và bệ phóng của mô hình này chính là cuộc Cách mạng công nghiệp lần thứ hai (2.0). Cốt lõi là nền sản xuất điện - cơ khí, điện khí hóa toàn quốc và tổ chức các dây chuyền sản xuất hàng loạt đại quy mô vận hành bằng năng lượng điện và động cơ đốt trong.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 58,
    
        speaker: "Alexei",
    
        nextId: 59,
    
        text: "Alexei đập mạnh lòng bàn tay xuống tấm bản đồ GOELRO, ánh nhìn ông rực cháy lên ngọn lửa lý tưởng. Ông đứng thẳng người, lồng ngực vạm vỡ phập phồng, giọng nói vang lên hào sảng, chấn động khắp bốn bức tường văn phòng.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 59,
    
        speaker: "Alexei",
    
        nextId: 60,
    
        text: "Hoàn hảo! Không sai một ly! Năng lượng điện và động cơ đốt trong chính là thứ vũ khí tối tân, là dòng máu nóng chạy qua các bánh răng cơ khí để đưa quốc gia này bứt phá vượt thời gian. Tổ chức sản xuất hàng loạt quy mô lớn trên nền tảng điện khí hóa chính là chìa khóa để chúng ta đè bẹp sự lạc hậu. Đồng chí đã chứng minh bản thân hoàn toàn xứng đáng ngồi ở chiếc bàn nghị sự này!",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },

    {
        id: 60,
    
        speaker: "Bối cảnh",
    
        nextId: 61,
    
        text: "Alexei khoanh hai tay trước ngực, ông đứng sừng sững như một bức tượng tạc từ đá, đăm chiêu nhìn ra xa bên ngoài khung cửa sổ. Tiếng còi nhà máy từ xa vọng lại, trầm hùng và vang vọng qua lớp kính mờ hơi sương. Ông nhìn bạn, giọng nói trầm dày đầy vẻ kiêu hãnh.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 61,
    
        speaker: "Alexei",
    
        text: "Ở đây, chúng tôi không có những ông chủ tư bản ngồi trong văn phòng gỗ Gúc cao sang để hút máu công nhân, cũng không có những khế ước bóc lột được ký bằng máu và nước mắt. Trong mô hình của tôi, quyền sở hữu tư liệu sản xuất tối cao thuộc về ai?",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Thuộc về các tập đoàn tư nhân nước ngoài sở hữu toàn bộ các nhà máy và mỏ khoáng sản.",
                nextId: 62,
                score: 0,
            },
    
            {
                text: "B. Thuộc về toàn dân (Sở hữu nhà nước và sở hữu tập thể), xóa bỏ chế độ tư hữu về tư liệu sản xuất.",
                nextId: 65,
                score: 10,
            },
    
            {
                text: "C. Thuộc về các nhà đầu tư thiên thần và các quỹ đầu tư mạo hiểm tự do trên thị trường tài chính.",
                nextId: 68,
                score: 5,
            },
        ],
    },
    
    {
        id: 62,
    
        speaker: "Bạn",
    
        nextId: 63,
    
        text: "Để tối ưu hóa quản lý, tốt nhất ngài nên giao quyền sở hữu toàn bộ các nhà máy, hầm mỏ khoáng sản này cho các tập đoàn tư nhân nước ngoài nắm giữ. Họ có kinh nghiệm quản trị và sẽ vận hành chúng hiệu quả hơn.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 63,
    
        speaker: "Alexei",
    
        nextId: 64,
    
        text: "Một luồng áp lực lạnh lẽo đột ngột bủa vây lấy căn phòng. Ông tiến lại gần, hai tay chống xuống mặt bàn gỗ, bóng của ông đổ dài che khuất cả ánh đèn bão, giọng nói rít qua kẽ răng đầy phẫn nộ.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 64,
    
        speaker: "Alexei",
    
        nextId: 71,
    
        text: "Giao huyết mạch quốc gia cho tài phiệt nước ngoài? Đồng chí muốn chúng tôi quỳ gối làm nô lệ một lần nữa sao? Những người công nhân của tôi đổ mồ hôi, xương máu trên công trường này không phải để làm giàu cho những cái túi không đáy của lũ tư bản ngoại quốc! Đó là một tư duy phản bội lại giai cấp, phản bội lại lý tưởng. Đừng bao giờ thốt ra những lời nhơ bẩn đó ở đây!",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 65,
    
        speaker: "Bạn",
    
        nextId: 66,
    
        text: "Quyền sở hữu tối cao phải thuộc về toàn dân, dưới hai hình thức là sở hữu nhà nước và sở hữu tập thể. Phải xóa bỏ hoàn toàn chế độ tư hữu về tư liệu sản xuất để không kẻ nào có thể biến thành công cụ bóc lột kẻ khác.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 66,
    
        speaker: "Alexei",
    
        nextId: 67,
    
        text: "Alexei khẽ sững sờ, rồi ông bật cười một điệu cười vang dội đầy sảng khoái. Ông vỗ tay một cái rõ to, ánh nhìn rực sáng lý tưởng như nhìn thấy một người đồng chí thực thụ.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 67,
    
        speaker: "Alexei",
    
        nextId: 71,
    
        text: "Tuyệt vời! Bản chất của chúng tôi nằm chính ở đó! Khi nhà máy, đất đai, hầm mỏ thuộc về toàn dân, người công nhân đang làm chủ vận mệnh của chính mình và đất nước. Không còn tư hữu, không còn áp bức bè phái, tất cả chung tay xây dựng một xã hội công bằng. Đồng chí đã nắm giữ được cái hồn của hệ thống này rồi!",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 68,
    
        speaker: "Bạn",
    
        nextId: 69,
    
        text: "Tôi nghĩ quyền sở hữu nên thuộc về các nhà đầu tư thiên thần và các quỹ đầu tư mạo hiểm tự do. Hãy để họ tự do mua bán cổ phần nhà máy trên thị trường tài chính để tối ưu dòng vốn.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 69,
    
        speaker: "Alexei",
    
        nextId: 70,
    
        text: "Alexei khẽ lắc đầu. Ông chậm rãi quay lưng lại, vớ lấy chiếc tẩu thuốc cũ, giọng nói pha chút mỉa mai lạnh lùng.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 70,
    
        speaker: "Alexei",
    
        nextId: 71,
    
        text: "Nhà đầu tư thiên thần? Quỹ đầu tư mạo hiểm? Đồng chí đang dùng thứ ngôn từ hoa mỹ để che đậy cho những canh bạc đầu cơ của thị trường tư bản hiện đại rồi. Hệ thống của tôi tạo ra những giá trị vật chất thực tế để phục vụ nhân dân, chứ không phải một sòng bạc tài chính để lũ tài phiệt thao túng luân chuyển các con số. Đồng chí lại đi lạc sang thế giới của gã James West rồi.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },

    {
        id: 71,
    
        speaker: "Bối cảnh",
    
        nextId: 72,
    
        text: "Alexei bước đến bên góc phòng, lật mở tấm bản đồ công nghiệp hóa khổng lồ với hàng ngàn mũi tên đỏ rực hướng về các đô thị mới. Ông chỉ tay vào những mô hình đoàn tàu xập xình chở đầy thép đặc, những chiếc máy cày cơ khí cơ bắp vừa xuất xưởng được in trang trọng trên mặt báo.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 72,
    
        speaker: "Alexei",
    
        text: "Sự hy sinh và kỷ luật nghiêm túc của chúng tôi suốt những năm tháng qua đã mang lại những quả ngọt vĩ đại gì cho đất nước, đồng chí có biết không?",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Biến đất nước từ một nền nông nghiệp lạc hậu thành một cường quốc công nghiệp có năng lực quốc phòng mạnh mẽ, bảo vệ đất nước.",
                nextId: 73,
                score: 10,
            },
    
            {
                text: "B. Biến đất nước thành trung tâm gia công, lắp ráp điện thoại thông minh và giày dép lớn nhất cho các nước phương Tây.",
                nextId: 76,
                score: 0,
            },
    
            {
                text: "C. Giúp chuyển dịch mạnh mẽ nền kinh tế sang các ngành dịch vụ như tài chính, ngân hàng và du lịch nghỉ dưỡng.",
                nextId: 79,
                score: 5,
            },
        ],
    },
    
    {
        id: 73,
    
        speaker: "Bạn",
    
        nextId: 74,
    
        text: "Nó đã tạo nên một kỳ tích: biến đất nước từ một nền nông nghiệp lạc hậu, nghèo nàn thành một cường quốc công nghiệp vĩ đại. Một pháo đài có năng lực quốc phòng mạnh mẽ đủ sức bẻ gãy mọi họng súng xâm lược và bảo vệ nền độc lập của tổ quốc.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 74,
    
        speaker: "Alexei",
    
        nextId: 75,
    
        text: "Alexei đứng lặng đi. Ông nhìn ra ngoài cửa sổ, nơi những ánh lửa công trường vẫn rực cháy giữa đêm đông, giọng nói trầm xuống.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 75,
    
        speaker: "Alexei",
    
        nextId: 82,
    
        text: "Đúng vậy... Hãy nhìn xem, từ những đôi guốc mộc và những lưỡi cày bẻ bằng tay, giờ đây chúng tôi đã có những dàn tên lửa, những đại công xưởng luyện kim làm chấn động thế giới. Sự hy sinh của toàn dân đã được đền đáp bằng một vị thế hiên ngang, một tấm khiên thép bảo vệ hòa bình. Kỳ tích này được viết bằng ý chí sắt đá mà không một thế lực nào có thể phủ nhận!",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 76,
    
        speaker: "Bạn",
    
        nextId: 77,
    
        text: "Thành quả lớn nhất là biến đất nước chúng ta thành trung tâm công xưởng gia công lớn, chuyên lắp ráp điện thoại thông minh, may mặc quần áo và giày dép giá rẻ cho các thị trường phương Tây.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 77,
    
        speaker: "Alexei",
    
        nextId: 78,
    
        text: "Alexei quay lại nhìn bạn, ánh nhìn long lên sấm sét, thanh âm gầm vang khiến những chiếc cốc sứ trên bàn rung lên bần bật.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 78,
    
        speaker: "Alexei",
    
        nextId: 82,
    
        text: "Gia công? Lắp ráp giày dép và đồ chơi cho phương Tây? Đồng chí đang sỉ nhục lòng tự tôn của đất nước này đấy à! Chúng tôi xây dựng đại công nghiệp để làm chủ, để tự chế tạo ra những cỗ máy vĩ đại, chứ không phải biến đất nước thành một xưởng thợ rẻ mạt đi làm thuê, nhặt nhạnh những đồng tiền lẻ từ lòng thương hại của bọn tư bản! Thật là một suy nghĩ thiển cận và bạc nhược!",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 79,
    
        speaker: "Bạn",
    
        nextId: 80,
    
        text: "Thành quả lớn nhất chính là giúp quốc gia chuyển dịch mạnh mẽ nền kinh tế sang các ngành dịch vụ cao cấp như tài chính, hệ thống ngân hàng thương mại và du lịch nghỉ dưỡng.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 80,
    
        speaker: "Alexei",
    
        nextId: 81,
    
        text: "Alexei khẽ thở dài, ông nhìn bạn như nhìn một đứa trẻ chưa lớn. Ông lắc đầu, giọng nói đượm vẻ thất vọng.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 81,
    
        speaker: "Alexei",
    
        nextId: 82,
    
        text: "Dịch vụ tài chính và du lịch nghỉ dưỡng sao? Đồng chí lại mang cái tư duy của nền kinh tế tri thức hiện đại ở thế kỷ XXI vào đây rồi. Giữa vòng vây gươm súng của kẻ thù, nếu không có những tấn thép, không có súng đạn và máy cày, thì những dịch vụ xa xỉ của đồng chí liệu có đỡ nổi một viên đạn đại bác không? Đừng lấy lý thuyết của tương lai để áp đặt vào thực tế xương máu của chúng tôi.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },

    {
        id: 82,
    
        speaker: "Bối cảnh",
    
        nextId: 83,
    
        text: "Bầu không khí trong văn phòng chợt chìm xuống. Alexei bước lại gần chiếc ghế đối diện bạn. Ông khoanh tay, nét mặt thoáng chút mệt mỏi và trầm ngâm.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 83,
    
        speaker: "Alexei",
    
        text: "Nhưng... tôi biết hệ thống của mình không phải là một vị thần hoàn hảo tuyệt đối. Việc chúng tôi dồn toàn bộ 'gạch đá', tài nguyên để xây dựng pháo đài công nghiệp nặng quá lâu... đồng chí có biết nó sẽ dễ dẫn đến căn bệnh hệ quả chí mạng nào cho nền kinh tế không?",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Khủng hoảng thừa hàng hóa tiêu dùng, người dân ăn không hết phải đem đổ bỏ.",
                nextId: 84,
                score: 0,
            },
    
            {
                text: "B. Dễ gây ra tình trạng mất cân đối trong nền kinh tế, công nghiệp nhẹ và nông nghiệp chậm phát triển, dẫn đến khan hiếm hàng tiêu dùng thiết yếu.",
                nextId: 87,
                score: 10,
            },
    
            {
                text: "C. Khủng hoảng do bong bóng bất động sản và các khoản nợ xấu của ngân hàng tư nhân.",
                nextId: 90,
                score: 5,
            },
        ],
    },
    
    {
        id: 84,
    
        speaker: "Bạn",
    
        nextId: 85,
    
        text: "Nó sẽ dẫn đến cuộc khủng hoảng thừa nghiêm trọng về hàng hóa tiêu dùng. Nhà máy sản xuất ra quá nhiều quần áo, thực phẩm khiến người dân dùng không hết, phải đem đổ bỏ hàng loạt xuống sông.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 85,
    
        speaker: "Alexei",
    
        nextId: 86,
    
        text: "Alexei quay lại, ông chỉ tay vào chiếc kệ gỗ trống trải nơi góc phòng, giọng nói mang một nỗi buồn khó giấu.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 86,
    
        speaker: "Alexei",
    
        nextId: 93,
    
        text: "Khủng hoảng thừa hàng tiêu dùng? Đổ bỏ quần áo, thực phẩm sao? Đồng chí đang sống ở hành tinh nào vậy? Đó là căn bệnh thừa mứa của gã James West khi công nhân không có tiền mua hàng. Còn ở đây, người dân của tôi có tiền, nhưng các cửa hàng lại chẳng có đủ nhu yếu phẩm để bán cho họ. Đồng chí đã đoán sai hoàn toàn bản chất rạn nứt của khối thép này rồi.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 87,
    
        speaker: "Bạn",
    
        nextId: 88,
    
        text: "Nó sẽ gây ra tình trạng mất cân đối nghiêm trọng trong cấu trúc nền kinh tế. Khi công nghiệp nặng chiếm trọn tài nguyên, ngành công nghiệp nhẹ và nông nghiệp sẽ bị đình trệ, dẫn đến sự khan hiếm kéo dài của các mặt hàng tiêu dùng thiết yếu phục vụ đời sống hằng ngày của nhân dân.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 88,
    
        speaker: "Alexei",
    
        nextId: 89,
    
        text: "Alexei khựng người lại, ông nhìn sâu vào mắt bạn, một cái gật đầu đầy chậm rãi và nặng nề. Tiếng thở dài của ông chất chứa nỗi niềm của một người chèo lái con thuyền vĩ mô.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 89,
    
        speaker: "Alexei",
    
        nextId: 93,
    
        text: "Đồng chí đã nhìn thấu vết thương của tôi rồi... Đúng vậy, vì mải mê đúc thép và chế tạo vũ khí để sinh tồn, chúng tôi đã vô tình bỏ quên những chiếc kim khâu, những đôi giày, những thớ thịt trên bàn ăn của người dân. Sự mất cân đối này giống như một người khổng lồ có cánh tay bằng sắt nhưng đôi chân lại suy kiệt vì thiếu dinh dưỡng. Đó là cái giá quá đắt mà chúng tôi phải trả.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 90,
    
        speaker: "Bạn",
    
        nextId: 91,
    
        text: "Hệ quả tất yếu là nền kinh tế sẽ rơi vào khủng hoảng do bong bóng bất động sản vỡ òa và các khoản nợ xấu khổng lồ từ hệ thống ngân hàng tư nhân kiểm soát.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 91,
    
        speaker: "Alexei",
    
        nextId: 92,
    
        text: "Alexei khẽ xua tay, ông ngả tay lên lưng chiếc ghế, giọng nói điềm đạm nhưng dứt khoát bác bỏ.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 92,
    
        speaker: "Alexei",
    
        nextId: 93,
    
        text: "Bong bóng bất động sản? Nợ xấu ngân hàng tư nhân? Đồng chí lại rập khuôn những căn bệnh kinh niên của nền kinh tế thị trường tư bản vào đây rồi. Ở hệ thống của tôi, đất đai thuộc về nhà nước, ngân hàng nằm trong tay nhân dân, không có chỗ cho lũ đầu cơ tạo bong bóng kiếm lời. Khủng hoảng của tôi nằm ở sự phân bổ vật chất thực tế, chứ không phải những trò chơi tài chính ảo.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },

    {
        id: 93,
    
        speaker: "Bối cảnh",
    
        nextId: 94,
    
        text: "Alexei tiến lại gần, ông đặt một bàn tay thô ráp, to lớn nhưng đầy ấm áp lên vai bạn, áp lực từ ánh nhìn ông khiến không gian như ngưng đọng.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 94,
    
        speaker: "Alexei",
    
        text: "Thời đại đang thay đổi từng ngày, đồng chí ạ. Khi dòng chảy công nghệ thế giới chuyển mình sang làn sóng tin học hóa, tự động hóa vi mạch... nếu mô hình của tôi vẫn giữ nguyên sự cứng nhắc, bảo thủ và cơ chế mệnh lệnh tuyệt đối, đồng chí nghĩ điều gì sẽ xảy ra?",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Nền kinh tế sẽ ngày càng trì trệ, chậm thích ứng với các thay đổi công nghệ mới, dẫn đến tụt hậu về hiệu quả và năng suất lao động.",
                nextId: 95,
                score: 10,
            },
    
            {
                text: "B. Nền kinh tế tự động phát triển vượt bậc mà không cần thay đổi bất kỳ chính sách nào.",
                nextId: 98,
                score: 0,
            },
    
            {
                text: "C. Sẽ giúp đất nước chuyển dịch thành công sang nền kinh tế tri thức hướng về xuất khẩu một cách tự nhiên.",
                nextId: 101,
                score: 5,
            },
        ],
    },
    
    {
        id: 95,
    
        speaker: "Bạn",
    
        nextId: 96,
    
        text: "Nền kinh tế sẽ ngày càng rơi vào tình trạng trì trệ, xơ cứng. Cơ chế mệnh lệnh sẽ bóp nghẹt tính sáng tạo, khiến chúng ta chậm chạp trong việc tiếp thu và thích ứng với các công nghệ mới, dẫn đến sự tụt hậu nghiêm trọng về hiệu quả và năng suất lao động so với thế giới.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 96,
    
        speaker: "Alexei",
    
        nextId: 97,
    
        text: "Bàn tay Alexei trên vai bạn khẽ siết chặt lại. Ông im lặng hồi lâu, quay mặt ngước nhìn sâu vào ngọn đèn đang lách tách cháy, giọng ông trầm xuống, chứa đựng một sự giác ngộ đầy lý trí.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 97,
    
        speaker: "Alexei",
    
        nextId: 104,
    
        text: "Đồng chí nói không sai một chữ... Sắt thép và mệnh lệnh có thể giúp chúng ta dựng nên các nhà máy nhanh chóng, nhưng chúng không thể đẻ ra sự sáng tạo hay các thuật toán vi mạch được. Nếu giữ nguyên sự xơ cứng, bộ máy khổng lồ này sẽ tự nghiền nát chính nó bởi sự trì trệ. Chúng tôi cần sự năng động, cần hơi thở của thời đại mới để không bị bỏ lại phía sau.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 98,
    
        speaker: "Bạn",
    
        nextId: 99,
    
        text: "Không cần lo lắng đâu, ngài Alexei. Nền kinh tế của ngài vững như bàn thạch, nó sẽ tự động bứt phá và phát triển vượt bậc mà không cần phải thay đổi hay cải cách bất kỳ chính sách nào cả.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 99,
    
        speaker: "Alexei",
    
        nextId: 100,
    
        text: "Alexei từ từ buông tay khỏi vai bạn, sự thất vọng lạnh lùng đổi lấy nỗi lo âu vừa qua. Ông quay lưng bước về phía bàn làm việc, giọng nói đanh lại đầy nghiêm khắc.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 100,
    
        speaker: "Alexei",
    
        nextId: 104,
    
        text: "Tự động bứt phá mà không cần thay đổi? Đó không phải là lòng tin, đó là sự mù quáng và lười biếng tư duy! Trên đời này làm gì có cỗ máy nào chạy mãi mãi mà không cần bảo dưỡng và nâng cấp? Sự tự mãn bảo thủ chính là liều thuốc độc êm ái nhất giết chết một vương triều. Tôi cần một người đồng hành tỉnh táo, chứ không cần một kẻ nịnh hót ru ngủ tôi trong sự lạc hậu.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 101,
    
        speaker: "Bạn",
    
        nextId: 102,
    
        text: "Sự cứng nhắc đó không đáng ngại, nó sẽ giúp đất nước chuyển dịch một cách tự nhiên và thành công sang nền kinh tế tri thức hướng về xuất khẩu.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 102,
    
        speaker: "Alexei",
    
        nextId: 103,
    
        text: "Alexei khẽ bật cười một tiếng khan, ông ngồi xuống chiếc ghế gỗ sờn cũ, lắc đầu ngao ngán.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 103,
    
        speaker: "Alexei",
    
        nextId: 104,
    
        text: "Chuyển dịch tự nhiên sang kinh tế tri thức hướng về xuất khẩu sao? Đồng chí đang nằm mơ giữa ban ngày rồi. Muốn hướng ra thế giới, muốn làm kinh tế tri thức, bộ máy này bắt buộc phải trải qua những cuộc đại phẫu đớn đau về thể chế, phải cởi trói cho tư duy năng động giống như cách các nước công nghiệp mới hay Việt Nam đang làm ở thời hậu thế. Không có chuyện 'tự nhiên' nào diễn ra nếu chúng ta cứ ôm khít lấy sự cứng nhắc này đâu.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },

    {
        id: 104,
    
        speaker: "Bối cảnh",
    
        nextId: 105,
    
        text: "Ánh chiều tà muộn mằn hắt qua ô cửa kính vòm, đổ những chiếc bóng dài dằng dặc của những bức tượng thép lên mặt sàn gỗ. Văn phòng chìm vào một khoảng không gian nửa sáng nửa tối đầy suy tư. Alexei nhìn thẳng vào mắt bạn, giọng nói của ông không còn nét gầm vang độc đoán, mà tràn đầy sự kỳ vọng, ấm áp của một người đang tìm kiếm một khối óc soi đường.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 105,
    
        speaker: "Alexei",
    
        text: "Đồng chí đã cùng tôi đi qua một chặng đường dài, đã chứng kiến cả sức mạnh vĩ đại vô song lẫn những vết rạn nứt chí mạng của khối thép này. Giờ đây, đứng trước ngã rẽ của lịch sử, nếu đồng chí chọn ở lại bên tôi, chúng ta sẽ làm gì để đưa khối thép này tiến lên?",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    
        choices: [
            {
                text: "A. Giữ nguyên sự cứng nhắc, tiếp tục cấm đoán hoàn toàn các nhu cầu thiết yếu của người dân để làm công nghiệp nặng mãi mãi.",
                nextId: 106,
                score: 0,
            },
    
            {
                text: "B. Phá bỏ hoàn toàn hệ thống nhà máy cốt lõi, quay về thời kỳ nông nghiệp lạc hậu như trước.",
                nextId: 109,
                score: 5,
            },
    
            {
                text: "C. Giữ vững nền tảng công nghiệp nặng và quốc phòng vững chắc, nhưng cải cách cơ chế, tăng cường phát triển công nghiệp nhẹ, nông nghiệp và ứng dụng công nghệ hiện đại phục vụ đời sống nhân dân.",
                nextId: 112,
                score: 10,
            },
        ],
    },
    
    {
        id: 106,
    
        speaker: "Bạn",
    
        nextId: 107,
    
        text: "Chúng ta phải giữ nguyên sự cứng nhắc này! Tiếp tục siết chặt kỷ luật, cấm đoán hoàn toàn các nhu cầu tiêu dùng thiết yếu của người dân để tập trung làm công nghiệp nặng mãi mãi. Sắt thép và vũ khí là thứ duy nhất tối thượng!",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 107,
    
        speaker: "Alexei",
    
        nextId: 108,
    
        text: "Alexei thở dài, ông tựa lưng vào ghế, gương mặt hằn rõ sự thất vọng tột cùng. Ông xua tay, giọng nói khàn đặc và mệt mỏi.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 108,
    
        speaker: "Alexei",
    
        text: "Lại đúc thép và bắt nhân dân nhịn đói mãi mãi sao? Đồng chí còn tàn nhẫn và mù quáng hơn cả những gì kẻ thù gán ghép cho tôi. Mục tiêu cuối cùng của cách mạng là mang lại cuộc sống ấm no, hạnh phúc cho nhân dân, chứ không phải biến đất nước thành một công xưởng lạnh lẽo không có tình người. Đồng chí không phải là người đồng hành tôi tìm kiếm. Xin mời ra ngoài.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 109,
    
        speaker: "Bạn",
    
        nextId: 110,
    
        text: "Hệ thống này quá lỗi thời rồi. Chúng ta nên đập tan, phá bỏ hoàn toàn hệ thống nhà máy cốt lõi này, giải tán toàn bộ và quay về thời kỳ nông nghiệp làng quê lạc hậu như ngày xưa cho bình yên.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 110,
    
        speaker: "Alexei",
    
        nextId: 111,
    
        text: "Alexei đập mạnh tay xuống bàn, đứng phắt dậy, ánh mắt bừng bừng lửa giận như muốn thiêu rụi không gian. Ông chỉ tay thẳng ra cửa với một thái độ dứt khoát, không khoan nhượng.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 111,
    
        speaker: "Alexei",
    
        text: "Đập bỏ toàn bộ pháo đài công nghiệp để quay về thời kỳ rơm rạ lạc hậu? Đồng chí muốn dâng toàn bộ thành quả, mồ hôi và xương máu của hàng triệu con người cho kẻ thù xâu xé sao? Đó không phải là cải cách, đó là sự đầu hàng hèn nhát và ngu xuẩn! Nếu muốn đi lùi vào bóng tối của lịch sử, cút khỏi văn phòng của tôi ngay lập tức!",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 112,
    
        speaker: "Bạn",
    
        nextId: 113,
    
        text: "Chúng ta sẽ giữ vững nền tảng công nghiệp nặng và quốc phòng vững chắc mà ngài đã gầy dựng. Nhưng đồng thời, chúng ta phải dũng cảm cải cách cơ chế quản lý, cởi trói cho tư duy năng động, tập trung phát triển mạnh mẽ công nghiệp nhẹ và nông nghiệp, ứng dụng những thành tựu công nghệ hiện đại nhất để phục vụ trực tiếp cho đời sống và nâng cao hạnh phúc của nhân dân.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 113,
    
        speaker: "Alexei",
    
        nextId: 114,
    
        text: "Văn phòng bỗng rơi vào một khoảng lặng im phăng phắc. Alexei đứng trân trối nhìn bạn. Bỗng ông bước tới, giang đôi tay to lớn ôm chặt lấy bả vai bạn bằng một cái ôm nồng hậu đậm chất Nga, giọng nói run lên vì xúc động và tự hào.",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
    
    {
        id: 114,
    
        speaker: "Alexei",
    
        text: "Tuyệt vời... Tuyệt vời lắm, đồng chí của tôi! Giữ lại bộ xương bằng thép nhưng thổi vào đó một trái tim nhân văn, năng động... Đó chính là con đường đưa chúng ta đến vinh quang đích thực! Hãy ở lại đây, cùng tôi cầm lái, chúng ta sẽ biến khối thép này thành một kỳ quan vĩ đại, thịnh vượng và trường tồn cùng thời đại!",
    
        background: lienxo,
    
        characters: [
            {
                id: "Alexei",
                image: Alexei,
                position: "center",
            },
        ],
    },
]