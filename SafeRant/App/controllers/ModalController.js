﻿app.controller("ModalController", ['$rootScope', '$scope', '$uibModal',

    function ($rootScope, $scope, $uibModal) {

        $scope.launchModal = (template, controller) => {

            var modalInstance = $uibModal.open({
                templateUrl: template,
                controller: controller,
                scope: $scope
            });

            modalInstance.result.then(function (result) {

            }, function (result) {

            });
        };

    }
]);