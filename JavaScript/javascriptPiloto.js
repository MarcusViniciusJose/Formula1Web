$(document).ready(function () {
    var page = 1;
    var current_page = 1;
    var total_page = 0;
    var is_ajax_fire = 0;
    var types = new Map();
    var dataCon;
    createHeadTable();
    createForm();
    createEditForm();
    manageData();

    function manageData() {

        $.ajax({
            dataType: 'json',
            url: './GET/getPiloto.php',
            data: {page: page}
        }).done(function (data) {
            total_page = Math.ceil(data.total / 10);
            current_page = page;
            $('#pagination').twbsPagination({
                totalPages: total_page,
                visiblePages: current_page,
                onPageClick: function (event, pageL) {
                    page = pageL;
                    if (is_ajax_fire != 0) {
                        getPageData();
                    }
                }
            });

            manageRow(data.data);
            is_ajax_fire = 1;
        });
    }

    function getPageData() {
        $.ajax({
            dataType: 'json',
            url: './GET/getPiloto.php',

            data: {page: page}
        }).done(function (data) {
            manageRow(data.data);
        });
    }

    function manageRow(data) {

        dataCon = data;
        var rows = '';
        var i = 0;
        $.each(data, function (key, value) {
            rows = rows + '<tr>';
            rows = rows + '<td>' + value.piloto_id + '</td>';
            rows = rows + '<td>' + value.nome + '</td>';
            rows = rows + '<td>' + value.pontuacao + '</td>';
            rows = rows + '<td>' + value.equipe + '</td>';
            rows = rows + '<td>' + value.vitorias + '</td>';
            rows = rows + '<td>' + value.podiums + '</td>';
            rows = rows + '<td>' + value.usuario_id + '</td>';
            rows = rows + '<td data-id="' + i++ + '">';
            rows = rows + '<button data-toggle="modal" data-target="#edit-item" class="btn btn-primary edit-item">Editar</button> ';
            rows = rows + '<button class="btn btn-danger remove-item"  data-id="' + value.piloto_id + '">Deletar</button>';
            rows = rows + '</td>';
            rows = rows + '</tr>';
        });

        $("tbody").html(rows);
    }
    function createHeadTable() {

        var rows = '<tr>';
        rows = rows + '<th> Código </th>';
        rows = rows + '<th> Nome </th>';
        rows = rows + '<th> Pontuação </th>';
        rows = rows + '<th> Equipe </th>';
        rows = rows + '<th> Vitorias </th>';
        rows = rows + '<th> Podiums </th>';
        rows = rows + '<th> Usuario </th>';
        rows = rows + '<th width="200px">Ação</th>'
        rows = rows + '</tr>'
        $("thead").html(rows);
    }
    function createForm() {
        var html = '';
        //html = html + '<div class="form-group">';
        //html = html + '<label class="control-label" for="piloto_id">Código</label>';
        //html = html + '<input type="text" name="piloto_id" class="form-control" data-error="Por favor entre com o codpiloto" required />';
        //html = html + '<div class="help-block with-errors"></div>';
        //html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="nome">Nome</label>';
        html = html + '<input type="text" name="nome" class="form-control" data-error="Por favor entre com o nome" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="pontuacao">pontuacao</label>';
        html = html + '<input type="text" name="pontuacao" class="form-control" data-error="Por favor entre com a pontuacao" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="equipe">Equipe</label>';
        html = html + '<input type="text" name="equipe" class="form-control" data-error="Por favor entre com a Equipe" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="vitorias">Vitorias</label>';
        html = html + '<input type="text" name="vitorias" class="form-control" data-error="Por favor entre com as Vitorias" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="podiums">Podiums</label>';
        html = html + '<input type="text" name="podiums" class="form-control" data-error="Por favor entre com os Podiums" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<button type="submit" class="btn crud-submit btn-success">Salvar</button>';
        html = html + '</div>';
        $("#create-item").find("form").html(html);
    }
    function createEditForm() {

        var html = '<input type="hidden" name="cod" class="edit-id">';
        //html = html + '<div class="form-group">';
        //html = html + '<label class="control-label" for="piloto_id">Código</label>';
        //html = html + '<input type="text" name="piloto_id" class="form-control" data-error="Por favor entre com o codpiloto" required />';
        //html = html + '<div class="help-block with-errors"></div>';
        //html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="nome">Nome</label>';
        html = html + '<input type="text" name="nome" class="form-control" data-error="Por favor entre com o nome" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="pontuacao">Pontuacao</label>';
        html = html + '<input type="text" name="pontuacao" class="form-control" data-error="Por favor entre com a Pontuacao" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="equipe">Equipe</label>';
        html = html + '<input type="text" name="equipe" class="form-control" data-error="Por favor entre com a Equipe" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<label class="control-label" for="vitorias">Vitorias</label>';
        html = html + '<input type="text" name="vitorias" class="form-control" data-error="Por favor entre com as Vitorias" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="podiums">Podiums</label>';
        html = html + '<input type="text" name="podiums" class="form-control" data-error="Por favor entre com os Podiums" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<button type="submit" class="btn crud-submit-edit btn-success">Salvar</button>';
        html = html + '</div>';
        $("#edit-item").find("form").html(html);

    }


    $(".crud-submit").click(function (e) {
        e.preventDefault();
        var form_action = $("#create-item").find("form").attr("action");
        var piloto_id = $("#create-item").find("input[name='piloto_id']").val();
        var nome = $("#create-item").find("input[name='nome']").val();
        var pontuacao = $("#create-item").find("input[name='pontuacao']").val();
        var equipe = $("#create-item").find("input[name='equipe']").val();
        var vitorias = $("#create-item").find("input[name='vitorias']").val();
        var podiums = $("#create-item").find("input[name='podiums']").val();

        $.ajax({
            dataType: 'json',
            type: 'POST',
            url: form_action,
            data: {piloto_id: piloto_id, nome: nome, pontuacao: pontuacao, equipe: equipe, vitorias: vitorias, podiums: podiums}
        }).done(function (data) {
            $("#create-item").find("input[name='piloto_id']").val('');
            $("#create-item").find("input[name='nome']").val('');
            $("#create-item").find("input[name='pontuacao']").val('');
            $("#create-item").find("input[name='equipe']").val('');
            $("#create-item").find("input[name='vitorias']").val('');
            $("#create-item").find("input[name='podiums']").val('');
            getPageData();
            $(".modal").modal('hide');
            toastr.success(data.msg, 'Alerta de Sucesso', {timeOut: 5000});

        });

    });
    $("body").on("click", ".edit-item", function () {
        var index = $(this).parent("td").data('id');

        var piloto_id = dataCon[index].piloto_id;
        var nome = dataCon[index].nome;
        var pontuacao = dataCon[index].pontuacao;
        var equipe = dataCon[index].equipe;
        var vitorias = dataCon[index].vitorias;
        var podiums = dataCon[index].podiums;

        $("#edit-item").find("input[name='piloto_id']").val(piloto_id);
        $("#edit-item").find("input[name='nome']").val(nome);
        $("#edit-item").find("input[name='pontuacao']").val(pontuacao);
        $("#edit-item").find("input[name='equipe']").val(equipe);
        $("#edit-item").find("input[name='vitorias']").val(vitorias);
        $("#edit-item").find("input[name='podiums']").val(podiums);
    });

    $(".crud-submit-edit").click(function (e) {

        e.preventDefault(); 
        var form_action = $("#edit-item").find("form").attr("action");
        var piloto_id = $("#edit-item").find("input[name='piloto_id']").val();
        var nome = $("#edit-item").find("input[name='nome']").val();
        var pontuacao = $("#edit-item").find("input[name='pontuacao']").val();
        var equipe = $("#edit-item").find("input[name='equipe']").val();
        var vitorias = $("#edit-item").find("input[name='vitorias']").val();
        var podiums = $("#edit-item").find("input[name='podiums']").val();

        $.ajax({
            dataType: 'json',
            type: 'POST',
            url: form_action,
            data: {piloto_id: piloto_id, nome: nome, pontuacao: pontuacao, equipe: equipe, vitorias: vitorias, podiums: podiums}

        }).done(function (data) {

            getPageData();
            $(".modal").modal('hide');
            toastr.success(data.msg, 'Alerta de Sucesso', {timeOut: 5000});
        });


    });

    function getDataSelect(type, select) {

        $.ajax({
            dataType: 'json', url: 'Acesso' + type,
            data: {page: page}
        }).done(function (data) {
            manageSelectOption(data.data, select, type);
        });
    }

    $("body").on("click", ".remove-item", function () {
        var piloto_id = $(this).data('id');
        if (confirm("Você tem certeza que deseja deletar este piloto?")) {
            $.ajax({
                type: "POST",
                url: "./CRUD/deletePiloto.php",
                data: {piloto_id: piloto_id},
                success: function (response) {
                    // Atualiza a tabela após a exclusão
                    getPageData();
                    toastr.success("Piloto deletado com sucesso!", 'Alerta de Sucesso', {timeOut: 5000});
                },
                error: function () {
                    toastr.error("Erro ao deletar o piloto.", 'Alerta de Erro', {timeOut: 5000});
                }
            });
        }
    });


});
