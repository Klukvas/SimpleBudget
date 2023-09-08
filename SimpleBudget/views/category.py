from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status

from SimpleBudget.serializers import CategorySerializer


class CategoryApiView(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = CategorySerializer

    def post(self, request: Request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.validated_data['user'] = request.user
        serializer.save()
        return Response(status=status.HTTP_200_OK, data=serializer.data)
